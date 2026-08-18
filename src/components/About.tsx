import React from 'react';
import { motion } from 'motion/react';
import { Quote, Layers, Cpu, Landmark, Stethoscope, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkPreview } from './LinkPreview';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0B1329] border-b border-slate-200 dark:border-slate-800 overflow-visible transition-colors duration-200">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E8C7C] dark:text-teal-400 bg-[#1E8C7C]/10 dark:bg-teal-400/10 px-3 py-1 rounded-full border border-[#1E8C7C]/20 dark:border-teal-400/20 inline-block">
            Positioning &amp; Context
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#12233F] dark:text-white tracking-tight font-display mt-2">
            Bridging Domain Complexity with Technical Precision
          </h2>
          <div className="h-1 w-12 bg-[#1E8C7C] rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed text-base sm:text-lg font-normal">
            <div className="bg-[#FAFAFA] dark:bg-[#132244] p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200">
              Product Owner &amp; Business Analyst with a cross-industry background in digital health, fintech, and enterprise platforms. Experienced in leading product discovery, backlog management, and cross-functional delivery within Agile environments at{' '}
              <LinkPreview orgKey="adam-health" className="font-bold text-[#12233F] dark:text-teal-300">
                Adam Health
              </LinkPreview>{' '}
              and{' '}
              <LinkPreview orgKey="sbs" className="font-bold text-[#12233F] dark:text-teal-300">
                Specialized Business Solutions (SBS)
              </LinkPreview>.
            </div>

            <div className="bg-[#FAFAFA] dark:bg-[#132244] p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200">
              Proven ability to bridge business objectives with technical execution — translating complex operational workflows into structured, actionable product requirements, user stories, and acceptance criteria that drive measurable delivery outcomes.
            </div>

            <div className="bg-[#FAFAFA] dark:bg-[#132244] p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200">
              Holds hands-on full-stack development training from the{' '}
              <LinkPreview orgKey="iti" className="font-bold text-purple-800 dark:text-purple-300">
                Information Technology Institute (ITI)
              </LinkPreview>{' '}
              for .NET and the{' '}
              <LinkPreview orgKey="depi" className="font-bold text-amber-800 dark:text-amber-300">
                Digital Egypt Pioneers Initiative (DEPI)
              </LinkPreview>{' '}
              for front-end engineering, along with a B.Sc. in Business Information Systems from{' '}
              <LinkPreview orgKey="tanta-commerce" className="font-bold text-[#12233F] dark:text-teal-300">
                Faculty of Commerce, Tanta University
              </LinkPreview>{' '}
              (GPA 3.73/4, Excellent degree).
            </div>

            {/* Factual Highlights List */}
            <div className="pt-2">
              <h4 className="text-sm font-bold text-[#12233F] dark:text-white mb-3 uppercase tracking-wider font-display">
                What distinguishes my PO / BA execution:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2.5 bg-white dark:bg-[#132244] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80">
                  <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] dark:text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Clinical Workflows:</strong> Direct PO experience mapping telemedicine and healthcare operations.</span>
                </li>
                <li className="flex items-start gap-2.5 bg-white dark:bg-[#132244] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80">
                  <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] dark:text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Technical Literacy:</strong> Full-stack .NET and React training allows direct developer alignment.</span>
                </li>
                <li className="flex items-start gap-2.5 bg-white dark:bg-[#132244] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80">
                  <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] dark:text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Banking Domain Depth:</strong> 3+ years managing SME commercial portfolios &amp; MIS reporting.</span>
                </li>
                <li className="flex items-start gap-2.5 bg-white dark:bg-[#132244] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80">
                  <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] dark:text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>ClickUp System Admin:</strong> Designed company-wide project workflows and task conventions.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Featured Pull-Quote & Domain Pillar Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Featured Pull Quote */}
            <div className="relative bg-[#12233F] dark:bg-[#070E20] text-white p-6 sm:p-8 rounded-3xl shadow-xl overflow-hidden border border-[#12233F] dark:border-slate-800">
              <Quote className="w-10 h-10 text-[#1E8C7C] dark:text-teal-400 opacity-40 mb-3" />
              <blockquote className="text-lg sm:text-xl font-medium font-display leading-snug text-slate-100">
                {PERSONAL_INFO.pullQuote}
              </blockquote>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="font-bold text-white">— Abdelaziz Emad</span>
                <span className="text-[#1E8C7C] dark:text-teal-400 font-semibold flex items-center gap-1">
                  Product Owner @{' '}
                  <LinkPreview orgKey="adam-health" showIcon={false} className="text-[#1E8C7C] dark:text-teal-300 hover:underline font-bold">
                    Adam Health
                  </LinkPreview>
                </span>
              </div>
            </div>

            {/* The 3 Pillars Card */}
            <div className="bg-[#FAFAFA] dark:bg-[#132244] p-6 rounded-3xl border border-slate-200 dark:border-slate-700/80 space-y-4">
              <h3 className="text-sm font-bold text-[#12233F] dark:text-white uppercase tracking-wider font-display">
                Cross-Domain Capability Triad
              </h3>

              <div className="space-y-3 text-xs">
                {/* Pillar 1 */}
                <div className="bg-white dark:bg-[#0F1A34] p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1E8C7C]/10 dark:bg-teal-400/10 text-[#1E8C7C] dark:text-teal-400">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#12233F] dark:text-white text-sm">Digital Health Ownership</h4>
                    <div className="text-slate-600 dark:text-slate-300">
                      Regulated healthcare platforms, telemedicine, clinical backlog management at{' '}
                      <LinkPreview orgKey="adam-health" showIcon={false} className="font-semibold text-[#12233F] dark:text-teal-300 underline">
                        Adam Health
                      </LinkPreview>.
                    </div>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="bg-white dark:bg-[#0F1A34] p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-blue-400/10 text-blue-700 dark:text-blue-400">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#12233F] dark:text-white text-sm">Fintech &amp; Banking Rigor</h4>
                    <div className="text-slate-600 dark:text-slate-300">
                      3.5 years at{' '}
                      <LinkPreview orgKey="bdc" showIcon={false} className="font-semibold text-slate-900 dark:text-slate-100 underline">
                        Banque du Caire
                      </LinkPreview>{' '}
                      &amp;{' '}
                      <LinkPreview orgKey="cib" showIcon={false} className="font-semibold text-slate-900 dark:text-slate-100 underline">
                        CIB
                      </LinkPreview>{' '}
                      managing SME credit and MIS data.
                    </div>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="bg-white dark:bg-[#0F1A34] p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#12233F] dark:text-white text-sm">Hands-on Software Literacy</h4>
                    <div className="text-slate-600 dark:text-slate-300">
                      <LinkPreview orgKey="iti" showIcon={false} className="font-semibold text-purple-800 dark:text-purple-300 underline">
                        ITI .NET
                      </LinkPreview>{' '}
                      +{' '}
                      <LinkPreview orgKey="depi" showIcon={false} className="font-semibold text-amber-800 dark:text-amber-300 underline">
                        DEPI Front-End
                      </LinkPreview>{' '}
                      training — translating APIs and schema into specs.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </motion.div>
    </section>
  );
};
