import React, { useEffect, useState } from "react";
import styles from "./CreateResourcePage.module.css";
import { useNavigate } from "react-router-dom";
import { Resource } from "../../CommunityResourcesPage/ui/constants";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { MultiValue } from "react-select";
import { useUser } from "../../../shared/lib/customHooks/useUser";
import axios from "axios";

interface CreateResourcePageProps {
  addResource?: (newResource: Resource) => void;
}

type ResourceType = "post" | "youtube" | "";
type Visibility = "everyone" | "members" | "mentors";

export const CreateResourcePage: React.FC<CreateResourcePageProps> = ({
  addResource,
}) => {
  const userIdFromLocalStorage = localStorage.getItem("userId")
    ? Number(localStorage.getItem("userId"))
    : null;
  const { user } = useUser(userIdFromLocalStorage);
  const [resourceType, setResourceType] = useState<ResourceType>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<
    MultiValue<{ value: string; label: string }>
  >([]);
  const [selectedTags, setSelectedTags] = useState<
    MultiValue<{ value: string; label: string }>
  >([]);
  const [visibility, setVisibility] = useState<Visibility>("everyone");
  const [isMentor, setIsMentor] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const resourceTypeOptions = [
    { value: "post", label: "post" },
    { value: "youtube video", label: "youtube video" },
  ];

  const visibilityOptions: {
    value: Visibility;
    label: string;
    forMentorOnly?: boolean;
  }[] = [
    { value: "everyone", label: "Everyone" },
    { value: "members", label: "Members only" },
    { value: "mentors", label: "Mentors only", forMentorOnly: isMentor },
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
  };

  const validate = () => {
    const validateErrors: Record<string, string> = {};

    if (!resourceType)
      validateErrors.resourceType = "Resource type is required";
    if (!title.trim()) {
      validateErrors.title = "Title is required";
    } else if (title.trim().length < 1 || title.trim().length > 100) {
      validateErrors.title = "Title must be between 1 and 100 characters";
    }
    if (resourceType === "post" && !description.trim()) {
      validateErrors.description = "Description is required for posts";
    }
    if (selectedTags.length === 0)
      validateErrors.selectedTags = "Please add at least one tag";

    setErrors(validateErrors);
    return Object.keys(validateErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // if (!selectedTag) {
    //   alert("Please select a tag for the resource.");
    //   return;
    // }

    const newResource = {
      id: Date.now(),
      title,
      description,
      // file,
      // fullInfo,
      // tags: [selectedTag],
      tags: selectedTags.map((tag) => tag.value),
    };

    if (addResource) {
      addResource(newResource);
    }

    navigate("/community_resources");

    setTitle("");
    setDescription("");
    // setFile(null);
    // setFullInfo("");
    // setSelectedTag(null);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Add new resource</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="text-sm font-medium">Resource type*</label>
          <Select
            placeholder="Select"
            options={resourceTypeOptions}
            value={
              resourceTypeOptions.find((opt) => opt.value === resourceType) ||
              null
            }
            onChange={(opt) =>
              setResourceType((opt?.value as ResourceType) || "")
            }
          />
          {errors.resourceType && (
            <p className="text-sm text-red-500">{errors.resourceType}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Title*</label>
          <input
            type="text"
            placeholder="Add title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            maxLength={100}
            // className={styles.input}
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title}</p>
          )}
          <p className="text-xs text-gray-400">{title.length}/100</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Description*</label>
          <textarea
            placeholder="Write a short description of the resource"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            // className={styles.input}
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Add Tags*</label>
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
          />
          {errors.selectedTags && (
            <p className="text-sm text-red-500">{errors.selectedTags}</p>
          )}
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">This resource is for:</h3>
          <div className="space-y-3">
            {visibilityOptions
              .filter((opt) => opt.forMentorOnly !== false)
              .map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="visibility"
                    value={opt.value}
                    checked={visibility === opt.value}
                    onChange={() => setVisibility(opt.value)}
                    className="accent-pink-600"
                  />
                  {opt.label}
                </label>
              ))}
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Published
        </button>
      </form>
    </div>
  );
};
