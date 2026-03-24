export interface Speaker {
    name: string;
    role: string;
}

export interface Media {
    type: "image" | "video";
    url: string;
    thumbnail?: string; // Optional for videos
}

export interface Event {
    id: string; // Used for identifying folder in public/assets/events/[id]
    title: string;
    description: string;
    date: string;
    image: string; // Keep this as main thumbnail
    category: "Workshop" | "Competition" | "Talk" | "Bootcamp";
    isPast: boolean;
    type: "workshop" | "bootcamp" | "competition" | "talk";
    location: string;
    detailedDescription: string;
    speakers?: Speaker[];
    objectives?: string[];
    tools?: string[];
    gallery?: string[]; // Deprecated in favor of media
    media?: Media[];
    registrationLink?: string;
}

export const events: Event[] = [
    /* Upcoming Events */
    {
        id: "emsistes-innov26",
        title: "EMSIstes INNOV'26",
        description: "A competition that offers the perfect opportunity to showcase your project and contribute to the development of intelligent technologies for a sustainable and inclusive future.",
        date: "May 16, 2026",
        image: "/assets/events/2025-2026/emsistes_innov/thumb.jpg",
        category: "Competition",
        type: "competition",
        location: "EMSI Marrakesh",
        isPast: false,
        detailedDescription: "Join us for an exciting innovation competition where participants showcase their projects in intelligent and emerging technologies. Competitors will tackle real-world challenges, contribute to building solutions for a sustainable and inclusive future, and present their ideas to a panel of experts and industry professionals.",
        objectives: [
            "Showcase innovative projects in intelligent and emerging technologies",
            "Contribute to the development of solutions for a sustainable and inclusive future",
            "Apply advanced technical and creative skills to real-world challenges",
            "Present ideas and solutions to experts and industry professionals",
            "Collaborate and network with like-minded innovators and peers"
        ],
        media: [
            { type: "image", url: "/assets/events/2025-2026/emsistes_innov/thumb.jpg" },
        ],
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSevHzkE1GcGxOSTjUK9pt-V-3Hbi6tH4iXHZ2oefE9-M5Q0dQ/viewform?usp=sharing&ouid=105034487534648453116",
    },

    /* Past Events */
    {
        id: "vision-ai",
        title: "Vision AI Competition",
        description: "A competition showcasing innovative AI projects and solutions.",
        date: "February 14, 2026",
        image: "/assets/events/2025-2026/vision_ai/thumb.jpg",
        category: "Competition",
        type: "competition",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "Vision AI was a competition centered around Artificial Intelligence in all its forms. Participants developed and presented their own AI projects, ranging from problem-solving applications to innovative systems introducing entirely new ideas. Each team pitched their solution in front of a jury, explaining the concept, technical implementation, real-world impact, and future potential. The jury evaluated projects based on creativity, technical depth, feasibility, and presentation quality.",
        objectives: [
            "Encourage students to design and build original AI-based projects",
            "Promote innovative solutions to real-world challenges",
            "Strengthen participants' pitching and technical presentation skills",
            "Foster critical thinking, creativity, and practical AI implementation"
        ],
        tools: [
            "Artificial Intelligence",
            "Machine Learning",
            "Data Science",
            "Computer Vision",
            "Natural Language Processing"
        ],
        media: [
            { type: "image", url: "/assets/events/2025-2026/vision_ai/thumb.jpg" },
            { type: "video", url: "/assets/events/2025-2026/vision_ai/thriller.mp4" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo1.jpg" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo2.jpg" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo3.jpg" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo4.jpg" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo5.jpg" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo6.jpg" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo7.jpg" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo8.jpg" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo9.jpg" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo10.jpg" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo11.jpg" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo12.jpg" },
            { type: "image", url: "/assets/events/2025-2026/vision_ai/photo13.jpg" },
        ]
    },
    {
        id: "catia-bootcamp",
        title: "CATIA Design Bootcamp",
        description: "Bootcamp featuring two workshops on CATIA for mechanical design and CAD fundamentals.",
        date: "December 24, 2025",
        image: "/assets/events/2025-2026/catia/thumb.jpg",
        category: "Bootcamp",
        type: "bootcamp",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "A hands-on CATIA bootcamp composed of two workshops aimed at introducing students to one of the most powerful CAD tools used in the mechanical, automotive, and aerospace industries. The bootcamp focused on building a strong foundation in CATIA, from understanding its industrial relevance to mastering its interface and core functionalities. Through practical guidance and real-world insights, participants strengthened their CAD and design skills while preparing for advanced engineering projects.",
        speakers: [
            {
                name: "Yahya LOUKILI",
                role: "Student at EMSI Marrakesh"
            }
        ],
        objectives: [
            "Introduce CATIA and its industrial applications",
            "Understand the CATIA interface and core features",
            "Develop foundational CAD and mechanical design skills",
            "Prepare students for advanced design and engineering projects"
        ],
        tools: [
            "CATIA V5",
            "3D CAD Modeling",
            "Mechanical Design",
            "Part Design",
            "Assembly Design"
        ],
        media: [
            { type: "image", url: "/assets/events/2025-2026/catia/photo1.jpg" },
            { type: "image", url: "/assets/events/2025-2026/catia/photo2.jpg" },
            { type: "image", url: "/assets/events/2025-2026/catia/photo3.jpg" },
            { type: "image", url: "/assets/events/2025-2026/catia/photo4.jpg" },
            { type: "image", url: "/assets/events/2025-2026/catia/photo5.jpg" },
            { type: "video", url: "/assets/events/2025-2026/catia/video.mp4" },
        ]
    },
    {
        id: "cybersecurity_and_ctfs_bootcamp",
        title: "Cyber Security & CTFs Bootcamp",
        description: "Intensive bootcamp covering cybersecurity fundamentals and Capture The Flag competitions.",
        date: "December 10, 2025",
        image: "/assets/events/2025-2026/cybersecurity_and_ctfs_bootcamp/thumb.jpg",
        category: "Bootcamp",
        type: "bootcamp",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "An intensive hands-on bootcamp designed to introduce students to the exciting world of cyber security and CTF competitions. Participants learned essential security concepts, practiced penetration testing techniques, and competed in live CTF challenges. The bootcamp covered web security, cryptography and reverse engineering fundamentals.",
        speakers: [
            {
                name: "Youness SBAI",
                role: "Student at EMSI Marrakesh"
            }
        ],
        tools: [
            "Kali Linux",
            "Nmap",
            "Burp Suite",
            "Dogbolt"
        ],
        media: [
            { type: "image", url: "/assets/events/2025-2026/cybersecurity_and_ctfs_bootcamp/photo1.jpg" },
            { type: "image", url: "/assets/events/2025-2026/cybersecurity_and_ctfs_bootcamp/photo2.jpg" },
            { type: "image", url: "/assets/events/2025-2026/cybersecurity_and_ctfs_bootcamp/photo3.jpg" },
            { type: "image", url: "/assets/events/2025-2026/cybersecurity_and_ctfs_bootcamp/photo4.jpg" },
            { type: "image", url: "/assets/events/2025-2026/cybersecurity_and_ctfs_bootcamp/photo5.jpg" },
            { type: "image", url: "/assets/events/2025-2026/cybersecurity_and_ctfs_bootcamp/photo6.jpg" },
            { type: "image", url: "/assets/events/2025-2026/cybersecurity_and_ctfs_bootcamp/photo7.jpg" },
            { type: "image", url: "/assets/events/2025-2026/cybersecurity_and_ctfs_bootcamp/photo8.jpg" },
            { type: "image", url: "/assets/events/2025-2026/cybersecurity_and_ctfs_bootcamp/photo9.jpg" },
            { type: "image", url: "/assets/events/2025-2026/cybersecurity_and_ctfs_bootcamp/photo10.jpg" },
            { type: "video", url: "/assets/events/2025-2026/cybersecurity_and_ctfs_bootcamp/video.mp4" },
        ]
    },
    {
        id: "initiation-entrepreneuriat",
        title: "Initiation en Entrepreneuriat",
        description: "Introduction to entrepreneurship and startup culture.",
        date: "November 19, 2025",
        image: "/assets/events/2025-2026/entrepreneuriat/thumb.png",
        category: "Talk",
        type: "talk",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "An inspiring talk introducing students to the fundamentals of entrepreneurship and innovation. The session covered essential topics including idea validation, business model development, startup funding, and the entrepreneurial mindset. Attendees learned from successful entrepreneurs about their journey, challenges, and key lessons learned in building successful ventures.",
        speakers: [
            {
                name: "Dr. Inass BOUBEKRI",
                role: "Doctor in Economics - Professor at EMSI Marrakesh - Business Consultant"
            }
        ],
        media: [
            { type: "image", url: "/assets/events/2025-2026/entrepreneuriat/photo1.jpg" },
            { type: "image", url: "/assets/events/2025-2026/entrepreneuriat/photo2.jpg" },
            { type: "image", url: "/assets/events/2025-2026/entrepreneuriat/photo3.jpg" },
            { type: "image", url: "/assets/events/2025-2026/entrepreneuriat/photo5.jpg" },
            { type: "video", url: "/assets/events/2025-2026/entrepreneuriat/video.mp4" },
        ]
    },
    {
        id: "emsistes-innov25",
        title: "EMSIstes INNOV'25",
        description: "Innovation competition focused on smart systems and emerging technologies.",
        date: "May 24, 2025",
        image: "/assets/events/2024-2025/emsistes_innov/thumb.jpg",
        category: "Competition",
        type: "competition",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "EMSIstes INNOV is an innovation-driven competition that brought together students to design and prototype smart systems addressing real-world challenges. The competition focused on key domains such as HealthTech, Smart Mobility, Renewable Energy, and Artificial Intelligence. Teams worked collaboratively to develop impactful solutions, combining technical skills, creativity, and entrepreneurial thinking, before presenting their projects to a jury.",
        objectives: [
            "Encourage innovation and problem-solving using smart systems",
            "Apply AI and emerging technologies to real-world challenges",
            "Promote teamwork and interdisciplinary collaboration",
            "Expose students to project pitching and evaluation by a jury"
        ],
        tools: [
            "Artificial Intelligence",
            "IoT & Smart Systems",
            "Renewable Energy Technologies",
            "Data Analysis",
            "Prototyping Tools"
        ],
        media: [
            { type: "image", url: "/assets/events/2024-2025/emsistes_innov/thumb.jpg" },
        ]
    },
    {
        id: "solidworks-workshop",
        title: "SolidWorks Workshop",
        description: "Hands-on workshop on 3D CAD modeling using SolidWorks.",
        date: "April 30, 2025",
        image: "/assets/events/2024-2025/solidworks/thumb.jpg",
        category: "Workshop",
        type: "workshop",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "A comprehensive hands-on workshop introducing students to professional 3D CAD modeling using SolidWorks. Participants learned fundamental modeling techniques, assembly creation, technical drawing generation, and simulation basics. The workshop included practical exercises where students designed and modeled real-world mechanical components and assemblies.",
        speakers: [
            {
                name: "Mouad ELCRAFSI",
                role: "Student at EMSI Marrakesh"
            }
        ],
        tools: [
            "SolidWorks 2024",
            "3D Modeling",
            "Assembly Design",
            "Technical Drawings"
        ],
        media: [
            { type: "image", url: "/assets/events/2024-2025/solidworks/thumb.jpg" },
        ]
    },
    {
        id: "aws-workshop",
        title: "Cloud Computing Basics With AWS",
        description: "Introduction to cloud computing concepts and AWS services.",
        date: "April 24, 2025",
        image: "/assets/events/2024-2025/cloud_computing_with_aws/thumb.jpg",
        category: "Workshop",
        type: "workshop",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "An introductory workshop on cloud computing fundamentals using Amazon Web Services (AWS). Students learned about cloud architecture, core AWS services, and hands-on deployment of applications. The workshop covered EC2, S3, RDS, Lambda, and basic DevOps practices. Participants gained practical experience by deploying their first cloud-based applications and understanding cloud cost optimization.",
        speakers: [
            {
                name: "Majdouline SABRI",
                role: "Student at EMSI Marrakesh"
            }
        ],
        tools: [
            "AWS EC2",
            "AWS S3",
            "AWS Lambda",
            "AWS RDS",
            "CloudFormation",
            "AWS CLI"
        ],
        media: [
            { type: "image", url: "/assets/events/2024-2025/cloud_computing_with_aws/photo1.jpg" },
            { type: "image", url: "/assets/events/2024-2025/cloud_computing_with_aws/photo2.jpg" },
            { type: "image", url: "/assets/events/2024-2025/cloud_computing_with_aws/photo3.jpg" },
            { type: "image", url: "/assets/events/2024-2025/cloud_computing_with_aws/photo4.jpg" },
            { type: "image", url: "/assets/events/2024-2025/cloud_computing_with_aws/photo5.jpg" },
        ]
    },
    {
        id: "linux-workshop",
        title: "Power Up with Linux: Learn, Practice, Advance",
        description: "Comprehensive Linux fundamentals and command-line mastery.",
        date: "April 19, 2025",
        image: "/assets/events/2024-2025/linux/thumb.jpg",
        category: "Workshop",
        type: "workshop",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "A comprehensive workshop designed to empower students with essential Linux skills. From basic command-line operations to advanced system administration, participants learned to navigate the Linux ecosystem with confidence. The workshop covered file system management, shell scripting, process management, networking basics, and package management. Students gained hands-on experience through practical exercises and real-world scenarios.",
        speakers: [
            {
                name: "Abdelilah HABIB",
                role: "Student at EMSI Marrakesh"
            },
            {
                name: "Mohamed ERRAJI",
                role: "Student at EMSI Marrakesh"
            }
        ],
        tools: [
            "Ubuntu/Debian",
            "Bash Scripting",
            "Vim/Nano",
            "Git",
            "SSH",
            "Package Managers (apt, yum)"
        ],
        media: [
            { type: "image", url: "/assets/events/2024-2025/linux/photo1.jpg" },
            { type: "image", url: "/assets/events/2024-2025/linux/photo2.jpg" },
            { type: "image", url: "/assets/events/2024-2025/linux/photo3.jpg" },
        ]
    },
];
