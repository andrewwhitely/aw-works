interface NowData {
	lastUpdated: string;
	working: {
		label: string;
		value: string;
		detail: string;
		detailHref: string;
	};
	reading: {
		label: string;
		value: string;
		href?: string;
	};
	listening: {
		label: string;
		value: string;
		href?: string;
	};
	watching: {
		label: string;
		value: string;
		href?: string;
	};
}

export const nowData = {
	lastUpdated: 'March 2026',
	working: {
		label: 'Working on',
		value: 'Senior Software Engineer at Booz Allen Hamilton',
		detail: 'Also building Lunchbox Studio',
		detailHref: 'https://lunchbox.studio',
	},
	reading: {
		label: 'Reading',
		value: 'Dungeon Crawler Carl: The Gate of the Feral Gods by Matt Dinniman',
		href: undefined as string | undefined,
	},
	listening: {
		label: 'Listening to',
		value: 'The Girl with the Dragon Tattoo by Stieg Larsson',
		href: undefined as string | undefined,
	},
	watching: {
		label: 'Watching',
		value: 'Born to Bowl',
		href: undefined as string | undefined,
	},
};
