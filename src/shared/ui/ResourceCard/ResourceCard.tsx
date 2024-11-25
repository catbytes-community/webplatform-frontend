import React, { useState } from "react";
import styles from "./ResourceCard.module.css";

interface Resource {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  author: string;
}

interface ResourceCardProps {
  resource: Resource;
  onAddToFavorites: (id: number) => void;
}

//Здесь предполагается возможность постановки лайка и добавления поста в избранное

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, onAddToFavorites }) => {

  //Здесь предполагается возможность постановки лайка и добавления поста в избранное

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
      <button
          className={`${styles.likeButton} ${isLiked ? styles.liked : ""}`}
          onClick={handleLike}
        >
          Like 
        </button> 
        <span className={styles.likeCount}> ❤️{likes} </span>
      </div>
    </div>
  );
};

export default ResourceCard;
