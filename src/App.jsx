import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen w-full bg-[rgb(6,10,22)] text-white antialiased">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[rgba(6,10,22,0.6)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold tracking-tight">
            Your Name
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <About />
      </main>

      <ContactFooter />
    </div>
  );
}

export default App;
