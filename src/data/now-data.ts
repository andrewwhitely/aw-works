interface NowDataItem {
	value: string;
	href?: string;
}

interface NowData {
	lastUpdated?: string;
	working?: NowDataItem & {
		label: string;
		detail?: string;
		detailHref?: string;
	};
	reading?: NowDataItem[];
	listening?: NowDataItem[];
	watching?: NowDataItem[];
}

export const nowData = {
	reading: [
		{
			value: 'Ring Shout by P. Djèlí Clark',
			href: 'https://www.goodreads.com/book/show/49247242-ring-shout',
		},
		{
			value: 'One Piece by Eiichiro Oda',
			href: 'https://en.wikipedia.org/wiki/One_Piece',
		},
	],
	listening: [
		{
			value: 'The Will of the Many by James Islington',
			href: 'https://www.goodreads.com/book/show/58416952-the-will-of-the-manys',
		},
	],
	watching: [
		{
			value: 'A Knight of the Seven Kingdoms',
			href: 'https://en.wikipedia.org/wiki/A_Knight_of_the_Seven_Kingdoms_(TV_series)',
		},
		{
			value: 'Yellowjackets',
			href: 'https://en.wikipedia.org/wiki/Yellowjackets_(TV_series)',
		},
	],
};
