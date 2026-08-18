import React from 'react';
import { ArrowUp, Mail, Linkedin, Github, HeartPulse } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12233F] text-white border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/10 pb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#1E8C7C] text-white font-bold flex items-center justify-center text-sm">
                AE
              </div>
              <span className="font-bold text-lg font-display text-white">
                Abdelaziz Emad
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-md">
              Product Owner &amp; Business Analyst specializing in Digital Health, Fintech, and Enterprise Delivery. Based in Tanta, Egypt — open to relocation.
            </p>
          </div>

          {/* Direct Social Links */}
          <div className="md:col-span-4 flex items-center gap-4 text-xs">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2 text-slate-200"
            >
              <Mail className="w-4 h-4 text-[#1E8C7C]" />
              <span className="hidden sm:inline">Email</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2 text-slate-200"
            >
              <Linkedin className="w-4 h-4 text-[#1E8C7C]" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2 text-slate-200"
            >
              <Github className="w-4 h-4 text-[#1E8C7C]" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} Abdelaziz Emad. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Product Owner · Business Analyst</span>
            <span className="text-slate-600">•</span>
            <span className="text-teal-400 font-semibold">Tanta, Egypt</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
