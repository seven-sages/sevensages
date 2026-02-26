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
    external: true,
  },
  {
    link: "/edition",
    name: "Edition",
    external: true,
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

// Mobile drawer still lists the cross-project destinations together with internal links.
export const navLinks: NavLink[] = [
  ...internalNavLinks,
  ...projectTierLinks.filter((link) => link.name !== "Project"),
];
