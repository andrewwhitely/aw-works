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
  planned?: string[];
  notes?: { label: string; value: string; href?: string }[];
  capabilities?: string[] | { [key: string]: string[] }[];
  services?: string[];
}

export const projects: Project[] = [
  {
    slug: 'lunchbox-studio',
    title: 'Lunchbox Studio',
    category: 'web',
    year: 2025,
    description: 'A techology-first, creative design and development studio.',
    tags: ['Studio', 'Design', 'Development'],
    links: [{ label: 'Visit →', href: 'https://lunchbox.studio' }],
    about: [
      'Lunchbox Studio is an independent design and development studio I founded to take on creative endeavors — building beautiful and engaging digital experiences for the people.',
    ],
    capabilities: [
      {
        Branding: [
          'Identity',
          'Design Systems',
          'Photography',
          'Voice & Tone',
          'Typography',
        ],
      },
      {
        Digital: [
          'Responsive Website Design',
          'User Experience',
          'User Interface Design',
          'Digital Experiences',
          'Architecture',
        ],
      },
      {
        Technology: [
          'Web Design & Development',
          'iOS Development',
          'eCommerce',
          'Consulting',
          'Strategy',
          'Architecture Design',
          'API Design, Development & Integration',
          'AI Strategy, Design, & Implementation',
        ],
      },
      {
        Product: [
          'Research',
          'Design',
          'Strategy',
          'Development',
          'Copywriting',
          'SEO',
          'User Testing',
        ],
      },
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
    year: 2026,
    description:
      'A catalog and management dashboard for your tools and home improvement projects. Built by a builder, for builders.',
    tags: ['Design', 'Development', 'Product', 'Website'],
    links: [{ label: 'Visit →', href: 'https://toolshed.fyi' }],
    about: [
      'ToolShed is a personal project born out of my love for building and home improvement. It’s a web app designed to help DIY enthusiasts catalog their tools, manage projects, and keep track of maintenance schedules.',
      "The idea came to me as a new first-time homeowner. As it goes, the list of projects in my todo list started growing longer and longer, and I was quickly getting frustrated with the constant having to double and triple check everything I had, or having to make a mid-work trip to Lowe's to buy something.",
      'ToolShed is built to be simple, intuitive, and focused on the needs of everyone from the weekend DIY warrior like myself to your average handyman or professional contractor.',
    ],
    features: [
      'Authentication and user accounts to keep your tool catalog and projects private and secure, and accessible across devices',
      'Catalog your tools with photos, descriptions, and maintenance notes',
      'Create a working backlog of projects with notes, tools required, cost, and estimated time to complete',
      'Ability to create write-ups to capture project details, progress, and lessons learned',
      'Branded themes so you can customize the look of the application to match your favorite brands',
    ],
    planned: [
      'iOS Application with offline support and native features like camera integration for tool cataloging',
      'A location-based neighborhood "marketplace" for seeing what is available in your area for borrowing, or listing tools you have available for others to borrow',
      'For working professionals, a shareable portfolio to showcase your work and share with potential clients',
    ],
    notes: [
      { label: 'Type', value: 'Website' },
      { label: 'Role', value: 'Design + Development' },
      { label: 'Year', value: '2026' },
      {
        label: 'Status',
        value: 'In Working Development',
        href: 'https://toolshed.fyi',
      },
    ],
  },
];

export const categories: { key: CategoryKey; label: string }[] = [
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'other', label: 'Other' },
];
