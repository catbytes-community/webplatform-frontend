import React, { useState } from "react";
import styles from "./CreateResourcePage.module.css";
import VideoIcon from "../../../shared/ui/icons/VideoIcon";
import ImageIcon from "../../../shared/ui/icons/ImageIcon";
import FileIcon from "../../../shared/ui/icons/FileIcon";
import CrossIcon from "../../../shared/ui/icons/CrossIcon";
import { useNavigate } from "react-router-dom";
import { Resource } from "../../CommunityResourcesPage/ui/constants";

interface CreateResourcePageProps {
  addResource?: (newResource: Resource) => void;
}

export const CreateResourcePage: React.FC<CreateResourcePageProps> = ({
  addResource,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fullInfo, setFullInfo] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = ["Documents", "Video", "Links", "Posts"];
  const navigate = useNavigate();

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTag) {
      alert("Please select a tag for the resource.");
      return;
    }

    const newResource = {
      id: Date.now(),
      title,
      description,
      file,
      fullInfo,
      tags: [selectedTag],
    };

    if (addResource) {
      addResource(newResource);
    }

    navigate("/community_resources");

    setTitle("");
    setDescription("");
    setFile(null);
    setFullInfo("");
    setSelectedTag(null);
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

        <div className={styles.tagSelector}>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className={`${styles.tagButton} ${
                selectedTag === tag ? styles.activeTag : ""
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <textarea
          id="fullInfo"
          value={fullInfo}
          placeholder="Write text..."
          onChange={(e) => setFullInfo(e.target.value)}
          className={styles.textarea}
          rows={6}
        />

        <button type="submit" className={styles.submitButton}>
          Published
        </button>
      </form>
    </div>
  );
};
