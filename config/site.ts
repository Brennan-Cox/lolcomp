export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "League Data",
	description: "League of Legends Data Dashboard",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
	{
		label: "Cloud 9",
		href: "/c9"
	},
	{
		label: "Golden Guardians",
		href: "/gg"
	},
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
};
