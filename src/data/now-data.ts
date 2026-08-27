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
			value: 'Chain-Gang All-Stars by Nana Kwame Adjei-Brenyah',
			href: 'https://www.goodreads.com/en/book/show/61190770-chain-gang-all-stars',
		},
	],
	listening: [
		{
			value: 'Golden Son by Pierce Brown',
			href: 'https://www.goodreads.com/book/show/18966819-golden-son',
		},
		{
			value: `The Butcher's Masquerade by Matt Dinniman`,
			href: 'https://www.goodreads.com/book/show/220772913-the-butcher-s-masquerade',
		},
	],
	watching: [
		{
			value: 'Industry',
			href: 'https://en.wikipedia.org/wiki/Industry_(TV_series)',
		},
		{
			value: 'The Bear',
			href: 'https://en.wikipedia.org/wiki/The_Bear_(TV_series)',
		},
	],
};
