export type Friend = {
	name: string;
	description: string;
	url: string;
	label?: string;
};

export const friends: Partial<Friend>[] = [
	{
		name: 'Alec Minchington',
		description: 'Software Engineer @ Rocket Loans',
		url: 'https://alecminchington.me',
	},
	{
		name: 'Brandon Clay',
		description: 'Designer',
		url: 'https://builtbyclay.com',
	},
	{
		name: 'Roman Denson',
		description: 'Product Designer',
		url: 'https://roe.fyi',
	},
	{
		name: 'Tre Wiggs',
		description: 'Software Engineer @ Snap',
		url: 'https://www.instagram.com/trwggs',
		label: '@trwggs',
	},
	{
		name: 'Pari Gabriel',
		description: 'Product Designer @ Bland',
		url: 'https://yeahivegottime.net',
	},
	{
		name: 'Joshua West',
		description: 'Clothing Designer',
		url: 'https://www.instagram.com/acmestudios.us/',
		label: '@acmestudios.us',
	},
	{
		name: 'Daniel Ruiz',
		description: 'Founder @ Ruiz Atelier',
		url: 'https://www.ruizatelier.com',
	},
	{
		name: 'Lauren Dorman',
		description: 'Design Engineer @ Wander',
		url: 'https://www.laurendorman.io',
	},
	{
		name: 'Xavier Codie Robinson',
		description: 'Founder @ Soun Media',
		url: 'https://www.soun-media.com',
	},
	{
		name: 'DaRaun Crawford',
		description: 'Designer',
		url: 'https://instagram.com/daraun',
		label: '@daraun',
	},
].sort((a, b) => a.name!.localeCompare(b.name!));
