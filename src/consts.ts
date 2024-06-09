import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Simeon Tran",
  DESCRIPTION: "Computer Science Graduate Student",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "My personal website and blog.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Blog posts on research projects that I am currently working on.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Projects that I am proud of.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/simeonat",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/simeon-tran/",
  },
];
