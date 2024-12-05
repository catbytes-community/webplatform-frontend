import { useEffect, useState } from "react";
import s from "./BecomeMentorButton.module.css";
import Select from "react-select";
import { Modal } from "../../shared/ui/Modal/Modal";
import Button from "../../shared/ui/Button/Button";
import { Fields, Languages } from "./DataOptions";
import { SelectorsStyles } from "./SelectorStyles";
import { Controller, useForm } from "react-hook-form";
import { BecomeMentorForm, Option } from "../../app/types/global";
import { ErrorMessage } from "@hookform/error-message";

export const BecomeMentorButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    watch,
    // reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BecomeMentorForm>();

  const expertiseArea = watch("expertiseArea", []);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const submitForm = (data: BecomeMentorForm) => {
    handleClose();
    console.log(data);
  };

  // useEffect(() => {
  //   reset();
  // }, [reset])

  const isOtherExpertiseAreaSelected = (option: Option): boolean => {
    return option.value === "other";
  };

  return (
    <>
      <Button
        label="Become a mentor"
        onClick={handleOpen}
        btnType="primary_btn"
      />
      {isModalOpen ? (
        <>
          <Modal
            modalTitle="Application Form to Become a Mentor"
            buttonTitle="Apply"
            onClick={handleSubmit(submitForm)}
            onClose={handleClose}
            children={
              <>
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
                  <ErrorMessage errors={errors} name="singleErrorInput" />

                  {/* {errors.experience && (
                    <p role="alert">{errors.experience?.message}</p>
                  )} */}
                </form>
              </>
            }
          />
        </>
      ) : null}
    </>
  );
};
