export interface InstitutionLogo {
    name: string;
    logo: string;
    alt: string;
    width: number;
    height: number;
}

export const INSTITUTIONS = {
    ieee: {
        name: "IEEE",
        logo: "/assets/ieee_.webp",
        alt: "IEEE Logo",
        width: 120,
        height: 60,
    },
    emsi: {
        name: "EMSI Marrakesh",
        logo: "/assets/emsi.webp",
        alt: "EMSI Marrakesh Logo",
        width: 120,
        height: 60,
    },
    lamigep: {
        name: "Laboratoire LAMIGEP",
        logo: "/assets/lamigep.webp",
        alt: "LAMIGEP Laboratory Logo",
        width: 120,
        height: 60,
    },
} as const;

export const getInstitutionLogos = () => [
    INSTITUTIONS.ieee,
    INSTITUTIONS.emsi,
    INSTITUTIONS.lamigep,
];