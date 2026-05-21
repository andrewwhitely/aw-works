export type CategoryKey = string;

export interface Project {
	slug: string;
	title: string;
	category: CategoryKey | CategoryKey[];
	year: number;
	description: string;
	tags?: string[];
	links?: { label: string; href: string }[];
	about?: string[];
	features?: string[];
	planned?: string[];
	notes?: { label: string; value: string; href?: string }[];
	capabilities?: string[] | { [key: string]: string[] }[];
	services?: string[];
	privacy?: { label?: string; href: string }[];
}

export const projects: Project[] = [
	{
		slug: 'lunchbox-studio',
		title: 'Lunchbox Studio',
		category: 'web',
		year: 2024,
		description:
			'A techology-first, creative design and development studio.',
		tags: ['Studio', 'Design', 'Development'],
		links: [{ label: 'Visit →', href: 'https://lunchbox.studio' }],
		about: [
			'Lunchbox Studio is an independent design and development studio I founded to take on creative endeavors — building beautiful and engaging digital experiences for the people.',
		],
		capabilities: [
			{
				Product: [
					'Research',
					'Strategy',
					'Design',
					'Development',
					'Copywriting',
					'SEO',
					'User Testing',
				],
			},
			{
				Branding: [
					'Identity',
					'Design Systems',
					'Photography',
					'Voice & Tone',
					'Typography',
				],
			},
			{
				Digital: [
					'Responsive Website Design',
					'User Experience',
					'User Interface Design',
					'Digital Experiences',
					'Architecture',
				],
			},
			{
				Technology: [
					'Web Design & Development',
					'iOS Development',
					'eCommerce',
					'Consulting',
					'Strategy',
					'Architecture Design',
					'API Design, Development & Integration',
					'AI Strategy, Design, & Implementation',
				],
			},
		],
		notes: [
			{ label: 'Type', value: 'Studio' },
			{ label: 'Role', value: 'Founder' },
			{ label: 'Year', value: '2024' },
			{
				label: 'Status',
				value: 'Active',
				href: 'https://lunchbox.studio',
			},
		],
	},
	{
		slug: 'stash',
		title: 'Stash',
		category: ['mobile', 'desktop', 'web'],
		year: 2026,
		description: 'A personal wishlist tracker.',
		tags: ['Design', 'Development', 'Product', 'Website', 'Mobile'],
		links: [{ label: 'Visit →', href: '#' }],
		about: [
			"I built Stash because I felt like I was always losing track of the things that I wanted to buy. Honestly, that's really it.",
			"It's a pretty straightforward app. You find something you like, add it to your Stash, and can track whether or not you've bought it, see quick price history, as well as categorize items.",
			'This is really a great tool for budgeting, planning out expenses, or an easy way to always have an answer when asked what you want as a birthday or holiday gift (one of my biggest struggles).',
		],
		features: [
			'Built with SwiftUI, providing a clean UX and UI - one that feels like it should have shipped with Apple.',
			'Ability to quickly go from app to desktop and vice-versa, not losing any of your data.',
			'Categorize wishlist items with the default or custom tags',
			'View a quick overview of total spent, remaining items, and average item price.',
			'An intuitive design and flow from start to finish.',
		],
		planned: [
			'Browser extension for desktop and mobile to quickly send a URL to your Stash.',
		],
		notes: [
			{ label: 'Type', value: 'iOS + Desktop App' },
			{ label: 'Role', value: 'Design + Development' },
			{ label: 'Year', value: '2026' },
			{
				label: 'Status',
				value: 'In Development',
				href: '#',
			},
		],
		privacy: [{ label: 'Privacy Policy →', href: '/works/stash/privacy' }],
	},
	{
		slug: 'toolshed',
		title: 'ToolShed',
		category: ['web'],
		year: 2026,
		description:
			'A catalog and management dashboard for your tools and home improvement projects. Built by a builder, for builders.',
		tags: ['Design', 'Development', 'Product', 'Website'],
		links: [{ label: 'Visit →', href: 'https://toolshed.fyi' }],
		about: [
			'ToolShed is a personal project born out of my love for building and home improvement. It’s a web app designed to help DIY enthusiasts catalog their tools, manage projects, and keep track of maintenance schedules.',
			"The idea came to me as a new first-time homeowner. As it goes, the list of projects in my todo list started growing longer and longer, and I was quickly getting frustrated with the constant having to double and triple check everything I had, or having to make a mid-work trip to Lowe's to buy something.",
			'ToolShed is built to be simple, intuitive, and focused on the needs of everyone from the weekend DIY warrior like myself to your average handyman or professional contractor.',
		],
		features: [
			'Authentication and user accounts to keep your tool catalog and projects private and secure, and accessible across devices',
			'Catalog your tools with photos, descriptions, and maintenance notes',
			'Create a working backlog of projects with notes, tools required, cost, and estimated time to complete',
			'Ability to create write-ups to capture project details, progress, and lessons learned',
			'Branded themes so you can customize the look of the application to match your favorite brands',
		],
		planned: [
			'iOS Application with offline support and native features like camera integration for tool cataloging',
			'A location-based neighborhood "marketplace" for seeing what is available in your area for borrowing, or listing tools you have available for others to borrow',
			'For working professionals, a shareable portfolio to showcase your work and share with potential clients',
		],
		notes: [
			{ label: 'Type', value: 'Website' },
			{ label: 'Role', value: 'Design + Development' },
			{ label: 'Year', value: '2026' },
			{
				label: 'Status',
				value: 'In Development',
				href: 'https://toolshed.fyi',
			},
		],
	},
];

export const categories: { key: CategoryKey; label: string }[] = [
	{ key: 'web', label: 'Web' },
	{ key: 'mobile', label: 'Mobile' },
	{ key: 'desktop', label: 'Desktop' },
	{ key: 'other', label: 'Other' },
];
