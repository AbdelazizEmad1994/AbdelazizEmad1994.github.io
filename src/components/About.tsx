import React from 'react';
import { Quote, Layers, Cpu, Landmark, Stethoscope, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E8C7C] bg-[#1E8C7C]/10 px-3 py-1 rounded-full border border-[#1E8C7C]/20 inline-block">
            Positioning &amp; Context
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#12233F] tracking-tight font-display mt-2">
            Bridging Domain Complexity with Technical Precision
          </h2>
          <div className="h-1 w-12 bg-[#1E8C7C] rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg font-normal">
            {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="bg-[#FAFAFA] p-5 rounded-2xl border border-slate-200/80 text-slate-800">
                {paragraph}
              </p>
            ))}

            {/* Factual Highlights List */}
            <div className="pt-2">
              <h4 className="text-sm font-bold text-[#12233F] mb-3 uppercase tracking-wider font-display">
                What distinguishes my PO / BA execution:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] shrink-0 mt-0.5" />
                  <span><strong>Clinical Workflows:</strong> Direct PO experience mapping telemedicine and healthcare operations.</span>
                </li>
                <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] shrink-0 mt-0.5" />
                  <span><strong>Technical Literacy:</strong> Full-stack .NET and React training allows direct developer alignment.</span>
                </li>
                <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] shrink-0 mt-0.5" />
                  <span><strong>Banking Domain Depth:</strong> 3+ years managing SME commercial portfolios &amp; MIS reporting.</span>
                </li>
                <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] shrink-0 mt-0.5" />
                  <span><strong>ClickUp System Admin:</strong> Designed company-wide project workflows and task conventions.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Featured Pull-Quote & Domain Pillar Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Featured Pull Quote */}
            <div className="relative bg-[#12233F] text-white p-6 sm:p-8 rounded-3xl shadow-xl overflow-hidden border border-[#12233F]">
              <Quote className="w-10 h-10 text-[#1E8C7C] opacity-40 mb-3" />
              <blockquote className="text-lg sm:text-xl font-medium font-display leading-snug text-slate-100">
                {PERSONAL_INFO.pullQuote}
              </blockquote>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="font-bold text-white">— Abdelaziz Emad</span>
                <span className="text-[#1E8C7C] font-semibold">Product Owner @ Adam Health</span>
              </div>
            </div>

            {/* The 3 Pillars Card */}
            <div className="bg-[#FAFAFA] p-6 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-[#12233F] uppercase tracking-wider font-display">
                Cross-Domain Capability Triad
              </h3>

              <div className="space-y-3 text-xs">
                {/* Pillar 1 */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1E8C7C]/10 text-[#1E8C7C]">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#12233F] text-sm">Digital Health Ownership</h4>
                    <p className="text-slate-600">Regulated healthcare platforms, telemedicine, clinical backlog management.</p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#12233F] text-sm">Fintech &amp; Banking Rigor</h4>
                    <p className="text-slate-600">3.5 years at Banque du Caire &amp; CIB managing SME credit and MIS data.</p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#12233F] text-sm">Hands-on Software Literacy</h4>
                    <p className="text-slate-600">ITI .NET + DEPI Front-End training — translating APIs and schema into specs.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
