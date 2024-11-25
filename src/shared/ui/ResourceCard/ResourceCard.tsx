import React from "react";
import styles from "./ResourceCard.module.css";

interface Resource {
  id: number;
  title: string;
  description: string;
  tags: string[];
  fullInfo?: string;
}

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{resource.title}</h2>
      <p className={styles.description}>{resource.description}</p>
      
      {resource.fullInfo && (
        <div className={styles.fullInfo}>
          <p>{truncateText(resource.fullInfo, 50)}</p>
        </div>
      )}
    </div>
  );
};

export default ResourceCard;
