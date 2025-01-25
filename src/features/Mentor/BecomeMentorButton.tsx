import { useState } from "react";
import Button from "../../shared/ui/Button/Button";
import { MentorForm } from "./MentorModalForm";

export const BecomeMentorButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        label="Become a mentor"
        onClick={handleOpen}
        btnType="primary_big_btn"
      />
      {isModalOpen && <MentorForm onClose={handleClose} />}
    </>
  );
};
