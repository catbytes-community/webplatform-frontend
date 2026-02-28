import { useEffect, useState } from "react";
import styles from "./CreateResourcePage.module.css";
import { useNavigate } from "react-router-dom";
import { Resource } from "../../CommunityResourcesPage/ui/constants";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { MultiValue } from "react-select";
import { useUser } from "../../../shared/lib/customHooks/useUser";
import axios from "axios";
import ConfirmModal from "../../../shared/ui/ConfirmModal/ConfirmModal";
import Navbar from "../../../shared/ui/Navbar/Navbar";
import makeAnimated from "react-select/animated";
import Footer from "../../../shared/ui/Footer/Footer";
import Button, { ButtonsEnum } from "../../../shared/ui/Button/Button";

interface CreateResourcePageProps {
  addResource?: (newResource: Resource) => void;
}

type Type = "post" | "video";
type Audience = "public" | "member" | "mentor";

export const CreateResourcePage: React.FC<CreateResourcePageProps> = ({
  addResource,
}) => {
  const userIdFromLocalStorage = localStorage.getItem("userId")
    ? Number(localStorage.getItem("userId"))
    : null;
  const { user } = useUser(userIdFromLocalStorage);
  const [selectedType, setSelectedType] = useState<Type>("post");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<
    MultiValue<{ value: string; label: string }>
  >([]);
  const [selectedTags, setSelectedTags] = useState<
    MultiValue<{ value: string; label: string }>
  >([]);
  const [audience, setAudience] = useState<Audience>("public");
  const [isMentor, setIsMentor] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const navigate = useNavigate();
  const animatedComponent = makeAnimated();

  const resourceTypeOptions = [
    { value: "post", label: "Post" },
    { value: "video", label: "YouTube video" },
  ];

  const audienceOptions: {
    value: Audience;
    label: string;
    isMentorOnly?: boolean;
  }[] = [
    { value: "public", label: "Everyone" },
    { value: "member", label: "Members only" },
    { value: "mentor", label: "Mentors only", isMentorOnly: isMentor },
  ];

  useEffect(() => {
    if (user) {
      setIsMentor(
        user?.roles?.filter(
          (role: { role_id: number; role_name: string }) =>
            role.role_name === "mentor",
        ).length > 0,
      );
    }
  }, [user]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_DEVAPI}tags`, {
          withCredentials: true,
        });

        const formattedTags = response?.data?.tags.map((tag: string) => ({
          value: tag,
          label: tag,
        }));

        setTags(formattedTags);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  const handleTagChange = (
    selectedOptions: MultiValue<{ value: string; label: string }>,
  ) => {
    setSelectedTags(selectedOptions || []);
    setErrors((prev) => ({ ...prev, selectedTags: "" }));
  };

  const validate = () => {
    const validateErrors: Record<string, string> = {};

    if (!title.trim()) {
      validateErrors.title = "Title is required";
    } else if (title.trim().length < 1 || title.trim().length > 100) {
      validateErrors.title = "Title must be between 1 and 100 characters";
    }
    if (selectedType === "post" && !description.trim()) {
      validateErrors.description = "Description is required for post";
    }
    if (selectedTags.length === 0 || selectedTags.length >= 10)
      validateErrors.selectedTags = "Please add from 1 to 10 tags";

    setErrors(validateErrors);
    return Object.keys(validateErrors).length === 0;
  };

  const handlePublishClick = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsConfirmModalOpen(true);
  };

  const submitResource = () => {
    const newResource = {
      id: Date.now(),
      selectedType,
      title,
      description,
      tags: selectedTags.map((tag) => tag.value),
      audience,
    };

    if (addResource) {
      addResource(newResource);
    }

    navigate("/community_resources");
    setTitle("");
    setSelectedType("post");
    setDescription("");
    setSelectedTags([]);
    setAudience("public");
  };

  const handleConfirmation = (confirmed: boolean) => {
    setIsConfirmModalOpen(false);

    if (confirmed) {
      submitResource();
    }
  };

  return (
    <div className="max-w-7xl px-5 mx-auto sm:px-10">
      <Navbar />
      <div className="mt-10">
        <h3 className="font-bold text-4xl">Add new resource</h3>
        <form
          className="mt-8 flex flex-col gap-6 md:flex-row justify-between"
          onSubmit={handlePublishClick}
        >
          <div className="flex flex-col gap-6 px-6 py-8 rounded-3xl md:w-3/5 bg-white/40 shadow-[0_6px_10px_#ffa6ad66]">
            <div className="flex w-full flex-col gap-2">
              <label className="text-sm text-slate-600">Resource type*</label>
              <Select
                placeholder="Select"
                options={resourceTypeOptions}
                value={resourceTypeOptions.find(
                  (opt) => opt.value === selectedType,
                )}
                onChange={(opt) => {
                  if (opt) {
                    setSelectedType(opt.value as Type);
                  }
                }}
                className={styles.select}
                classNamePrefix="select"
              />
              {errors.type && (
                <p className="text-sm text-red-500">{errors.type}</p>
              )}
            </div>

            <div className="flex w-full flex-col gap-2">
              <span className="flex flex-row items-end justify-between">
                <label className="text-sm text-slate-600">Title*</label>
                <p className="text-xs text-slate-500">{title.length}/100</p>
              </span>
              <input
                type="text"
                placeholder="Add title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setErrors((prev) => ({ ...prev, title: "" }));
                }}
                className="w-full bg-transparent rounded-md border border-slate-500 p-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-slate-400 hover:border-slate-400"
                maxLength={100}
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            <div className="flex w-full flex-col gap-2">
              <label className="text-sm text-slate-600">Description*</label>
              <textarea
                placeholder="Add description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setErrors((prev) => ({ ...prev, description: "" }));
                }}
                rows={4}
                className="w-full bg-transparent rounded-md border border-slate-500 p-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-slate-400 hover:border-slate-400"
              />
              {errors.description && (
                <p className="text-sm text-red-500">{errors.description}</p>
              )}
            </div>

            <div className="flex w-full flex-col gap-2">
              <span className="flex flex-row items-end justify-between">
                <label className="text-sm text-slate-600">Add tags*</label>
                <p className="text-xs text-slate-500">
                  {selectedTags.length}/10
                </p>
              </span>
              <CreatableSelect
                isClearable
                isMulti
                placeholder="Select"
                options={tags}
                value={selectedTags}
                onChange={handleTagChange}
                getNewOptionData={(inputValue) => ({
                  label: inputValue.trim().toLowerCase(),
                  value: inputValue.trim().toLowerCase(),
                })}
                isOptionDisabled={() => selectedTags.length >= 10}
                className={styles.select}
                classNamePrefix="select"
                components={animatedComponent}
                menuShouldScrollIntoView={false}
              />
              {errors.selectedTags && (
                <p className="text-sm text-red-500">{errors.selectedTags}</p>
              )}
            </div>
          </div>

          <div
            className={`${styles.audienceContainer} flex flex-col mt-6 rounded-3xl py-8 px-6 h-fit md:mt-0 md:w-2/5`}
          >
            <h3 className="text-xl font-semibold">This resource is for:</h3>
            <div className="mt-5 mb-10 gap-4 flex flex-col">
              {audienceOptions
                .filter((opt) => opt.isMentorOnly !== false)
                .map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="audience"
                      value={opt.value}
                      checked={audience === opt.value}
                      onChange={() => setAudience(opt.value)}
                      className="relative h-5 w-5 appearance-none rounded-full bg-[#fef7f8] transition checked:bg-rose-400 before:absolute before:inset-1 before:rounded-full before:bg-[#fef7f8] before:opacity-0 checked:before:opacity-100 cursor-pointer"
                    />
                    {opt.label}
                  </label>
                ))}
            </div>
            <Button
              btnType={ButtonsEnum.PRIMARY}
              onClick={handlePublishClick}
              label="Publish now"
            />
          </div>
        </form>

        {isConfirmModalOpen && (
          <ConfirmModal
            text="Are you sure you want to add new resource?"
            getConfirmation={handleConfirmation}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};
