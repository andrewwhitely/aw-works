export interface Role {
  title: string;
  start: number;
  end?: number | string;
  description: string;
  url: string;
  locked?: boolean;
  current?: boolean;
  role?: string;
  bullets?: string[];
}

export const Jobs: Role[] = [
  {
    title: 'Surely + Work',
    start: 2024,
    end: 2026,
    locked: false,
    current: true,
    description:
      'Freelance and gig-economy job board connecting creatives to the industry.',
    url: 'https://surelywork.com/',
    role: 'Lead Software Engineer',
  },
  {
    title: 'Booz Allen Hamilton',
    start: 2023,
    description:
      'Modernizing government technology with a focus on user-centered design and agile development.',
    url: 'https://boozallen.com/',
    locked: false,
    current: true,
    role: 'Senior Software Engineer',
  },
  {
    title: 'FirstFloor Studios',
    start: 2022,
    end: 2022,
    description:
      'Full-fledged mobile web3 marketplace, smart contract creation, and blockchain asset generation.',
    url: 'https://firstfloor.app/',
    locked: false,
    current: false,
    role: 'Senior Software Engineer',
  },
  {
    title: 'Capital One',
    start: 2018,
    end: 2022,
    description:
      'Shipped internal and consumer-facing applications, helping to change banking for good.',
    url: 'https://capitalone.com/',
    locked: false,
    current: false,
    role: 'Software Engineer',
  },
  {
    title: 'Lunchbox Studio',
    description: 'Technology-focused design and development studio.',
    url: 'https://lunchbox.studio',
    start: 2025,
    locked: false,
    current: false,
    role: 'Founder',
  },
];

export const Projects: Role[] = [];
