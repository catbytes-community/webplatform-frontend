import React, { useState } from "react";
import ResourceCard from "../../../shared/ui/ResourceCard/ResourceCard";
import { resources } from "./constants";
import styles from "./CommunityResourcesPage.module.css";
import Button from "../../Pomodoro/components/Button/Button";

const CommunityResources: React.FC = () => {
  const [resourcesList] = useState(resources);
  const [selectedTags, setSelectedTags] = useState<string[]>(["All"]); // Изначально All выбран
  const [showAllTags, setShowAllTags] = useState(false); // Стейт для управления показом всех тегов

  const handleTagClick = (tag: string) => {
    if (tag === "All") {
      if (selectedTags.includes("All")) {
        setSelectedTags([]);
      } else {
        setSelectedTags(["All"]);
      }
    } else {
      if (selectedTags.includes("All")) {
        setSelectedTags([tag]);
      } else {
        if (selectedTags.includes(tag)) {
          setSelectedTags(
            selectedTags.filter((selectedTag) => selectedTag !== tag)
          );
        } else {
          setSelectedTags([...selectedTags, tag]);
        }
      }
    }
  };

  const filteredResources = resourcesList.filter((resource) => {
    if (selectedTags.length === 0 || selectedTags.includes("All")) return true;
    return selectedTags.some((tag) => resource.tags.includes(tag));
  });

  const handleAddToFavorites = (id: number) => {
    console.log(`Resource with ID ${id} added to favorites.`);
  };

  const toggleShowAllTags = () => {
    setShowAllTags((prev) => !prev);
  };

  const displayedTags = showAllTags
    ? ["All", ...new Set(resourcesList.flatMap((resource) => resource.tags))]
    : [
        "All",
        ...new Set(resourcesList.flatMap((resource) => resource.tags)),
      ].slice(0, 6);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Community Resources</h1>

      <div className={styles.filter}>
        <div className={styles.tags}>
          {displayedTags.map((tag) => (
            <Button
            key={tag}
            title={tag}
            activeClass={`${styles.tag} ${selectedTags.includes(tag) ? styles.selected : ""}`}
            _callback={() => handleTagClick(tag)}
          />
          ))}
        </div>
        <div className={styles.filterButtons}>
          {!showAllTags && displayedTags.length < resourcesList.length && (
            <Button
              title={"Show More"}
              activeClass={styles.showMore}
              _callback={() => toggleShowAllTags()}
            />
          )}
          {showAllTags && (
            <Button
              title={"Show Less"}
              activeClass={styles.showMore}
              _callback={() => toggleShowAllTags()}
            />
          )}
        </div>
      </div>

      <div className={styles.resourceList}>
        {filteredResources.map((resource) => (
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
