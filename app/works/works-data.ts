export type CategoryKey = string;

export interface Project {
  slug: string;
  title: string;
  category: CategoryKey | CategoryKey[];
  year: number;
  description: string;
  tags?: string[];
  links?: { label: string; href: string }[];
  about?: string[];
  features?: string[];
  notes?: { label: string; value: string; href?: string }[];
}

export const projects: Project[] = [
  {
    slug: 'surely-work',
    title: 'Surely + Work',
    category: 'web',
    year: 2024,
    description:
      'Freelance and gig-economy job board connecting creatives to the industry.',
    tags: ['Job board', 'Freelance', 'Creatives'],
    links: [{ label: 'Visit site', href: 'https://surelywork.com' }],
    about: [
      'Surely + Work is a job board built for creative professionals — designers, developers, photographers, and more — to find freelance and contract opportunities without the noise of traditional platforms.',
      'As Lead Software Engineer, I architected and built the platform from the ground up, with a focus on a clean, fast experience for both employers and candidates.',
    ],
    features: [
      'Browse and filter freelance and contract jobs by discipline',
      'Employer dashboard for posting and managing listings',
      'Candidate profiles and application tracking',
      'Email notifications for new matching opportunities',
      'Mobile-optimized for browsing on the go',
    ],
    notes: [
      { label: 'Type', value: 'Web app' },
      { label: 'Role', value: 'Lead Software Engineer' },
      { label: 'Stack', value: 'React, Next.js, TypeScript' },
      { label: 'Year', value: '2024' },
      { label: 'Status', value: 'Live', href: 'https://surelywork.com' },
    ],
  },
  {
    slug: 'lunchbox-studio',
    title: 'Lunchbox Studio',
    category: 'web',
    year: 2025,
    description: 'Technology-focused design and development studio.',
    tags: ['Studio', 'Design', 'Development'],
    links: [{ label: 'Visit site', href: 'https://lunchbox.studio' }],
    about: [
      'Lunchbox Studio is a small, independent design and development studio I founded to take on focused client work — building thoughtful digital products for teams that care about quality.',
      'The studio focuses on front-end development, product design, and web experiences. Every project is approached with the same care: clean code, strong visual design, and a focus on the end user.',
    ],
    features: [
      'Front-end development for web and mobile',
      'Product design and UI/UX',
      'Design systems and component libraries',
      'Performance optimization and accessibility',
    ],
    notes: [
      { label: 'Type', value: 'Studio' },
      { label: 'Role', value: 'Founder' },
      { label: 'Year', value: '2025' },
      { label: 'Status', value: 'Active', href: 'https://lunchbox.studio' },
    ],
  },
  {
    slug: 'toolshed',
    title: 'ToolShed',
    category: ['web', 'mobile'],
    year: 2025,
    description: 'Technology-focused design and development studio.',
    tags: ['Studio', 'Design', 'Development'],
    links: [{ label: 'Visit site', href: 'https://lunchbox.studio' }],
    about: [
      'Lunchbox Studio is a small, independent design and development studio I founded to take on focused client work — building thoughtful digital products for teams that care about quality.',
      'The studio focuses on front-end development, product design, and web experiences. Every project is approached with the same care: clean code, strong visual design, and a focus on the end user.',
    ],
    features: [
      'Front-end development for web and mobile',
      'Product design and UI/UX',
      'Design systems and component libraries',
      'Performance optimization and accessibility',
    ],
    notes: [
      { label: 'Type', value: 'Studio' },
      { label: 'Role', value: 'Founder' },
      { label: 'Year', value: '2025' },
      { label: 'Status', value: 'Active', href: 'https://lunchbox.studio' },
    ],
  },
];

export const categories: { key: CategoryKey; label: string }[] = [
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'other', label: 'Other' },
];
