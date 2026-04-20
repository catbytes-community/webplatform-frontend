import { useEffect, useState, useRef, useCallback } from 'react';
import styles from './ResourcesPage.module.css';
import { useUser } from "../../../shared/lib/customHooks/useUser";
import Navbar from "../../../shared/ui/Navbar/Navbar";
import { ResourceCard } from "./ResourceCard.tsx";
import lockedCardImg from "../images/lock card.png";
import Footer from "../../../shared/ui/Footer/Footer.tsx";

// just to see if this works
const someResources = [
    {
        id: 1,
        title: "Figma UI Kit for Beginners",
        author: "Mara",
        date: "15 Jan 2026",
        description: "Download this course and start learning UI from zero",
        link: "https://figma.com/community/...",
        tags: ["#Design", "#UI", "#Figma"],
        imageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=500",
        requiresAuth: false
    },
    {
        id: 2,
        title: "Secret tutorial",
        author: "Maria",
        date: "20 Nov 2024",
        description: "description here",
        link: "",
        tags: ["#Management", "#Internal"],
        requiresAuth: true
    },
    {
        id: 3,
        title: "TypeScript for Frontend",
        author: "Andrei",
        date: "22 Feb 2026",
        description: "Discover how TypeScript bridges the gap between dynamic JavaScript and robust software engineering. This resource delves into integrating static typing with modern frontend workflows, and building scalable, maintainable user interfaces for the web.",
        link: "https://typescriptlang.org",
        tags: ["#TypeScript", "#Frontend"],
        requiresAuth: false
    },
    {
        id: 4,
        title: "Advanced React Patterns",
        author: "Andrei",
        date: "22 Feb 2026",
        description: "Learn how to build reusable components.",
        link: "https://react.dev",
        tags: ["#React", "#Frontend"],
        requiresAuth: false
    },
    {
        id: 5,
        title: "CSS Grid & Flexbox Masterclass",
        author: "Andrei",
        date: "22 Feb 2026",
        description: "Master layouts in the browser.",
        link: "https://developer.mozilla.org",
        tags: ["#CSS", "#Frontend"],
        requiresAuth: false
    },
    {
        id: 6,
        title: "Mentor Guidelines",
        author: "Maria",
        date: "20 Nov 2024",
        description: "Internal documentation for mentors.",
        link: "",
        tags: ["#Management", "#Internal"],
        requiresAuth: true
    },
    {
        id: 7,
        title: "Onboarding Checklist",
        author: "Maria",
        date: "20 Nov 2024",
        description: "Checklist for new team members.",
        link: "",
        tags: ["#Management", "#Internal"],
        requiresAuth: true
    }
];

export const ResourcesPage = () => {
    const userIdFromLocalStorage = localStorage.getItem("userId")
        ? Number(localStorage.getItem("userId"))
        : null;

    const { user } = useUser(userIdFromLocalStorage);

    const [isAuth, setIsAuth] = useState(false);
    const [isMentor, setIsMentor] = useState(false);

    // --- LOGIC FOR INFINITE SCROLL ---
    const ITEMS_PER_PAGE = 3; // only 3 to test
    const [visibleResources, setVisibleResources] = useState(someResources.slice(0, ITEMS_PER_PAGE));
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(someResources.length > ITEMS_PER_PAGE);

    const observer = useRef<IntersectionObserver | null>(null);
    const observerTarget = useCallback((node: HTMLDivElement) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                loadMoreResources();
            }
        });

        if (node) observer.current.observe(node);
    }, [isLoading, hasMore]);

    const loadMoreResources = () => {
        setIsLoading(true);
        setTimeout(() => {
            const currentLength = visibleResources.length;
            const nextItems = someResources.slice(currentLength, currentLength + ITEMS_PER_PAGE);

            if (nextItems.length > 0) {
                setVisibleResources(prev => [...prev, ...nextItems]);
                if (currentLength + nextItems.length >= someResources.length) {
                    setHasMore(false);
                }
            } else {
                setHasMore(false);
            }
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        if (user) {
            setIsMentor(
                user?.roles?.filter(
                    (role: { role_id: number; role_name: string }) =>
                        role.role_name === "mentor"
                ).length > 0
            );
            setIsAuth(true);
        } else {
            setIsAuth(false);
            setIsMentor(false);
        }
    }, [user]);

    return (
        <div className={styles.pageWrapper}>
            <Navbar />

            <header className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Our resources</h1>

                <div className={styles.headerActions}>
                    <button className={styles.filterBtn}>Filters ⇅</button>
                    <input type="text" placeholder="Search" className={styles.searchInput} />

                    {isMentor && (
                        <button className={styles.addResourceBtn}>
                            ADD NEW RESOURCE
                        </button>
                    )}
                </div>
            </header>

            <hr className={styles.pageDivider} />

            <div className={styles.mainContent}>
                <aside className={styles.leftSidebar}>
                    <h2 className={styles.sidebarTitle}>Recommended tags</h2>

                    <div className={styles.tagsContainer}>
                        <span className={styles.sidebarTag}>#JavaScript</span>
                        <span className={styles.sidebarTag}>#Design</span>
                        <span className={styles.sidebarTag}>#React</span>
                        <span className={styles.sidebarTag}>#Frontend</span>
                    </div>
                </aside>

                <div style={{ width: '100%' }}>
                    <main className={styles.resourcesGrid}>
                        {/* iterate through visible resources NOT all resources (logic for infinite scroll) */}
                        {visibleResources.map((resource) => {
                            if (resource.requiresAuth && !isAuth) {
                                return (
                                    <img
                                        key={`locked-${resource.id}`}
                                        src={lockedCardImg}
                                        alt="Available only to logged in users"
                                        className={styles.lockedCardImage}
                                    />
                                );
                            }

                            return (
                                <ResourceCard
                                    key={resource.id}
                                    title={resource.title}
                                    author={resource.author}
                                    date={resource.date}
                                    description={resource.description}
                                    link={resource.link}
                                    tags={resource.tags}
                                    imageUrl={resource.imageUrl}
                                />
                            );
                        })}
                    </main>

                    <div
                        ref={observerTarget}
                        style={{ height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}
                    >
                        {isLoading && <p style={{ fontWeight: 'bold', color: '#FA6773' }}>Loading more resources...</p>}
                        {!hasMore && <p style={{ color: '#888' }}>You have reached the end.</p>}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};