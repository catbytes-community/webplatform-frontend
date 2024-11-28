import { Project} from "../../../../app/types/global";

export const projectsData: Project[] = [
    {
        name: "Project Alpha",
        summary: "An innovative AI-driven project.",
        description: "Developing a cutting-edge AI platform for predictive analytics.",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        duration: "12 months",
        manager: "Alice Johnson",
        status: "In Progress",
        image: "https://img.freepik.com/premium-photo/futuristic-robot-cat-generative-ai_7023-70434.jpg?w=360",
        tags: ["AI", "Machine Learning", "Predictive Analytics"],
        projectTeam: [
            { level: "Senior", title: "AI Engineer", description: "Designs AI models", status: "Active" },
            { level: "Junior", title: "Data Scientist", description: "Cleans and analyzes data", status: "Active" }
        ],
        documentation: [
            { link: "https://example.com/doc1", description: "Project overview document" },
            { link: "https://example.com/doc2", description: "Technical specifications" }
        ]
    },
    {
        name: "Project Beta",
        summary: "A blockchain-based supply chain solution.",
        description: "Building a transparent and secure supply chain management system using blockchain.",
        startDate: "2023-06-01",
        endDate: "2024-05-31",
        duration: "12 months",
        manager: "Bob Smith",
        status: "Completed",
        image: "https://img.freepik.com/premium-photo/futuristic-robot-cat-generative-ai_7023-70434.jpg?w=360",
        tags: ["Blockchain", "Supply Chain"],
        projectTeam: [
            { level: "Senior", title: "Blockchain Developer", description: "Implements smart contracts", status: "Completed" },
            { level: "Mid-Level", title: "UI/UX Designer", description: "Designs user interfaces", status: "Completed" }
        ],
        documentation: [
            { link: "https://example.com/doc3", description: "Final project report" },
            { link: "https://example.com/doc4", description: "Blockchain architecture" }
        ]
    },
    {
        name: "Project Gamma",
        summary: "A healthcare mobile app.",
        description: "Developing a mobile app to streamline patient-doctor communication.",
        startDate: "2023-02-01",
        endDate: "2023-12-01",
        duration: "10 months",
        manager: "Cathy Lee",
        status: "In Progress",
        image: "https://img.freepik.com/premium-photo/futuristic-robot-cat-generative-ai_7023-70434.jpg?w=360",
        tags: ["Healthcare", "Mobile App"],
        projectTeam: [
            { level: "Senior", title: "Mobile Developer", description: "Builds app features", status: "Active" },
            { level: "Junior", title: "QA Engineer", description: "Ensures app quality", status: "Active" }
        ],
        documentation: [
            { link: "https://example.com/doc5", description: "App requirements" },
            { link: "https://example.com/doc6", description: "Testing guidelines" }
        ]
    },
    {
        name: "Project Delta",
        summary: "A renewable energy initiative.",
        description: "Exploring ways to optimize solar energy storage.",
        startDate: "2022-09-01",
        endDate: "2023-09-01",
        duration: "12 months",
        manager: "Daniel Green",
        status: "Completed",
        image: "https://img.freepik.com/premium-photo/futuristic-robot-cat-generative-ai_7023-70434.jpg?w=360",
        tags: ["Energy", "Sustainability"],
        projectTeam: [
            { level: "Lead", title: "Energy Consultant", description: "Oversees energy solutions", status: "Completed" },
            { level: "Mid-Level", title: "Data Analyst", description: "Analyzes energy data", status: "Completed" }
        ],
        documentation: [
            { link: "https://example.com/doc7", description: "Project outcomes" },
            { link: "https://example.com/doc8", description: "Energy models used" }
        ]
    },
    {
        name: "Project Epsilon",
        summary: "E-commerce platform enhancement.",
        description: "Adding personalized recommendations to an e-commerce site.",
        startDate: "2023-05-01",
        endDate: "2024-03-01",
        duration: "10 months",
        manager: "Emily Davis",
        status: "In Progress",
        image: "https://img.freepik.com/premium-photo/futuristic-robot-cat-generative-ai_7023-70434.jpg?w=360",
        tags: ["E-commerce", "Personalization", "AI"],
        projectTeam: [
            { level: "Senior", title: "Backend Developer", description: "Develops APIs", status: "Active" },
            { level: "Mid-Level", title: "Data Engineer", description: "Handles data pipelines", status: "Active" }
        ],
        documentation: [
            { link: "https://example.com/doc9", description: "Backend architecture" },
            { link: "https://example.com/doc10", description: "Recommendation algorithms" }
        ]
    },
    {
        name: "Project Zeta",
        summary: "Smart home integration.",
        description: "Developing a system to integrate multiple IoT devices seamlessly.",
        startDate: "2023-08-01",
        endDate: "2024-02-01",
        duration: "6 months",
        manager: "Frank Howard",
        status: "In Progress",
        image: "https://img.freepik.com/premium-photo/futuristic-robot-cat-generative-ai_7023-70434.jpg?w=360",
        tags: ["IoT", "Smart Home"],
        projectTeam: [
            { level: "Lead", title: "IoT Specialist", description: "Coordinates device integrations", status: "Active" },
            { level: "Junior", title: "Firmware Developer", description: "Builds device software", status: "Active" }
        ],
        documentation: [
            { link: "https://example.com/doc11", description: "System architecture" },
            { link: "https://example.com/doc12", description: "Device compatibility" }
        ]
    },
    {
        name: "Project Eta",
        summary: "Cloud storage optimization.",
        description: "Optimizing cloud storage for better performance and cost efficiency.",
        startDate: "2023-03-01",
        endDate: "2023-09-01",
        duration: "6 months",
        manager: "Grace Williams",
        status: "Completed",
        image: "https://img.freepik.com/premium-photo/futuristic-robot-cat-generative-ai_7023-70434.jpg?w=360",
        tags: ["Cloud", "Optimization"],
        projectTeam: [
            { level: "Senior", title: "Cloud Architect", description: "Designs cloud solutions", status: "Completed" },
            { level: "Mid-Level", title: "Performance Engineer", description: "Improves performance metrics", status: "Completed" }
        ],
        documentation: [
            { link: "https://example.com/doc13", description: "Optimization techniques" },
            { link: "https://example.com/doc14", description: "Cost-saving strategies" }
        ]
    },
    {
        name: "Project Theta",
        summary: "Digital marketing dashboard.",
        description: "Building a dashboard for tracking digital marketing campaigns.",
        startDate: "2024-01-15",
        endDate: "2024-07-15",
        duration: "6 months",
        manager: "Hannah Moore",
        status: "Planned",
        image: "https://img.freepik.com/premium-photo/futuristic-robot-cat-generative-ai_7023-70434.jpg?w=360",
        tags: ["Marketing", "Analytics"],
        projectTeam: [
            { level: "Lead", title: "Marketing Analyst", description: "Defines metrics", status: "Planned" },
            { level: "Junior", title: "Frontend Developer", description: "Develops UI", status: "Planned" }
        ],
        documentation: [
            { link: "https://example.com/doc15", description: "Dashboard wireframes" },
            { link: "https://example.com/doc16", description: "Tracking KPIs" }
        ]
    },
    {
        name: "Project Iota",
        summary: "Language translation API.",
        description: "Creating an API for real-time language translation.",
        startDate: "2024-02-01",
        endDate: "2024-08-01",
        duration: "6 months",
        manager: "Ian Taylor",
        status: "Planned",
        image: "https://img.freepik.com/premium-photo/futuristic-robot-cat-generative-ai_7023-70434.jpg?w=360",
        tags: ["Language", "API"],
        projectTeam: [
            { level: "Senior", title: "API Developer", description: "Develops translation API", status: "Planned" },
            { level: "Mid-Level", title: "Linguist", description: "Provides language expertise", status: "Planned" }
        ],
        documentation: [
            { link: "https://example.com/doc17", description: "API design document" },
            { link: "https://example.com/doc18", description: "Supported languages" }
        ]
    },
    {
        name: "Project Kappa",
        summary: "Autonomous delivery system.",
        description: "Building software for an autonomous delivery robot.",
        startDate: "2023-07-01",
        endDate: "2024-07-01",
        duration: "12 months",
        manager: "Jack Wilson",
        status: "In Progress",
        image: "https://img.freepik.com/premium-photo/futuristic-robot-cat-generative-ai_7023-70434.jpg?w=360",
        tags: ["Robotics", "Autonomous Systems"],
        projectTeam: [
            { level: "Lead", title: "Robotics Engineer", description: "Develops robot control systems", status: "Active" },
            { level: "Mid-Level", title: "System Analyst", description: "Analyzes system performance", status: "Active" }
        ],
        documentation: [
            { link: "https://example.com/doc19", description: "Robot specifications" },
            { link: "https://example.com/doc20", description: "Testing protocols" }
        ]
    }
];
