import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import s from "./BecomeMentorButton.module.css";
import { BecomeMentorForm, Option } from "../../app/types/global";
import { SelectorsStyles } from "./SelectorStyles";
import { Fields, Languages } from "./DataOptions";
import { ErrorMessage } from "@hookform/error-message";
import { Modal } from "../../shared/ui/Modal/Modal";
import { useState } from "react";

export const MentorForm = () => {
  const {
    register,
    watch,
    // reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BecomeMentorForm>({
    criteriaMode: "all",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const expertiseArea = watch("expertiseArea", []);

  const isOtherExpertiseAreaSelected = (option: Option): boolean => {
    return option.value === "other";
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const submitForm = (data: BecomeMentorForm) => {
    handleClose();
    console.log(data);
  };

  return (
    <>
    {isModalOpen ? (
       <Modal
            modalTitle="Application Form to Become a Mentor"
            buttonTitle="Apply"
            onClick={handleSubmit(submitForm)}
            onClose={handleClose}
            children={
              <>
              <MentorForm />
                <form className="max-w-md mx-auto">
                  <label className={s.label}>Areas of expertise</label>
                  <Controller
                    name="expertiseArea"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        styles={SelectorsStyles}
                        placeholder="Select an area of expertise"
                        options={Fields}
                      />
                    )}
                  />
                  {isOtherExpertiseAreaSelected(expertiseArea) && (
                    <div>
                      <label className={s.label}>Other area of expertise</label>
                      <div>
                        <input
                          {...register("otherArea")}
                          className={s.input}
                          type="text"
                          placeholder="Other"
                        />
                      </div>
                    </div>
                  )}
                  <label className={s.label}>Languages</label>
                  <Controller
                    name="language"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="Select a language"
                        closeMenuOnSelect={false}
                        isMulti
                        options={Languages}
                        styles={SelectorsStyles}
                      />
                    )}
                  />
                  <label className={s.label}>
                    Links to your GitHub/LinkedIn accounts (optional)
                  </label>
                  <textarea
                    {...register("link")}
                    className={s.input}
                    rows={1}
                  ></textarea>
                  <label className={s.label}>Describe your experience</label>
                  <textarea
                    {...register("experience", {
                      required: "This field is required",
                    })}
                    className={s.input}
                  ></textarea>
                  <ErrorMessage
                    as="p"
                    errors={errors}
                    name="experience"
                  />
                </form>
              </>
            }
          />) : null}
        </>
  );
};
