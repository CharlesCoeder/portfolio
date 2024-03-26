import agendamasterImg from "../../public/agenda-master.png";
import sonasenseImg from "../../public/sona-sense.png";
import subsageImg from "../../public/subsage.png";
import { FaProjectDiagram } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";
import React from "react";

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

export const experiencesData = [
  {
    title: "Began Bachelor of Science in Computer Science",
    location: "New York Institute of Technology",
    description:
      "Began pursuing a Bachelor of Science in Computer Science with a minor in Mathematics. Currently maintaining a high GPA of 3.98.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2021",
  },
  {
    title: "Team Member at Butterfield Market",
    location: "New York, NY",
    description:
      "Enhanced customer interaction skills and adaptability in a dynamic environment, fostering abilities vital for understanding user requirements and improving software solutions.",
    icon: React.createElement(FaUserTie),
    date: "October 2022 - Present",
  },
  {
    title: "Resident Assistant at FOUND Study",
    location: "New York, NY",
    description:
      "Developed strong problem-solving and conflict resolution skills, complemented by effective organizational capabilities, through adeptly addressing and managing resident needs and concerns.",
    icon: React.createElement(FaUsers),
    date: "August 2023 - Present",
  },
  {
    title: "Community Development Assistant",
    location: "New York Institute of Technology",
    description:
      "Cultivated a strong community by orchestrating events and initiatives that enhance community engagement and foster a collaborative spirit.",
    icon: React.createElement(FaPeopleGroup),
    date: "August 2023 - Present",
  },
  {
    title: "Project: SonaSense",
    location: "sona-sense.vercel.app",
    description:
      "Engineered a music streaming website, featuring an advanced search functionality with a unique music analysis backend.",
    icon: React.createElement(FaProjectDiagram),
    date: "December 2023",
  },
  {
    title: "Project: AgendaMaster",
    location: "agenda-master-psi.vercel.app",
    description:
      "Developed a task management and college application planning tool bundled with AI-Assisted functionalities.",
    icon: React.createElement(FaProjectDiagram),
    date: "December 2023",
  },
  {
    title: "SubSage",
    location: "",
    description:
      "Developing 'SubSage', a mobile app for language learners: facilitating interactive subtitle translation and word lookup to enhance learning efficiency.",
    icon: React.createElement(FaLanguage),
    date: "2023 - Present",
  },
  {
    title: "Environmental Insights with Blockchain & Federated Learning",
    location: "",
    description:
      "Involved in a research project that combines a custom private blockchain with federated learning at the edge. This approach aims to efficiently collect and analyze environmental data, providing reliable insights and predictions.",
    icon: React.createElement(TiWeatherCloudy),
    date: "2023 - Present",
  },
  {
    title: "Graduation: Bachelor of Science in Computer Science",
    location: "New York Institute of Technology",
    description:
      "Graduating with a Bachelor of Science in Computer Science and a minor in Mathematics, demonstrating strong technical foundations and analytical skills essential for software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2024",
  },
] as const;
