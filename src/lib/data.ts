import agendamasterImg from "../../public/agenda-master.png";
import sonasenseImg from "../../public/sona-sense.png";
import subsageImg from "../../public/subsage.png";
import blockflImg from "../../public/blockFL.jpg";
import runClubImg from "../../public/runClub.jpg";
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
    title: "FOUND Run Club",
    description:
      "Developed a full-stack run club application deployed on web and mobile using Next.js & Expo/React Native.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "React Native",
      "Expo",
    ],
    imageUrl: runClubImg,
    url: "https://github.com/CharlesCoeder/foundrunclub"
  },
  {
    title: "Agenda Master",
    description:
      "An AI-Assisted task management platform for prospective college students.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "ChatGPT API"],
    imageUrl: agendamasterImg,
    url: "https://github.com/CharlesCoeder/agenda-master"
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
    url: "https://github.com/juan-phzy/sona-sense"
  },
  {
    title: "SubSage",
    description:
      "My passion project! A cross-platform app for language learners to seamlessly watch native content. Popup dictionaries allow for streamlined studying of subtitles.",
    tags: ["React Native", "Expo","TypeScript", "WatermelonDB"],
    imageUrl: subsageImg,
    url: "https://github.com/CharlesCoeder/subtitle-sage"
  },
  {
    title: "BlockFL",
    description:
      "Developed and implemented a novel system integrating federated learning and blockchain technology for IoT data analysis.",
    tags: [
      "Python",
      "PyTorch",
      "Federated Learning",
      "Blockchain",
    ],
    imageUrl: blockflImg,
    url: "/blockFL.pdf"
  },
] as const;

export const skillsData = [
  "Python",
  "TypeScript",
  "JavaScript",
  "React",
  "React Native",
  "Expo",
  "Java",
  "Flutter",
  "Dart",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Supabase",
  "AWS Lambda/Gateway",
  "PostgreSQL",
  "Pandas",
  "PyTorch",
  "Linux",
  "Arch",
  "Windows",
  "macOS",
  "MatLab",
  "CI/CD",
  "Docker",
  
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Science in Computer Science",
    location: "New York Institute of Technology",
    description:
      "Completed Bachelor of Science in Computer Science with a minor in Mathematics, graduating with a GPA of 3.98.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2021 - May 2024",
  },
  {
    title: "Began Master of Science in Computer Science",
    location: "Georgia Institute of Technology",
    description:
      "Started pursuing a Master of Science in Computer Science, focusing on advanced computing concepts and specialized coursework.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
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
    title: "Senior Resident Assistant at FOUND Study",
    location: "New York, NY",
    description:
      "Manage a team of 30 Resident Assistants for a residential community of over 1000 students. Lead team meetings and training sessions to improve service quality and foster team cohesion.",
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
    description:
      "Engineered a music streaming website, featuring an advanced search functionality with a unique music analysis backend.",
    icon: React.createElement(FaProjectDiagram),
    date: "December 2023",
  },
  {
    title: "Project: AgendaMaster",
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
    title: "BlockFL",
    location: "IEEE VCT 2024 Fall Conference",
    description:
      "Research paper accepted for publication. Developed a system that combines a custom private blockchain with federated learning at the edge for efficient environmental data collection and analysis, providing reliable insights and predictions.",
    icon: React.createElement(TiWeatherCloudy),
    date: "October 2024",
  },
  {
    title: "FOUND Run Club",
    location: "Personal Project",
    description:
      "Developed a full-stack run club application deployed on web and mobile with 50 active users. Features include QR code attendance, community chat room, and rewards for run participation.",
    icon: React.createElement(FaProjectDiagram),
    date: "2024 - Present",
  },
] as const;
