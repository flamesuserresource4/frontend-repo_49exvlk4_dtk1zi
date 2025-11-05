import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Camera } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[rgb(6,10,22)] text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient and noise overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(6,10,22,0.6)] via-[rgba(6,10,22,0.3)] to-[rgba(6,10,22,0.85)]"></div>
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage:
          'radial-gradient(1200px 600px at 20% 10%, rgba(56,189,248,0.25), rgba(0,0,0,0)), radial-gradient(900px 400px at 80% 30%, rgba(59,130,246,0.18), rgba(0,0,0,0))',
      }} />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-28 md:py-36">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Camera className="h-4 w-4 text-cyan-300" />
          <span className="text-xs tracking-wider text-cyan-200">Creative Technologist & Photographer</span>
        </div>

        <h1 className="max-w-3xl font-['Geist',Inter,system-ui] text-4xl leading-tight md:text-6xl">
          Minimal, modern visuals for brands at the edge of technology
        </h1>

        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          I craft immersive interactive experiences and refined photography that feel sophisticated and inviting. Explore selected projects below.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-900 transition hover:bg-cyan-300"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:border-white/40 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
