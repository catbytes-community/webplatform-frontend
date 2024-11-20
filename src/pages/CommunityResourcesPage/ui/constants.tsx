export interface Resource {
  id: number;
  title: string;
  description: string;
  tags: string[];
  fullInfo?: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    title: "React Documentation",
    description: "Official React documentation and guides.",
    tags: ["Documents"],
    fullInfo:
      "Lorem ipsum dolor",
  },
  {
    id: 2,
    title: "YouTube Video Tutorial",
    description: "Comprehensive tutorial on React basics.",
    tags: ["Video"],
  },
  {
    id: 3,
    title: "MDN Web Docs",
    description: "Comprehensive resource for web developers.",
    tags: ["Links"],
  },
  {
    id: 4,
    title: "CSS Tricks",
    description: "Tips and tricks for CSS enthusiasts.",
    tags: ["Posts"],
  },
  {
    id: 5,
    title: "JavaScript Info",
    description: "In-depth JavaScript tutorials and guides.",
    tags: ["Video"],
  },
  {
    id: 6,
    title: "Frontend Mentor",
    description: "Improve your coding skills by building projects.",
    tags: ["Documents"],
  },
  {
    id: 7,
    title: "FreeCodeCamp",
    description: "Learn to code for free with interactive lessons.",
    tags: ["Links"],
  },
  {
    id: 8,
    title: "Dev.to",
    description: "Community platform for developers to share ideas.",
    tags: ["Posts"],
  },
];
