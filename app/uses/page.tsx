import type { Metadata } from 'next';
import { Products } from './uses-data';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'Gear, software, and tools I use regularly.',
};

const categories = [
  { key: 'workspace', label: 'Workspace' },
  { key: 'photography', label: 'Photography' },
  { key: 'software', label: 'Software' },
  { key: 'gaming', label: 'Gaming' },
];

export default function Uses() {
  return (
    <section>
      <h1 className='mb-8 text-sm font-medium tracking-widest uppercase text-[#666666]'>
        Uses
      </h1>

      <div className='space-y-8'>
        {categories.map(({ key, label }) => {
          const items = Products.filter((p) => p.category === key);
          if (items.length === 0) return null;
          return (
            <div key={key}>
              <p className='text-xs font-medium tracking-widest uppercase text-[#bbbbbb] mb-3'>
                {label}
              </p>
              <ul>
                {items.map((product, index) => (
                  <li key={index} className='flex items-baseline gap-2 py-1'>
                    <span className='text-sm text-[#111111] shrink-0'>
                      {product.name}
                    </span>
                    {product.description && (
                      <>
                        <span className='flex-1 border-b border-dotted border-[#dddddd] mb-[3px]' />
                        <span className='text-xs text-[#999999] shrink-0'>
                          {product.description}
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
