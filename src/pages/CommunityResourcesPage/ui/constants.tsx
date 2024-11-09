interface Resource {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  author: string;
  fullInfo?: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    title: "React Documentation",
    description: "Official React documentation and guides.",
    tags: ["React", "JavaScript", "Frontend"],
    fullInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
  {
    id: 3,
    title: "MDN Web Docs",
    description: "Comprehensive resource for web developers.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://developer.mozilla.org/",
    author: "Mozilla",
  },
  {
    id: 4,
    title: "CSS Tricks",
    description: "Tips and tricks for CSS enthusiasts.",
    tags: ["CSS", "Web Design", "Frontend"],
    link: "https://css-tricks.com/",
    author: "Chris Coyier",
  },
  {
    id: 5,
    title: "JavaScript Info",
    description: "In-depth JavaScript tutorials and guides.",
    tags: ["JavaScript", "Programming", "Web"],
    link: "https://javascript.info/",
    author: "Ilya Kantor",
  },
  {
    id: 6,
    title: "Frontend Mentor",
    description: "Improve your coding skills by building projects.",
    tags: ["Projects", "Frontend", "Challenges"],
    link: "https://www.frontendmentor.io/",
    author: "Frontend Mentor Team",
  },
  {
    id: 7,
    title: "FreeCodeCamp",
    description: "Learn to code for free with interactive lessons.",
    tags: ["JavaScript", "Python", "Learning"],
    link: "https://www.freecodecamp.org/",
    author: "freeCodeCamp",
  },
  {
    id: 8,
    title: "Dev.to",
    description: "Community platform for developers to share ideas.",
    tags: ["Community", "Development", "Articles"],
    link: "https://dev.to/",
    author: "Dev.to Team",
  },
];
