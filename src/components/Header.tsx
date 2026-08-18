import React, { useState, useEffect } from 'react';
import { Mail, FileText, Menu, X, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, RECRUITER_QUICK_FACTS } from '../data/portfolioData';

interface HeaderProps {
  onOpenCV: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showQuickFacts, setShowQuickFacts] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'How I Work', href: '#how-i-work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#12233F]/95 backdrop-blur-md text-white py-3 shadow-lg border-b border-white/10'
            : 'bg-transparent text-[#12233F] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1E8C7C] rounded-lg p-1"
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm tracking-tight transition-transform group-hover:scale-105 ${
                isScrolled
                  ? 'bg-[#1E8C7C] text-white shadow-md'
                  : 'bg-[#12233F] text-white'
              }`}
            >
              AE
            </div>
            <div>
              <span className={`font-bold tracking-tight text-base block font-display ${isScrolled ? 'text-white' : 'text-[#12233F]'}`}>
                Abdelaziz Emad
              </span>
              <span className={`text-xs block font-medium ${isScrolled ? 'text-slate-300' : 'text-slate-600'}`}>
                Product Owner &amp; BA
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 hover:text-[#1E8C7C] ${
                  isScrolled ? 'text-slate-200 hover:text-white' : 'text-slate-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setShowQuickFacts(!showQuickFacts)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                showQuickFacts
                  ? 'bg-[#1E8C7C] text-white border-[#1E8C7C]'
                  : isScrolled
                  ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  : 'bg-white text-[#12233F] border-slate-300 hover:bg-slate-50 shadow-xs'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>10s Recruiter Facts</span>
            </button>

            <button
              onClick={onOpenCV}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                isScrolled
                  ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  : 'bg-white text-[#12233F] border-slate-300 hover:border-[#12233F]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#1E8C7C] text-white hover:bg-[#166d61] shadow-xs transition-all hover:scale-[1.02]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setShowQuickFacts(!showQuickFacts)}
              className={`p-2 rounded-lg border text-xs font-semibold ${
                isScrolled ? 'bg-white/10 text-white border-white/20' : 'bg-white text-[#12233F] border-slate-300'
              }`}
              title="Recruiter Quick Facts"
            >
              <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-white hover:bg-white/10' : 'text-[#12233F] hover:bg-slate-200'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Quick Recruiter Facts Popover Dropdown */}
        {showQuickFacts && (
          <div className="border-t border-slate-200/20 bg-[#12233F] text-white shadow-2xl animate-in fade-in slide-in-from-top duration-200">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Recruiter 10-Second Executive Summary
                  </span>
                </div>
                <button
                  onClick={() => setShowQuickFacts(false)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Close ×
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
                {RECRUITER_QUICK_FACTS.map((fact, idx) => (
                  <div key={idx} className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                    <span className="text-[11px] text-slate-400 block mb-0.5">{fact.label}</span>
                    <span className="font-semibold text-white block leading-tight">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#12233F] text-white border-t border-white/10 px-4 py-5 space-y-4 shadow-xl">
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-white/10 text-white border border-white/20"
              >
                <FileText className="w-4 h-4" />
                <span>View CV Document</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#1E8C7C] text-white shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
