export interface Role {
	title: string;
	start: number;
	end?: number | string;
	description?: string;
	url: string;
	locked?: boolean;
	current?: boolean;
	role?: string;
	bullets?: string[];
}

export const Jobs: Role[] = [
	{
		title: 'Surely Work',
		start: 2024,
		end: 2026,
		locked: false,
		current: false,
		url: 'https://surelywork.com/',
		role: 'Lead Engineer',
	},
	{
		title: 'Booz Allen Hamilton',
		start: 2023,
		url: 'https://boozallen.com/',
		locked: false,
		current: true,
		role: 'Senior Software Engineer',
	},
	{
		title: 'FirstFloor Studios',
		start: 2022,
		end: 2022,
		url: 'https://firstfloor.app/',
		locked: false,
		current: false,
		role: 'Senior Software Engineer',
	},
	{
		title: 'Capital One',
		start: 2018,
		end: 2022,
		url: 'https://capitalone.com/',
		locked: false,
		current: false,
		role: 'Software Engineer',
	},
	{
		title: 'Lunchbox Studio',
		url: 'https://lunchbox.studio',
		start: 2024,
		locked: false,
		current: true,
		role: 'Founder',
	},
];

export const Projects: Role[] = [];
