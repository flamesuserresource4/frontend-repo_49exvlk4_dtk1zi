import React from 'react';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-[240px_1fr]">
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 p-1">
          <div className="h-full w-full rounded-full bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">About Me</h2>
          <p className="mt-3 text-white/80">
            I’m a Creative Technologist and Photographer blending clean, minimalist design with modern tooling. My work focuses on clarity, thoughtful motion, and a strong visual hierarchy that elevates brand stories.
          </p>
          <p className="mt-3 text-white/70">
            With a background spanning UI engineering and studio lighting, I move fluidly between code and camera—building interactive prototypes, designing systems, and capturing striking imagery in deep navy palettes with electric blue accents.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
