export interface Product {
  name: string;
  category: string;
  description?: string;
  styles?: string;
}

export const Products: Product[] = [
  {
    name: 'MacBook Pro 14"',
    category: 'workspace',
    description: '2023, Apple M3 Chip, 8GB RAM, 1TB Storage',
  },
  {
    name: 'MacBook Pro 16"',
    category: 'workspace',
    description: '2023, Apple M2 Max Chip, 64GB RAM, 1TB Storage',
  },
  {
    name: 'PC',
    category: 'workspace',
    description:
      'NVIDIA RTX 3070 TI Founders Edition, 64GB RAM, AMD Ryzen 5 5600X, Windows 11 Pro, Fractal Terra Case',
  },
  {
    name: 'Keychron K6 Pro',
    category: 'workspace',
    description: '65% Mechanical Keyboard, Brown Switches',
  },
  {
    name: 'Logitech MX Master 3',
    category: 'workspace',
  },
  {
    name: 'Sony WH-1000XM4',
    category: 'workspace',
  },
  {
    name: 'Apple AirPods Pro 3',
    category: 'workspace',
  },
  {
    name: 'iPhone 16 Pro Max',
    category: 'workspace',
    description: '256GB, Natural Titanium',
  },
  {
    name: 'PlayStation 5',
    category: 'gaming',
  },
  {
    name: 'Nintendo Switch',
    category: 'gaming',
  },
  {
    name: 'Fujifilm GS645S Professional Wide 60',
    category: 'photography',
    description: '6x4.5 Medium Format, 60mm f/4 Lens',
  },
  {
    name: 'Yashica T4',
    category: 'photography',
    description: '35mm Point & Shoot, Carl Zeiss Tessar 35mm f/3.5 Lens',
  },
  {
    name: 'Fujifilm X100VI',
    category: 'photography',
  },
  {
    name: 'Visual Studio Code',
    category: 'software',
  },
  {
    name: 'Cursor',
    category: 'software',
  },
  {
    name: 'Claude',
    category: 'software',
  },
  {
    name: 'Raycast',
    category: 'software',
  },
  {
    name: 'Rectangle',
    category: 'software',
  },
  {
    name: 'ohmyzsh',
    category: 'software',
  },
];
