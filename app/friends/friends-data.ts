export type Friend = {
  name: string;
  description: string;
  url: string;
};

export const friends: Partial<Friend>[] = [
  {
    name: 'Roman Denson',
    description: 'Product designer, runner, barista',
    url: 'https://roe.fyi',
  },
  {
    name: 'Trevon Wiggs',
    description: 'Founder, engineer, runner',
    url: 'https://instagram.com/trwggs',
  },
  {
    name: 'Pari Gabriel',
    description: 'Product designer, founder, dog dad',
    url: 'https://yeahivegottime.net',
  },
].sort((a, b) => a.name.localeCompare(b.name));
