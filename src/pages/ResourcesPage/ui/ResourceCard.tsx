import React from 'react';
import styles from './ResourceCard.module.css';

interface ResourceCardProps {
    title: string;
    author: string;
    date: string;
    description: string;
    link: string;
    tags: string[];
    imageUrl?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
                                                              title,
                                                              author,
                                                              date,
                                                              description,
                                                              link,
                                                              tags,
                                                              imageUrl
                                                          }) => {
    return (
        <article className={styles.cardContainer}>

            <div className={styles.tagsRow}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.mockTag}>
                        {tag}
                    </span>
                ))}
            </div>

            {imageUrl && (
                <div className={styles.imageWrapper}>
                    <img src={imageUrl} alt={title} className={styles.cardImage} />
                </div>
            )}

            <h3 className={styles.cardTitle}>{title}</h3>

            <div className={styles.cardMeta}>
                <p>Created by: <strong>{author}</strong></p>
                <p>Created was: {date}</p>
            </div>

            <p className={styles.cardDescription}>
                {description}
            </p>

            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                {link}
            </a>

        </article>
    );
};