import { useState } from "react";
import s from './BecomeMentorButton.module.css';
import Select, { MultiValue } from 'react-select';
import { Modal } from "../../shared/ui/Modal/Modal";
import Button from "../../shared/ui/Button/Button";
import { Fields, Languages } from "./DataOptions";
import { SelectorsStyles } from "./SelectorStyles";

export const BecomeMentorButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [designation, setDesignation] = useState("");
    const [showOption, setShowOption] = useState(false);
    const [selectedOption, setSelectedOption] = useState<MultiValue<{
      value: string;
      label: string;
    }> | null>(null);


    const handleOpen = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    // const handleApply = () => {
    //    handleClose();
    // }


    return (<>
    <Button label="Become a mentor" onClick={handleOpen} btnType="primary_btn" />
    {isModalOpen ? (
        <>
          <Modal modalTitle="Application Form to Become a Mentor" buttonTitle="Apply" onClick={handleClose} onClose={handleClose} children={
          <>
            <form className="max-w-md mx-auto">
              <label className={s.label}>Areas of expertise</label>
              <Select styles={SelectorsStyles}
                      placeholder="Select an area of expertise" 
                      required
                      onChange={(e) => {
                        if (e.value == "other") setShowOption(true);
                        else setShowOption(false);
                      }}
                      options={Fields}
              />
              {
                showOption && <div>
                  <label className={s.label}>Other area of expertise</label>
                  <div>
                    <input
                      className={s.input}
                      value={designation}
                      type="text"
                      onChange={(e) => setDesignation(e.target.value)}
                      placeholder="Other"
                      required
                    />
                  </div>
                </div>
              }
              <label className={s.label}>Languages</label>
              <Select required
                placeholder="Select a language"
                closeMenuOnSelect={false}
                isMulti
                options={Languages}
                defaultValue={selectedOption}
                onChange={() => setSelectedOption}
                styles={SelectorsStyles}
              />
              <label className={s.label}>Links to your GitHub/LinkedIn accounts (optional)</label>
              <textarea className={s.input} rows={1}></textarea>
              <label className={s.label}>Describe your experience</label>
              <textarea className={s.input} required></textarea>
            </form>
          </>  
          } />
        </>
      ) : null}
    </>
);
}