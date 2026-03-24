import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works',
  description: 'Selected projects and work.',
};

export default function Works() {
  return (
    <section>
      <h1 className='mb-8 text-sm font-medium tracking-widest uppercase text-[#666666]'>
        Selected Works
      </h1>
      <p className='text-sm text-[#999999]'>Coming soon.</p>
    </section>
  );
}
