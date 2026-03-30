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
			value: 'The Will of the Many by James Islington',
			href: 'https://www.goodreads.com/book/show/58416952-the-will-of-the-manys',
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
			value: 'Jury Duty Presents: Company Retreat',
			href: 'https://en.wikipedia.org/wiki/Jury_Duty_(2023_TV_series)#Season_2:_Company_Retreat_(2026)',
		},
	],
};
