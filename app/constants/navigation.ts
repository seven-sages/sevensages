export interface NavLink {
  link: string;
  name: string;
  external?: boolean;
  active?: boolean;
}

export const projectTierLinks: NavLink[] = [
  {
    link: "/",
    name: "Project",
    active: true,
  },
  {
    link: "/database",
    name: "Database",
  },
  {
    link: "/edition",
    name: "Edition",
  },
];

export const internalNavLinks: NavLink[] = [
  {
    link: "/team",
    name: "Team",
  },
  {
    link: "/gender",
    name: "Gender",
  },
  {
    link: "/genre",
    name: "Genre",
  },
  {
    link: "/events/overview",
    name: "Events",
  },
  {
    link: "/materials",
    name: "Materials",
  },
  {
    link: "/news/latest",
    name: "News",
  },
];

export const navLinks: NavLink[] = [
  ...internalNavLinks,
  ...projectTierLinks.filter((link) => link.name !== "Project"),
];
