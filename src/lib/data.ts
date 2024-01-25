import agendamasterImg from "../../public/agenda-master.png";
import sonasenseImg from "../../public/sona-sense.png";
import subsageImg from "../../public/subsage.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Agenda Master",
    description:
      "An AI-Assisted task management platform for prospective college students.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "ChatGPT API"],
    imageUrl: agendamasterImg,
  },
  {
    title: "SonaSense",
    description:
      "A music streaming platform geared with musical-theory based filtering features.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Supabase",
      "AWS API Gateway/Lambda functions",
    ],
    imageUrl: sonasenseImg,
  },
  {
    title: "SubSage",
    description:
      "My passion project! A cross-platform app for language learners to seamlessly watch native content. Popup dictionaries allow for streamlined studying of subtitles.",
    tags: ["React Native", "TypeScript", "WatermelonDB"],
    imageUrl: subsageImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Supabase",
  "React Native",
  "WatermelonDB",
  "AWS API Gateway/Lambda",
  "PostgreSQL",
  "Pandas",
  "Linux",
] as const;
