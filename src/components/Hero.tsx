import React, { useState } from 'react';
import { Mail, FileText, MapPin, ArrowRight, CheckCircle2, ShieldCheck, Code2, HeartPulse, Building2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200/80 bg-linear-to-b from-white via-[#FAFAFA] to-[#F1F5F9]">
      {/* Background Subtle Geometry Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status & Location Pill */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#12233F] text-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#1E8C7C] animate-pulse" />
                Available for PO / BA Roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#1E8C7C]" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#12233F] tracking-tight font-display leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <div className="h-1 w-12 bg-[#1E8C7C] rounded-full" />
              
              {/* Role Subline */}
              <p className="text-base sm:text-lg font-bold text-[#1E8C7C] font-display uppercase tracking-[0.1em] pt-1">
                {PERSONAL_INFO.roleSubline}
              </p>
            </div>

            {/* One-Sentence Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal border-l-2 border-[#1E8C7C] pl-4 py-1 bg-white/60 rounded-r-lg">
              {PERSONAL_INFO.positioningStatement}
            </p>

            {/* Key Value Differentiator Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-start gap-2.5">
                <HeartPulse className="w-5 h-5 text-[#1E8C7C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#12233F]">Digital Health PO</h4>
                  <p className="text-[11px] text-slate-500">Clinical workflows &amp; ClickUp system admin</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-start gap-2.5">
                <Building2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#12233F]">Banking Domain</h4>
                  <p className="text-[11px] text-slate-500">3+ yrs SME relationship &amp; MIS analysis</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-start gap-2.5">
                <Code2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#12233F]">Hands-on Tech</h4>
                  <p className="text-[11px] text-slate-500">ITI .NET &amp; DEPI Front-End trained</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#12233F] text-white font-semibold text-sm hover:bg-[#1E8C7C] transition-all shadow-md hover:shadow-lg group"
              >
                <Mail className="w-4 h-4 text-[#1E8C7C] group-hover:text-white transition-colors" />
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#12233F] border border-slate-300 font-semibold text-sm hover:border-[#12233F] hover:bg-slate-50 transition-all shadow-2xs"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>View CV</span>
              </button>
            </div>

          </div>

          {/* Right Column: Headshot & Profile Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Decorative Card Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-tr from-[#12233F] via-[#1E8C7C] to-slate-400 opacity-20 blur-lg" />

              <div className="relative bg-white p-4 rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                
                {/* Photo Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
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
                  <div className="absolute top-3 left-3 bg-[#12233F]/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20 shadow-md flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1E8C7C]" />
                    <span>Verified PO / BA Experience</span>
                  </div>
                </div>

                {/* Bottom Quick Credibility Card */}
                <div className="mt-3 bg-[#FAFAFA] p-3 rounded-xl border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#12233F]">Tanta University B.Sc.</span>
                    <span className="font-semibold text-[#1E8C7C] bg-[#1E8C7C]/10 px-2 py-0.5 rounded-md">GPA 3.73 / 4.0</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
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
