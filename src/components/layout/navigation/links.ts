import {
  IconSearch,
  IconUser,
  IconDeviceTv,
  IconMovie,
  IconHomeFilled,
} from "@tabler/icons-react";

export const links = [
  {
    name: "Profile",
    href: "/profile",
    icon: IconUser,
    color: "white",
    fill: "white",
  },
  {
    name: "Home",
    href: "/",
    icon: IconHomeFilled,
    color: "white",
    fill: "white",
  },
  {
    name: "Search",
    href: "/search",
    icon: IconSearch,
    color: "white",
    fill: "white",
  },
  {
    name: "Tv",
    href: "/tv",
    icon: IconDeviceTv,
    color: "white",
    fill: "white",
  },
  {
    name: "Movies",
    href: "/movies",
    icon: IconMovie,
    color: "white",
    fill: "white",
  },
] as const;
