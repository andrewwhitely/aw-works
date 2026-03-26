export type Friend = {
	name: string;
	description: string;
	url: string;
};

export const friends: Partial<Friend>[] = [
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
		name: 'Trevon Wiggs',
		description: 'Software Engineer @ Snap',
		url: 'https://instagram.com/trwggs',
	},
	{
		name: 'Pari Gabriel',
		description: 'Product Designer @ Bland',
		url: 'https://yeahivegottime.net',
	},
].sort((a, b) => a.name!.localeCompare(b.name!));
