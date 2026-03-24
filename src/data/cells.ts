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
        description: "A dedicated space for valorizing innovation projects and technology transfer. CVTT transforms student ideas into impactful technical and scientific projects, bridging the gap between research and industry.",
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
