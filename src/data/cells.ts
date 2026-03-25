export interface Cell {
    id: string;
    name: string;
    description: string;
    activities: string[];
    image: string;
    joinUrl: string;
}

export const cells: Cell[] = [
    {
        id: "cvtt",
        name: "CVTT (Cellule de Valorisation & Transfert de Technologie)",
        description: "The Innovation Unit supports students from concept to prototype, and through to incubation or startup creation. It provides technical and business guidance, intellectual property protection, and access to funding to boost the technological maturity of projects.",
        activities: [
            "Fostering campus-wide innovation",
            "Technical & scientific project mentoring",
            "Research-to-industry technology transfer",
            "Creativity, prototyping & project valorization",
            "Supporting student and faculty initiatives",
        ],
        image: "/assets/cells/cvtt.webp",
        joinUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfGmHm7RQQGyEChSiTfYOihIWI9l0VZsenQUMV1e4kRfAJ83g/viewform",
    },
];
