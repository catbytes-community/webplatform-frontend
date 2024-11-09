import React, { useState } from "react";
import ResourceCard from "../../../shared/ui/ResourceCard/ResourceCard";
import styles from "./CommunityResourcesPage.module.css";

interface Resource {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  author: string;
}

const CommunityResources: React.FC = () => {
  const [resources] = useState<Resource[]>([
    {
      id: 1,
      title: "React Documentation",
      description: "Official React documentation and guides.",
      tags: ["React", "JavaScript", "Frontend"],
      link: "https://reactjs.org/",
      author: "React Team",
    },
    {
      id: 2,
      title: "YouTube Video Tutorial",
      description: "Comprehensive tutorial on React basics.",
      tags: ["React", "Tutorial", "Video"],
      link: "https://youtube.com/example",
      author: "John Doe",
    },
  ]);

  const handleAddToFavorites = (id: number) => {
    console.log(`Resource with ID ${id} added to favorites.`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Community Resources</h1>
      <div className={styles.resourceList}>
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onAddToFavorites={handleAddToFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityResources;
