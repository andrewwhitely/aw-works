import { FadeIn } from '@/components/FadeIn';
import { metaData } from '@/config';
import { projects } from '@/data/works-data';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to='/404' replace />;

  return (
    <section className='mb-4'>
      <Helmet>
        <title>
          {project.title} | {metaData.name}
        </title>
        <meta name='description' content={project.description} />
      </Helmet>
      <Link
        to='/works'
        className='text-xs text-[#bbbbbb] hover:text-[#666666] transition-colors mb-4 inline-block link hover-1'
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
      <div className='flex flex-wrap items-center gap-3 mb-5'>
        <h1 className='text-2xl font-medium tracking-tight text-[#111111]'>
          {project.title}
        </h1>
        {project.links && project.links.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {project.links.map((link) => (
              <Link
                to={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-[#111111] hover:text-[#666666] transition-colors inline-block title-link hover-1 pb-0'
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      <p className='text-[#666666] mb-6'>{project.description}</p>

      {/* Body */}
      <div className='flex flex-col md:flex-row gap-6'>
        {/* Main content */}
        <div className='flex-1 space-y-8 min-w-0'>
          {project.about && project.about.length > 0 && (
            <FadeIn>
              <div>
                <h2 className='text-sm font-medium text-[#111111] mb-4'>
                  About
                </h2>
                <div className='space-y-3'>
                  {project.about.map((para, i) => (
                    <p
                      key={i}
                      className='text-sm text-[#444444] leading-relaxed'
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <FadeIn delay={0.05}>
              <div>
                <h2 className='text-sm font-medium text-[#111111] mb-4'>
                  Features
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
            </FadeIn>
          )}

          {/* Capabilities */}
          {project.capabilities && project.capabilities.length > 0 && (
            <FadeIn delay={0.05}>
              <div>
                <h2 className='text-sm font-medium text-[#111111] mb-4'>
                  Capabilities & Services
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                  {(project.capabilities as { [key: string]: string[] }[]).map(
                    (cap, i) => {
                      const [heading, items] = Object.entries(cap)[0];
                      return (
                        <div key={i}>
                          <p className='text-sm font-bold text-[#111111] mb-2'>
                            {heading}
                          </p>
                          <ul className='space-y-1'>
                            {items.map((item, j) => (
                              <li key={j} className='text-sm text-[#666666]'>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Services */}
          {project.services && project.services.length > 0 && (
            <FadeIn delay={0.05}>
              <div>
                <h2 className='text-sm font-medium text-[#111111] mb-4'>
                  Services
                </h2>
                <ul className='space-y-2'>
                  {project.services.map((feature, i) => (
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
            </FadeIn>
          )}

          {/* Todo */}
          {project.planned && project.planned.length > 0 && (
            <FadeIn delay={0.05}>
              <div>
                <h2 className='text-sm font-medium text-[#111111] mb-4'>
                  Planned Features
                </h2>
                <ul className='space-y-2'>
                  {project.planned.map((feature, i) => (
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
            </FadeIn>
          )}
        </div>

        {/* Notes sidebar */}
        {project.notes && project.notes.length > 0 && (
          <FadeIn delay={0.1} className='md:w-56 shrink-0'>
            <div>
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
          </FadeIn>
        )}
      </div>
    </section>
  );
}
