import React, { useState } from 'react';
import { Mail, FileText, MapPin, ArrowRight, CheckCircle2, ShieldCheck, Code2, HeartPulse, Building2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkPreview } from './LinkPreview';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200/80 dark:border-slate-800 bg-linear-to-b from-white via-[#FAFAFA] to-[#F1F5F9] dark:from-[#0B1329] dark:via-[#0D1832] dark:to-[#0B1329]">
      {/* Background Subtle Geometry Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status & Location Pill */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#12233F] dark:bg-slate-800 text-white shadow-xs border border-white/10 dark:border-slate-700">
                <span className="w-2 h-2 rounded-full bg-[#1E8C7C] dark:bg-teal-400 animate-pulse" />
                Available for PO / BA Roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-[#1E8C7C] dark:text-teal-400" />
                <LinkPreview orgKey="tanta-city" showIcon={false} className="hover:text-[#1E8C7C] dark:hover:text-teal-300 font-medium">
                  {PERSONAL_INFO.location}
                </LinkPreview>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#12233F] dark:text-white tracking-tight font-display leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <div className="h-1 w-12 bg-[#1E8C7C] rounded-full" />
              
              {/* Role Subline */}
              <p className="text-base sm:text-lg font-bold text-[#1E8C7C] dark:text-teal-400 font-display uppercase tracking-[0.1em] pt-1">
                {PERSONAL_INFO.roleSubline}
              </p>
            </div>

            {/* One-Sentence Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl font-normal border-l-2 border-[#1E8C7C] dark:border-teal-400 pl-4 py-1 bg-white/60 dark:bg-slate-900/40 rounded-r-lg">
              {PERSONAL_INFO.positioningStatement}
            </p>

            {/* Key Value Differentiator Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white dark:bg-[#132244] p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex items-start gap-2.5">
                <HeartPulse className="w-5 h-5 text-[#1E8C7C] dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#12233F] dark:text-white">Digital Health PO</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Clinical workflows &amp; ClickUp system admin</p>
                </div>
              </div>

              <div className="bg-white dark:bg-[#132244] p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex items-start gap-2.5">
                <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#12233F] dark:text-white">Banking Domain</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">3+ yrs SME relationship &amp; MIS analysis</p>
                </div>
              </div>

              <div className="bg-white dark:bg-[#132244] p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex items-start gap-2.5">
                <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#12233F] dark:text-white">Hands-on Tech</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">ITI .NET &amp; DEPI Front-End trained</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#12233F] dark:bg-[#1E8C7C] text-white font-semibold text-sm hover:bg-[#1E8C7C] dark:hover:bg-[#167063] transition-all shadow-md hover:shadow-lg group"
              >
                <Mail className="w-4 h-4 text-[#1E8C7C] dark:text-white group-hover:text-white transition-colors" />
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-[#12233F] dark:text-white border border-slate-300 dark:border-slate-700 font-semibold text-sm hover:border-[#12233F] dark:hover:border-teal-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-2xs"
              >
                <FileText className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                <span>View CV</span>
              </button>
            </div>

          </div>

          {/* Right Column: Headshot & Profile Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Decorative Card Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-tr from-[#12233F] via-[#1E8C7C] to-slate-400 opacity-20 blur-lg" />

              <div className="relative bg-white dark:bg-[#0F1A34] p-4 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-xl overflow-hidden">
                
                {/* Photo Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  {!imageError ? (
                    <img
                      src={PERSONAL_INFO.headshotImg}
                      alt="Abdelaziz Emad — Product Owner & Business Analyst"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Fallback Typographic / Geometric Hero Badge */
                    <div className="w-full h-full bg-[#12233F] text-white flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-20 h-20 rounded-2xl bg-[#1E8C7C] flex items-center justify-center text-3xl font-bold font-display shadow-lg mb-4">
                        AE
                      </div>
                      <h3 className="text-xl font-bold font-display">Abdelaziz Emad</h3>
                      <p className="text-xs text-teal-300 mt-1 font-medium">Product Owner &amp; Business Analyst</p>
                      <div className="mt-4 pt-4 border-t border-white/10 w-full text-[11px] text-slate-300 space-y-1">
                        <p>✓ Digital Health (Adam Health)</p>
                        <p>✓ Banking Domain (Banque du Caire)</p>
                        <p>✓ Technical Training (.NET &amp; React)</p>
                      </div>
                    </div>
                  )}

                  {/* Top Domain Badge overlay */}
                  <div className="absolute top-3 left-3 bg-[#12233F]/90 dark:bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20 shadow-md flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1E8C7C] dark:text-teal-400" />
                    <span>Verified PO / BA Experience</span>
                  </div>
                </div>

                {/* Bottom Quick Credibility Card */}
                <div className="mt-3 bg-[#FAFAFA] dark:bg-[#132244] p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#12233F] dark:text-white">Tanta University B.Sc.</span>
                    <span className="font-semibold text-[#1E8C7C] dark:text-teal-300 bg-[#1E8C7C]/10 dark:bg-teal-400/10 px-2 py-0.5 rounded-md">GPA 3.73 / 4.0</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Business Information Systems • Excellent Degree
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
