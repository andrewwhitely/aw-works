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
	{
		slug: 'sportfinder',
		title: 'SportFinder',
		category: ['web'],
		year: 2026,
		description:
			'A sports team discovery engine that recommends new teams to follow based on the ones you already love.',
		tags: ['Design', 'Development', 'Product', 'Website'],
		about: [
			'SportFinder answers the question every casual fan eventually asks: "I like the Lakers — what else should I watch?" You mark the teams you already follow, and the recommendation engine surfaces new ones across sports based on your taste profile.',
			'The engine scores candidates against your fingerprint across multiple dimensions — team aesthetic and color palette, narrative and story arcs, entry ease for new fans, current form, watchability, and geography. Cross-sport recommendations are a first-class feature, not an afterthought.',
			"The app lives entirely in the browser with no account required. Your selections are saved locally and can be shared via a URL. The backend is a Cloudflare Worker serving a static team catalog and the recommendation API.",
		],
		features: [
			'Team browser covering NFL, NBA, MLB, NHL, Formula 1, top soccer leagues, tennis, and golf',
			'Recommendation engine that scores teams against your taste fingerprint across palette, narrative, form, watchability, and geography',
			'Cross-sport discovery — follow the Lakers and get surfaced teams from other sports with similar energy',
			'Explore mode for getting into a new sport, with sport-level and team-level interest tracking',
			'Fan fingerprint — a visual summary of your sports identity you can share or export',
			'No account required — state lives in localStorage and is shareable via URL hash',
		],
		notes: [
			{ label: 'Type', value: 'Website' },
			{ label: 'Role', value: 'Design + Development' },
			{ label: 'Year', value: '2026' },
			{ label: 'Status', value: 'In Development' },
		],
	},
	{
		slug: 'truestack',
		title: 'TrueStack',
		category: ['web'],
		year: 2026,
		description:
			'Anonymous employee reviews showing the gap between what a job posting promised and what the role actually is.',
		tags: ['Design', 'Development', 'Product', 'Website'],
		links: [{ label: 'Visit →', href: 'https://truestack.fyi' }],
		about: [
			'Job descriptions are written by marketing. TrueStack gives employees a place to submit structured, anonymous reviews that reveal the gap — the stack or tools you were told about versus what you actually touched, the duties that were listed versus what you spent your time on.',
			'Every review captures the same signal: company, level, tech stack diff, duties diff, tech debt rating, a reality match score, and a recommendation. Because the structure is consistent, you can compare submissions across companies and roles rather than reading unstructured prose.',
			'Verification is optional. If you choose to verify, you enter a work email and receive a one-time code. The email is never stored — only a SHA-256 hash is kept, used solely to enforce one verified review per person per company. Verified reviews get a badge and sort first in browse.',
		],
		features: [
			'Anonymous submissions with no account required — a CAPTCHA and client-side quality guards keep it clean',
			'Structured stack and duties diff fields rendered as a visual comparison, not free-form prose',
			'Optional email verification with SHA-256 hashing — the raw address is never persisted',
			'Verified badge as a social-proof incentive, not a gate — unverified reviews are still accepted',
			'Browse and filter reviews by company, tech, and role with full pagination',
			'Privacy-first by design — no manager names, team names, or exact dates that could identify a reviewer',
		],
		notes: [
			{ label: 'Type', value: 'Website' },
			{ label: 'Role', value: 'Design + Development' },
			{ label: 'Year', value: '2026' },
			{
				label: 'Status',
				value: 'Active',
				href: 'https://truestack.fyi',
			},
		],
	},
	{
		slug: 'latitude',
		title: 'Latitude',
		category: ['desktop'],
		year: 2026,
		description:
			'A non-destructive film scan editor for macOS. Built for photographers who shoot film.',
		tags: ['Design', 'Development', 'Product'],
		about: [
			'Latitude is a macOS desktop app for editing film scans — TIFF, JPEG, and DNG files from a lab scanner. It is scoped to the tools that actually matter for film: exposure, color grading, tone curve, and a film-base neutralization tool for clearing out scanner base cast.',
			'The editing pipeline runs on WebGL2 in the renderer for real-time interactivity while Sharp handles full-resolution export in the main process. Every edit is non-destructive and serialized to a sidecar file next to the original, so your source scans are never touched.',
			'A per-stock preset and recipe system lets you build up a library of starting points for each film stock you shoot, so your editing workflow starts where it left off.',
		],
		features: [
			'Non-destructive editing with sidecar files — originals are never modified',
			'Real-time WebGL2 pipeline for histogram, white balance, exposure, contrast, highlights, shadows, and more',
			'Tone curve editor with RGB master and per-channel control',
			'Three-wheel color grading for shadows, midtones, and highlights',
			'Film-base neutralization tool — pick the scanner base color and neutralize it in one click',
			'Per-stock preset and recipe system for saving and reapplying edits across a film stock',
			'Full-resolution export with ICC profile handling and color space targeting',
		],
		notes: [
			{ label: 'Type', value: 'macOS App' },
			{ label: 'Role', value: 'Design + Development' },
			{ label: 'Year', value: '2026' },
			{ label: 'Status', value: 'In Development' },
		],
	},
	{
		slug: 'pins',
		title: 'Pins',
		category: ['mobile'],
		year: 2026,
		description: 'A bowling scorecard and stats tracker for iOS.',
		tags: ['Design', 'Development', 'Product', 'Mobile'],
		about: [
			'Pins is an iOS app for tracking bowling games, calculating stats, and managing equipment. It is built for the bowler who wants more than a paper scorecard — a clean record of every game, session trends, and a persistent handicap that updates automatically.',
			'I built it because I wanted something that felt like it belonged on iOS, not a ported web app. Everything from session logging to stats charts is native SwiftUI on iOS 18.',
		],
		features: [
			'Log games frame-by-frame with fast, accurate manual score entry',
			'Dashboard with rolling average, high game, strike rate, spare rate, and current handicap',
			'Session mode for tracking multi-game sets at a single sitting',
			'Handicap calculator supporting USBC formula and custom percentage and base score',
			'Equipment tracker for your ball bag with per-ball notes',
			'Session presets and oil pattern library for quick session setup',
			'Stats charts for average over time, strike and spare trends, and game-by-game breakdown',
		],
		notes: [
			{ label: 'Type', value: 'iOS App' },
			{ label: 'Role', value: 'Design + Development' },
			{ label: 'Year', value: '2026' },
			{ label: 'Status', value: 'In Development' },
		],
		privacy: [
			{ label: 'Support →', href: '/works/pins/support' },
			{ label: 'Privacy Policy →', href: '/works/pins/privacy' },
		],
	},
];

export const categories: { key: CategoryKey; label: string }[] = [
	{ key: 'web', label: 'Web' },
	{ key: 'mobile', label: 'Mobile' },
	{ key: 'desktop', label: 'Desktop' },
	{ key: 'other', label: 'Other' },
];
