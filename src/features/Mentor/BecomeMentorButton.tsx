import { useState } from "react";
// import s from "./BecomeMentorButton.module.css";
// import Select from "react-select";
// import { Modal } from "../../shared/ui/Modal/Modal";
import Button from "../../shared/ui/Button/Button";
// import { Fields, Languages } from "./DataOptions";
// import { SelectorsStyles } from "./SelectorStyles";
// import { useForm } from "react-hook-form";
// import { BecomeMentorForm } from "../../app/types/global";
import { MentorForm } from "./MentorForm";
// import { ErrorMessage } from "@hookform/error-message";


export const BecomeMentorButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const {
  //   // register,
  //   // watch,
  //   // reset,
  //   // control,
  //   // handleSubmit,
  //   // formState: { errors },
  // } = useForm<BecomeMentorForm>({
  //   criteriaMode: "all",
  // });

  // const expertiseArea = watch("expertiseArea", []);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // const handleClose = () => {
  //   setIsModalOpen(false);
  // };

  // const submitForm = (data: BecomeMentorForm) => {
  //   handleClose();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   reset();
  // }, [reset])

  // const isOtherExpertiseAreaSelected = (option: Option): boolean => {
  //   return option.value === "other";
  // };

  return (
    <>
      <Button
        label="Become a mentor"
        onClick={handleOpen}
        btnType="primary_big_btn"
      />
      {isModalOpen ? (
        <MentorForm />
      ) : null}
    </>
  );
};
