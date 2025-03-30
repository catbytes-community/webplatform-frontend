export interface Resource {
  id: number;
  name: string;
  createdBy: string;
  createdWas: string;
  description: string;
  tags: string[];
  type: "TextArticle" | "LinkMaterials" | "YouTubeMaterials" | "TextAndLinkMaterials";
  link?: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    name: "React Guide",
    createdBy: "Facebook",
    createdWas: "2023-01-15",
    description: "Официальная документация по React",
    tags: ["React", "JavaScript"],
    type: "TextArticle",
  },
  {
    id: 2,
    name: "React Tutorial",
    createdBy: "Tech Channel",
    createdWas: "2024-03-10",
    description: "Полный курс по React для начинающих",
    tags: ["Video", "React"],
    type: "YouTubeMaterials",
    link: "https://www.youtube.com/watch?v=xyz123",
  },
  {
    id: 3,
    name: "MDN Web Docs",
    createdBy: "Mozilla",
    createdWas: "2022-06-20",
    description: "Справочник по HTML, CSS, JS",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "LinkMaterials",
    link: "https://developer.mozilla.org/",
  },
  {
    id: 4,
    name: "CSS Tricks",
    createdBy: "Chris Coyier",
    createdWas: "2021-11-05",
    description: "Полезные советы по CSS",
    tags: ["CSS", "Web Design"],
    type: "TextAndLinkMaterials",
    link: "https://css-tricks.com/",
  },
  {
    id: 5,
    name: "JavaScript Info",
    createdBy: "Ilya Kantor",
    createdWas: "2023-05-25",
    description: "Глубокое погружение в JavaScript",
    tags: ["JS", "Guide"],
    type: "TextArticle",
  },
  {
    id: 6,
    name: "Frontend Mentor",
    createdBy: "Community",
    createdWas: "2023-08-17",
    description: "Проекты для оттачивания навыков фронтенда",
    tags: ["Practice"],
    type: "LinkMaterials",
    link: "https://www.frontendmentor.io/",
  },
  {
    id: 7,
    name: "FreeCodeCamp",
    createdBy: "FCC",
    createdWas: "2020-09-12",
    description: "Бесплатные интерактивные уроки по программированию",
    tags: ["Education"],
    type: "LinkMaterials",
    link: "https://www.freecodecamp.org/",
  },
  {
    id: 8,
    name: "Dev.to",
    createdBy: "Community",
    createdWas: "2019-02-28",
    description: "Платформа для общения разработчиков",
    tags: ["Community"],
    type: "TextAndLinkMaterials",
    link: "https://dev.to/",
  },
];
