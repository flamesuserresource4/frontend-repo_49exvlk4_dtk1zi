import React from 'react';

const projects = [
  {
    title: 'Neon Optics Campaign',
    tag: 'Photography',
    image:
      'https://images.unsplash.com/photo-1544273677-c4331360210c?q=80&w=1600&auto=format&fit=crop',
    description:
      'Studio series exploring reflective surfaces and controlled light for a forward-tech aesthetic.',
  },
  {
    title: 'Adaptive Interface Prototype',
    tag: 'Creative Tech',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    description:
      'An interactive concept using motion and micro-interactions to enhance clarity and flow.',
  },
  {
    title: 'Architectural Geometry',
    tag: 'Photography',
    image:
      'https://images.unsplash.com/photo-1523371153586-b3b8c6e3aa4a?q=80&w=1600&auto=format&fit=crop',
    description:
      'Minimal structural studies shot in deep navy tones with crisp highlights and symmetry breaks.',
  },
  {
    title: 'Generative Light Fields',
    tag: 'Creative Code',
    image:
      'https://images.unsplash.com/photo-1534515724985-b07b3e1ae072?q=80&w=1600&auto=format&fit=crop',
    description:
      'Realtime shaders explore light diffusion and biomorphic motion for gallery installation.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <header className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Selected Projects</h2>
          <p className="mt-2 text-sm text-white/70">
            An asymmetrical grid of recent work across photography and interactive design.
          </p>
        </div>
        <div className="hidden gap-2 md:flex">
          <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs text-cyan-200">Minimalist & Clean</span>
          <span className="rounded-full bg-blue-400/10 px-3 py-1 text-xs text-blue-200">Deep Navy + Electric Blue</span>
        </div>
      </header>

      {/* Asymmetrical grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {projects.map((p, idx) => (
          <article
            key={p.title}
            className={
              'group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur ' +
              (idx % 4 === 0
                ? 'md:col-span-7 md:row-span-2 min-h-[360px]'
                : idx % 4 === 1
                ? 'md:col-span-5 min-h-[260px]'
                : idx % 4 === 2
                ? 'md:col-span-6 min-h-[280px]'
                : 'md:col-span-6 min-h-[280px]')
            }
          >
            <img
              src={p.image}
              alt={p.title}
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(6,10,22)]/90 via-[rgb(6,10,22)]/20 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end p-5">
              <div className="mb-2 inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs text-cyan-200 backdrop-blur">
                {p.tag}
              </div>
              <h3 className="text-xl font-medium text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
