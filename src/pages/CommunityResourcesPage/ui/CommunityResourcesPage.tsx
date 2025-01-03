import React, { useState } from "react";
import ResourceCard from "../../../shared/ui/ResourceCard/ResourceCard";
import { resources } from "./constants";
import styles from "./CommunityResourcesPage.module.css";
import { useNavigate } from "react-router-dom";
import CrossIcon from "../../../shared/ui/icons/CrossIcon";
// import Button from "../../../shared/ui/Button/Button.tsx";

const CommunityResources: React.FC = () => {
  const [resourcesList] = useState(resources);
  const [selectedTags, setSelectedTags] = useState<string[]>(["All"]);
  const [showAllTags] = useState(false);
  const isUserLoggedIn = true;
  const navigate = useNavigate();

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

  const displayedTags = showAllTags
    ? ["All", ...new Set(resourcesList.flatMap((resource) => resource.tags))]
    : [
        "All",
        ...new Set(resourcesList.flatMap((resource) => resource.tags)),
      ].slice(0, 6);

  const handleCreateResource = () => {
    navigate("/create_resource");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Community Resources</h1>

      <div className={styles.filter}>
        <div className={styles.tags}>
          {displayedTags.map((tag) => (
            <button
              key={tag}
              label={tag}
              btnType={`${
                selectedTags.includes(tag) ? "primary_btn" : "secondary_btn"
              }`}
              onClick={() => handleTagClick(tag)}
            />
          ))}
        </div>

        {isUserLoggedIn && (
          <div className={styles.createButton}>
            <button
              type="button"
              className={styles.createResourceButton}
              onClick={handleCreateResource}
            >
              Add Resource
              <CrossIcon />
            </button>
          </div>
        )}
      </div>

      <div className={styles.resourceList}>
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default CommunityResources;
