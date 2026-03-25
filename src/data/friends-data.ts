export type Friend = {
  name: string;
  description: string;
  url: string;
};

export const friends: Partial<Friend>[] = [
  {
    name: 'Brandon Clay',
    description: 'Designer, producer, bot',
    url: 'https://builtbyclay.com',
  },
  {
    name: 'Roman Denson',
    description: 'Product designer, runner, barista',
    url: 'https://roe.fyi',
  },
  {
    name: 'Roman Denson',
    description: 'Product designer, runner, barista',
    url: 'https://roe.fyi',
  },
  {
    name: 'Trevon Wiggs',
    description: 'Software engineer, founder, runner',
    url: 'https://instagram.com/trwggs',
  },
  {
    name: 'Pari Gabriel',
    description: 'Product designer, founder, dog dad',
    url: 'https://yeahivegottime.net',
  },
].sort((a, b) => a.name!.localeCompare(b.name!));
