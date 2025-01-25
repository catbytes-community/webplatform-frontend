import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import s from "./BecomeMentorForm.module.css";
import { BecomeMentorForm, Option } from "../../app/types/global";
import { SelectorsStyles } from "./SelectorStyles";
import { Fields, Languages } from "./DataOptions";
import { ErrorMessage } from "@hookform/error-message";
import { Modal } from "../../shared/ui/Modal/Modal";
import React from "react";

interface MentorModalFormProps {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

export const MentorForm: React.FC<MentorModalFormProps> = (props) => {
  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BecomeMentorForm>({
    criteriaMode: "all",
  });

  const expertiseArea = watch("expertiseArea", []);

  const isOtherExpertiseAreaSelected = (option: Option): boolean => {
    return option.value === "other";
  };

  const submitForm = (data: BecomeMentorForm) => {
    console.log(data);
  };

  return (
    <>
      {
        <Modal
          modalTitle="Application Form to Become a Mentor"
          buttonTitle="Apply"
          onSubmit={handleSubmit(submitForm)}
          onClose={props.onClose}
          children={
            <>
              <form className="max-w-md mx-auto">
                <label className={s.label}>Areas of expertise</label>
                <Controller
                  {...register("expertiseArea", {
                    required: "This field is required",
                  })}
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
                <ErrorMessage
                  errors={errors}
                  name="expertiseArea"
                  render={({ message }) => <p className={s.error}>{message}</p>}
                />
                {isOtherExpertiseAreaSelected(expertiseArea) && (
                  <div>
                    <label className={s.label}>Other area of expertise</label>
                    <div>
                      <input
                        {...register("otherArea", {
                          required: "This field is required",
                        })}
                        className={s.input}
                        type="text"
                        placeholder="Other"
                      />
                      <ErrorMessage
                        errors={errors}
                        name="otherArea"
                        render={({ message }) => (
                          <p className={s.error}>{message}</p>
                        )}
                      />
                    </div>
                  </div>
                )}
                <label className={s.label}>Languages</label>
                <Controller
                  {...register("language", {
                    required: "This field is required",
                  })}
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
                <ErrorMessage
                  errors={errors}
                  name="language"
                  render={({ message }) => <p className={s.error}>{message}</p>}
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
                  errors={errors}
                  name="experience"
                  render={({ message }) => <p className={s.error}>{message}</p>}
                />
              </form>
            </>
          }
        />
      }
    </>
  );
};
