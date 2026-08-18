import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { HowIWork } from './components/HowIWork';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0B1329] text-[#12233F] dark:text-slate-100 flex flex-col font-sans selection:bg-[#1E8C7C]/20 selection:text-[#1E8C7C] transition-colors duration-200">
        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Header Navigation with Dynamic Dark/Light Mode */}
        <Header onOpenCV={() => setIsCVModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="grow relative z-10">
          {/* Hero Section */}
          <Hero onOpenCV={() => setIsCVModalOpen(true)} />

          {/* About & Positioning */}
          <About />

          {/* Work Experience Vertical Timeline */}
          <Experience />

          {/* How I Work / Day-to-Day Process & BPMN Workflow */}
          <HowIWork />

          {/* Skills & Tools Matrix */}
          <Skills />

          {/* Academic Education & Languages */}
          <Education />

          {/* Contact Block & Form */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* CV Modal Overlay */}
        <CVModal
          isOpen={isCVModalOpen}
          onClose={() => setIsCVModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
