import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Filter, Building2, Stethoscope, Code2, Landmark } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { LinkPreview } from './LinkPreview';

export const Experience: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const domains = ['All', 'Digital Health', 'Enterprise Software Delivery', 'Technical Training', 'Banking & Financial Services'];

  const filteredExperiences = selectedDomain === 'All'
    ? EXPERIENCES
    : EXPERIENCES.filter((exp) => exp.domain === selectedDomain);

  return (
    <section id="experience" className="py-20 bg-[#FAFAFA] dark:bg-[#080E1E] border-b border-slate-200 dark:border-slate-800 overflow-visible transition-colors duration-200">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E8C7C] dark:text-teal-400 bg-[#1E8C7C]/10 dark:bg-teal-400/10 px-3 py-1 rounded-full border border-[#1E8C7C]/20 dark:border-teal-400/20 inline-block">
              Career History
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#12233F] dark:text-white tracking-tight font-display mt-1">
              Professional Experience
            </h2>
            <div className="h-1 w-12 bg-[#1E8C7C] rounded-full my-2" />
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 max-w-xl">
              Chronological track record spanning product ownership, software presales, technical development training, and commercial banking.
            </p>
          </div>

          {/* Domain Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-[#132244] p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-400 px-2 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Filter:
            </span>
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedDomain === domain
                    ? 'bg-[#12233F] dark:bg-[#1E8C7C] text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#12233F] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-300 dark:border-slate-700 space-y-10">
          
          {filteredExperiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Marker Circle */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-4 border-[#FAFAFA] dark:border-[#080E1E] flex items-center justify-center transition-transform group-hover:scale-110 ${
                  exp.isCurrent
                    ? 'bg-[#1E8C7C] ring-4 ring-[#1E8C7C]/20 dark:ring-teal-400/20'
                    : 'bg-[#12233F] dark:bg-slate-600'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-[#132244] p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-slate-300 dark:hover:border-slate-600 transition-all space-y-4">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-[#12233F] dark:text-white font-display">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="bg-[#1E8C7C] text-white text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-1 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                      {exp.orgKey || exp.companyUrl ? (
                        <LinkPreview
                          orgKey={exp.orgKey as any}
                          customUrl={exp.companyUrl}
                          customTitle={exp.company}
                          className="text-slate-800 dark:text-slate-100 hover:text-[#1E8C7C] dark:hover:text-teal-300 font-semibold text-sm sm:text-base"
                        >
                          {exp.company}
                        </LinkPreview>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      {exp.period}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border dark:bg-slate-900/60 ${exp.domainColor}`}>
                      {exp.domain}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] dark:text-teal-400 shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech & Tool Tags */}
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mr-1">
                      Context:
                    </span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </motion.div>
    </section>
  );
};
