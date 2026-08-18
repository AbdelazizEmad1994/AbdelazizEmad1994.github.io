import React, { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Filter, Building2, Stethoscope, Code2, Landmark } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const domains = ['All', 'Digital Health', 'Enterprise Software Delivery', 'Technical Training', 'Banking & Financial Services'];

  const filteredExperiences = selectedDomain === 'All'
    ? EXPERIENCES
    : EXPERIENCES.filter((exp) => exp.domain === selectedDomain);

  return (
    <section id="experience" className="py-20 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E8C7C] bg-[#1E8C7C]/10 px-3 py-1 rounded-full border border-[#1E8C7C]/20 inline-block">
              Career History
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#12233F] tracking-tight font-display mt-1">
              Professional Experience
            </h2>
            <div className="h-1 w-12 bg-[#1E8C7C] rounded-full my-2" />
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Chronological track record spanning product ownership, software presales, technical development training, and commercial banking.
            </p>
          </div>

          {/* Domain Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-xs font-bold text-slate-400 px-2 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Filter:
            </span>
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedDomain === domain
                    ? 'bg-[#12233F] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-[#12233F] hover:bg-slate-100'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-300 space-y-10">
          
          {filteredExperiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Marker Circle */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-4 border-[#FAFAFA] flex items-center justify-center transition-transform group-hover:scale-110 ${
                  exp.isCurrent
                    ? 'bg-[#1E8C7C] ring-4 ring-[#1E8C7C]/20'
                    : 'bg-[#12233F]'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Experience Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all space-y-4">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-[#12233F] font-display">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="bg-[#1E8C7C] text-white text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full">
                          Current Role
                        </span>
                      )}
                    </div>
                    <p className="text-base font-semibold text-slate-700 mt-0.5 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${exp.domainColor}`}>
                      {exp.domain}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech & Tool Tags */}
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                      Context:
                    </span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
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

      </div>
    </section>
  );
};
