interface NowDataItem {
	value: string;
	href?: string;
}

interface NowData {
	lastUpdated: string;
	working: NowDataItem & {
		label: string;
		detail?: string;
		detailHref?: string;
	};
	reading: NowDataItem[];
	listening: NowDataItem[];
	watching: NowDataItem[];
}

export const nowData = {
	lastUpdated: 'March 2026',
	working: {
		label: 'Working on',
		value: 'Senior Software Engineer at Booz Allen Hamilton',
		detail: 'Also building Lunchbox Studio',
		detailHref: 'https://lunchbox.studio',
	},
	reading: [
		{
			value: 'Dungeon Crawler Carl: The Gate of the Feral Gods by Matt Dinniman',
			href: 'https://www.goodreads.com/book/show/57905101-the-gate-of-the-feral-gods',
		},
		{
			value: 'One Piece by Eiichiro Oda',
			href: 'https://en.wikipedia.org/wiki/One_Piece',
		},
	],
	listening: [
		{
			value: 'The Girl with the Dragon Tattoo by Stieg Larsson',
			href: 'https://www.goodreads.com/book/show/2429135.The_Girl_With_the_Dragon_Tattoo?ref=nav_sb_ss_1_10',
		},
	],
	watching: [
		{
			value: 'Born to Bowl',
			href: 'https://en.wikipedia.org/wiki/Born_to_Bowl',
		},
		{
			value: 'The Pitt',
			href: 'https://en.wikipedia.org/wiki/The_Pitt',
		},
	],
};
