import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../works-data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <section>
      <Link
        href='/works'
        className='text-xs text-[#bbbbbb] hover:text-[#666666] transition-colors mb-8 inline-block link link-wrapper hover-1'
      >
        ← All Works
      </Link>
      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className='flex flex-wrap gap-2 mb-6'>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className='text-xs text-[#999999] border border-[#e0e0e0] rounded px-2 py-0.5'
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Title + description */}
      <h1 className='text-2xl font-medium tracking-tight text-[#111111] mb-2'>
        {project.title}
      </h1>
      <p className='text-[#666666] mb-6'>{project.description}</p>

      {/* Links */}
      {project.links && project.links.length > 0 && (
        <div className='flex flex-wrap gap-2 mb-10'>
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-[#111111] border border-[#e0e0e0] rounded px-3 py-1.5 hover:border-[#999999] transition-colors'
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Body */}
      <div className='flex flex-col md:flex-row gap-6'>
        {/* Main content */}
        <div className='flex-1 space-y-8 min-w-0'>
          {project.about && project.about.length > 0 && (
            <div className='border border-[#e0e0e0] rounded-lg p-6'>
              <h2 className='text-sm font-medium text-[#111111] mb-4'>About</h2>
              <div className='space-y-3'>
                {project.about.map((para, i) => (
                  <p key={i} className='text-sm text-[#444444] leading-relaxed'>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div className='border border-[#e0e0e0] rounded-lg p-6'>
              <h2 className='text-sm font-medium text-[#111111] mb-4'>
                What it does
              </h2>
              <ul className='space-y-2'>
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className='text-sm text-[#444444] leading-relaxed flex gap-2'
                  >
                    <span className='text-[#bbbbbb] shrink-0'>–</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Notes sidebar */}
        {project.notes && project.notes.length > 0 && (
          <div className='md:w-56 shrink-0'>
            <div className='border border-[#e0e0e0] rounded-lg p-6'>
              <h2 className='text-sm font-medium text-[#111111] mb-4'>Notes</h2>
              <div className='space-y-3'>
                {project.notes.map((note) => (
                  <div key={note.label} className='flex flex-col gap-0.5'>
                    <span className='text-xs text-[#999999]'>{note.label}</span>
                    {note.href ? (
                      <a
                        href={note.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-sm text-[#111111] underline decoration-[#dddddd] underline-offset-2 hover:decoration-[#999999] transition-colors'
                      >
                        {note.value}
                      </a>
                    ) : (
                      <span className='text-sm text-[#111111]'>
                        {note.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
