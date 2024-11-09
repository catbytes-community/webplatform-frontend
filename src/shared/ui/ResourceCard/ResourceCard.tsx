import React, { useState } from "react";
import styles from "./ResourceCard.module.css";
import Button from "../../../pages/Pomodoro/components/Button/Button";

interface Resource {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  author: string;
  fullInfo?: string;
}

interface ResourceCardProps {
  resource: Resource;
  onAddToFavorites: (id: number) => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  onAddToFavorites,
}) => {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
      onAddToFavorites(resource.id);
    }
    setIsLiked(!isLiked);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{resource.title}</h2>
      <p className={styles.description}>{resource.description}</p>
      <div className={styles.tags}>
        {resource.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {resource.fullInfo && (
        <div className={styles.fullInfo}>
          <p>{truncateText(resource.fullInfo, 50)}</p>
        </div>
      )}

      {resource.link && (
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View Resource
        </a>
      )}
      <p className={styles.author}>Author: {resource.author}</p>

      <div className={styles.actions}>
        <Button
          title={"Like"}
          activeClass={`${styles.likeButton} ${isLiked ? styles.liked : ""}`}
          _callback={handleLike}
        />
        <span className={styles.likeCount}> 🖤{likes} </span>
      </div>
    </div>
  );
};

export default ResourceCard;
