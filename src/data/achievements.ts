/**
 * IEEE EMSI Marrakesh Achievements & Awards
 * Competitions where members participated and won prizes
 */

export interface Achievement {
    prize: string;
    prizeRank: "1st" | "2nd" | "3rd" | "Best Design" | "Honorable Mention";
    projectName?: string;
    teamName?: string;
    competitionName: string;
    institution: string;
    year?: string;
    image: string;
}

export const achievements: Achievement[] = [
    {
        prize: "1st Place",
        prizeRank: "1st",
        projectName: "AT Vision",
        competitionName: "COCIA-conf 2025",
        institution: "EST Casablanca",
        image: "/assets/achievements/cocia-1st.webp",
    },
    {
        prize: "1st Place",
        prizeRank: "1st",
        projectName: "EyeTalk",
        competitionName: "AISEC 2025",
        institution: "ENSA Marrakesh",
        image: "/assets/achievements/aisec_ziad.webp",
    },
    {
        prize: "1st Place",
        prizeRank: "1st",
        projectName: "AT Vision",
        competitionName: "AUI Entrepreneurship Award 2025",
        institution: "Al Akhawayn University",
        image: "/assets/achievements/aui.webp",
    },
    {
      prize: "3rd Place",
      prizeRank: "3rd",
      projectName: "NeuroDrive",
      competitionName: "Road Safety Competition 2025",
      institution: "ENSA Marrakech",
      image: "/assets/achievements/neurodrive.webp",
    },
    {
      prize: "3rd Place",
      prizeRank: "3rd",
      teamName: "THE MORIARTYS",
      competitionName: "ST4F1T CTF",
      institution: "ENSA Marrakech",
      image: "/assets/achievements/st4f1t.webp",
    },
    {
      prize: "3rd Place",
      prizeRank: "3rd",
      projectName: "SafeX",
      competitionName: "Driving Change: A Challenge for Future Engineers and Mobility Innovators 2025",
      institution: "CAPGEMINI Engineering",
      image: "/assets/achievements/capgemini.webp",
    },
    {
        prize: "3rd Place",
        prizeRank: "3rd",
        projectName: "FireTruck",
        competitionName: "COCIA-conf 2025",
        institution: "EST Casablanca",
        image: "/assets/achievements/cocia_3rd.webp",
    },
    {
        prize: "1st Place",
        prizeRank: "1st",
        projectName: "AT Vision",
        competitionName: "Hackathon ISMAGI 2025 - Water: The Flow of Innovation",
        institution: "ISMAGI Rabat",
        image: "/assets/achievements/ismagi.webp",
    },
    {
        prize: "3rd Place",
        prizeRank: "3rd",
        projectName: "FireTruck",
        competitionName: "AISEC 2025",
        institution: "ENSA Marrakech",
        image: "/assets/achievements/aisec_yahya.webp",
    },
    {
        prize: "Best Design Award",
        prizeRank: "Best Design",
        projectName: "RoboForge",
        competitionName: "Robot Basketball Competition 2025",
        institution: "ENSA Marrakech",
        image: "/assets/achievements/roboforge.webp",
    },
];
