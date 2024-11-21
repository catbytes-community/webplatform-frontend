import { useState } from "react";
import { Modal } from "../../shared/ui/Modal/Modal";
import Button from "../../shared/ui/Button/Button";
import s from './BecomeMentorButton.module.css';

export const BecomeMentorButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [designation, setDesignation] = useState("");
    const [showOption, setShowOption] = useState(false);

    const handleOpen = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };


    return (<>
    <Button label="Become a mentor" onClick={handleOpen} btnType="primary_btn" />
    {isModalOpen ? (
        <>
          <Modal modalTitle="Application Form to Become a Mentor" buttonTitle="Apply" onClick={handleClose} onClose={handleClose} children={
          <>
            <form className="max-w-md mx-auto">
              <label className={s.label}>Areas of expertise</label>
              <select className={s.input} 
                      required
                      onChange={(e) => {
                        if (e.target.value == "Other") setShowOption(true);
                        else setShowOption(false);
                      }}>
                <option value="" selected disabled hidden>Select an area of expertise</option>
                <option value="QA">QA</option>
                <option value="Webdev">Webdev</option>
                <option value="Android">Android development</option>
                <option value="Other">Other</option>
              </select>
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
              <select className={s.input} required>
                <option value="" selected disabled hidden>Select a language</option>
                <option value="EN">English</option>
                <option value="RU">Russian</option>
              </select>
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