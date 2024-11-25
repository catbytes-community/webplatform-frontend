import React, { useState } from "react";
import styles from "./CreateResourcePage.module.css";
import Button from "../../Pomodoro/components/Button/Button";
import VideoIcon from "../../../shared/ui/icons/VideoIcon";
import ImageIcon from "../../../shared/ui/icons/ImageIcon";
import FileIcon from "../../../shared/ui/icons/FileIcon";
import CrossIcon from "../../../shared/ui/icons/CrossIcon";

export const CreateResourcePage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fullInfo, setFullInfo] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileClick = (accept: string) => {
    const input = document.getElementById("file") as HTMLInputElement;
    if (input) {
      input.setAttribute("accept", accept);
      input.click();
    }
  };

  const CreateResourceSubmit = () => {
    console.log("Resource saved");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newResource = {
      id: Date.now(),
      title,
      description,
      file,
      fullInfo,
    };

    console.log("Resource created:", newResource);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Create a New Resource</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
          required
        />
        <input
          id="description"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className={styles.input}
          required
        />

        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className={styles.hiddenInput}
        />

        <div className={styles.fileButtons}>
          <button
            type="button"
            onClick={() => handleFileClick("video/*")}
            className={styles.iconButton}
          >
            <VideoIcon />
          </button>
          <button
            type="button"
            onClick={() => handleFileClick("image/png, image/jpeg, image/jpg")}
            className={styles.iconButton}
          >
            <ImageIcon />
          </button>
          <button
            type="button"
            onClick={() =>
              handleFileClick(
                "application/pdf, application/msword, .docx, .txt"
              )
            }
            className={styles.iconButton}
          >
            <FileIcon />
          </button>
          <button
            type="button"
            onClick={() => handleFileClick("*/*")}
            className={styles.iconButton}
          >
            <CrossIcon />
          </button>
        </div>

        {file && <p className={styles.fileInfo}>Selected file: {file.name}</p>}

        <textarea
          id="fullInfo"
          value={fullInfo}
          placeholder="Write text..."
          onChange={(e) => setFullInfo(e.target.value)}
          className={styles.textarea}
          rows={6}
        />

        <Button
          title={"Published"}
          activeClass={styles.submitButton}
          _callback={CreateResourceSubmit}
        />
      </form>
    </div>
  );
};
