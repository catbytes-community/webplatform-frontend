import { Project} from "../../../../app/types/global";

export const projectsData: Project[] = [
    {
        id: 1,
        name: "Project Alpha",
        summary: "An innovative AI-driven project.",
        description: "Developing a cutting-edge AI platform for predictive analytics.",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        duration: "12 months",
        manager: "Alice Johnson",
        status: "In Progress",
        tags: ["AI", "Machine Learning", "Predictive Analytics"],
        roles: [
            { level: "Senior", title: "AI Engineer", description: "Designs AI models", status: "Open" },
            { level: "Junior", title: "Data Scientist", description: "Cleans and analyzes data", status: "Closed" }
        ],
        documentation: [
            { link: "https://example.com/doc1", description: "Project overview document" },
            { link: "https://example.com/doc2", description: "Technical specifications" }
        ]
    },
    {
        id: 2,
        name: "Project Beta",
        summary: "A blockchain-based supply chain solution.",
        description: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non massa eu nisi tincidunt bibendum. Ut fringilla id ex ac faucibus. Maecenas eu ex pretium, dictum mauris a, sollicitudin nunc. Nullam sagittis interdum neque, eu porta eros pellentesque vitae. Nulla quis nibh maximus libero ultrices auctor tincidunt et leo. Cras pretium mauris a dictum cursus. Sed interdum at odio id dignissim. Proin et purus porttitor, cursus purus et, rhoncus arcu. Nunc et magna in eros fermentum facilisis. Aliquam erat volutpat.\n" +
            "Aliquam euismod, ante condimentum auctor pretium, leo magna congue elit, eget tempor purus diam vitae lectus. Suspendisse sed neque dolor. Nulla facilisi. Ut facilisis iaculis bibendum. Nam lobortis ultricies turpis, id bibendum leo tristique in. Donec congue arcu at eleifend fringilla. Nam a velit imperdiet, ultrices tortor iaculis, laoreet sapien. Curabitur ac dui nec justo consectetur euismod. Morbi ac condimentum mauris. Sed eu ultricies lorem, non ultrices elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet turpis nulla. Curabitur consectetur, libero a dictum scelerisque, purus ipsum euismod ante, ac vehicula ex turpis in nisl.\n" +
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tortor nibh, ultrices ut tempus a, congue et elit. In ultrices metus ac mi maximus ultricies. Donec efficitur ullamcorper tortor vel tristique. Curabitur est risus, placerat non sagittis vitae, luctus eget dui. Etiam lobortis, massa sed sollicitudin semper, augue tellus bibendum lectus, auctor ultrices urna enim non quam. Pellentesque gravida at tellus id finibus. Quisque fermentum lacus urna, at convallis quam sodales et. Duis porttitor nisl et condimentum viverra. Suspendisse et mollis tellus, et consequat libero. Aliquam faucibus purus nisl, non pharetra est consequat nec. Nullam vel mattis quam, in pulvinar sapien. Suspendisse et vulputate nisi, eu rutrum odio. Etiam id.",
        startDate: "2023-06-01",
        endDate: "2024-05-31",
        duration: "12 months",
        manager: "Bob Smith",
        status: "Completed",
        image: "https://img.freepik.com/premium-photo/futuristic-robot-cat-generative-ai_7023-70434.jpg?w=360",
        tags: ["Blockchain", "Supply Chain"],
        roles: [
            { level: "Senior", title: "Blockchain Developer", description: "What to do: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley the 1500s, when an unknown printer took a galley the 1500s, when an unknown printer took a galley the 1500s, when an unknown printer took a galley the 1500s, when an unknown printer", status: "Closed" },
            { level: "Mid-Level", title: "UI/UX Designer", description: "Designs user interfaces", status: "Open" }
        ],
        documentation: [
            { link: "link.loremIpsuloremIpsumissimplydummyloremI.com", description: "Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley the 1500s, when an unknown printer took a galley the 1500s, when an unknown printer took a galley the 1500s, " },
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
        roles: [
            { level: "Senior", title: "Mobile Developer", description: "Builds app features", status: "Open" },
            { level: "Junior", title: "QA Engineer", description: "Ensures app quality", status: "Open" }
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
        roles: [
            { level: "Lead", title: "Energy Consultant", description: "Oversees energy solutions", status: "Closed" },
            { level: "Mid-Level", title: "Data Analyst", description: "Analyzes energy data", status: "Closed" }
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
        roles: [
            { level: "Senior", title: "Backend Developer", description: "Develops APIs", status: "Open" },
            { level: "Mid-Level", title: "Data Engineer", description: "Handles data pipelines", status: "Open" }
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
        roles: [
            { level: "Lead", title: "IoT Specialist", description: "Coordinates device integrations", status: "Open" },
            { level: "Junior", title: "Firmware Developer", description: "Builds device software", status: "Open" }
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
        status: "Closed",
        image: "https://img.freepik.com/premium-photo/futuristic-robot-cat-generative-ai_7023-70434.jpg?w=360",
        tags: ["Cloud", "Optimization"],
        roles: [
            { level: "Senior", title: "Cloud Architect", description: "Designs cloud solutions", status: "Closed" },
            { level: "Mid-Level", title: "Performance Engineer", description: "Improves performance metrics", status: "Closed" }
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
        roles: [
            { level: "Lead", title: "Marketing Analyst", description: "Defines metrics", status: "Open" },
            { level: "Junior", title: "Frontend Developer", description: "Develops UI", status: "Closed" }
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
        roles: [
            { level: "Senior", title: "API Developer", description: "Develops translation API", status: "Closed" },
            { level: "Mid-Level", title: "Linguist", description: "Provides language expertise", status: "Closed" }
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
        roles: [
            { level: "Lead", title: "Robotics Engineer", description: "Develops robot control systems", status: "Open" },
            { level: "Mid-Level", title: "System Analyst", description: "Analyzes system performance", status: "Open" }
        ],
        documentation: [
            { link: "https://example.com/doc19", description: "Robot specifications" },
            { link: "https://example.com/doc20", description: "Testing protocols" }
        ]
    }
];
