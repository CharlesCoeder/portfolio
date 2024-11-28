import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ExperienceItem = {
  title: string;
  location?: string;
  description: string;
  icon: React.ReactElement;
  date: string;
  projectLink?: string;
};
