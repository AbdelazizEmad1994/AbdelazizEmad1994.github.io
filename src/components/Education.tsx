import React from 'react';
import { GraduationCap, Award, Globe2, BookOpen, CheckCircle2, ExternalLink } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E8C7C] bg-[#1E8C7C]/10 px-3 py-1 rounded-full border border-[#1E8C7C]/20 inline-block">
            Academic &amp; Training Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#12233F] tracking-tight font-display mt-1">
            Education &amp; Professional Credentials
          </h2>
          <div className="h-1 w-12 bg-[#1E8C7C] rounded-full my-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-8">
            {/* Degree Card */}
            <div className="bg-[#FAFAFA] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#12233F] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                    <GraduationCap className="w-6 h-6 text-[#1E8C7C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#12233F] font-display">
                      B.Sc. in Business Information Systems (BIS)
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 mt-0.5">
                      Faculty of Commerce, Tanta University, Egypt
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      2014 – 2018
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <span className="bg-[#1E8C7C] text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-2xs">
                    GPA 3.73 / 4.0
                  </span>
                  <span className="text-xs font-bold text-[#12233F] bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                    Excellent Degree (Top Honors)
                  </span>
                </div>
              </div>

              {/* Academic Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-display">
                  Academic Curriculum Foundation:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] shrink-0" />
                    <span>Database Systems &amp; Information Architecture</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] shrink-0" />
                    <span>Systems Analysis &amp; Software Design</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] shrink-0" />
                    <span>Business Process Management &amp; Accounting</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] shrink-0" />
                    <span>Decision Support Systems &amp; Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Training & Certifications Card */}
            <div className="bg-[#FAFAFA] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
              <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#12233F] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                  <Award className="w-6 h-6 text-[#1E8C7C]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#12233F] font-display">
                    Technical Training &amp; Certifications
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 mt-0.5">
                    Structured software engineering &amp; development credentials
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* ITI Training */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded border border-purple-200 inline-block">
                      Information Technology Institute (ITI)
                    </span>
                    <h4 className="text-sm font-bold text-[#12233F]">
                      Full-Stack .NET Developer Trainee
                    </h4>
                    <p className="text-xs text-slate-500">
                      Nov 2024 – Mar 2025 • Technical Training
                    </p>
                    <p className="text-xs text-slate-650 leading-relaxed">
                      Rigorous practical training covering frontend, backend (.NET C#), Web architecture, and Agile sprint planning.
                    </p>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1JENnGmHfXjDpZjuXYZmg-3NVQVDkIygv/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-800 text-xs font-bold transition-all"
                  >
                    <span>View ITI Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* DEPI Training */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 inline-block">
                      Digital Egypt Pioneers Initiative (DEPI)
                    </span>
                    <h4 className="text-sm font-bold text-[#12233F]">
                      Front-End Developer Trainee
                    </h4>
                    <p className="text-xs text-slate-500">
                      Apr 2024 – Nov 2024 • Front-End Development Training
                    </p>
                    <p className="text-xs text-slate-655 leading-relaxed">
                      Focused on modern responsive UI architectures, user testing, performance optimization, and styling components.
                    </p>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1zqmYPfIHO8QYgNKw_rx7hAE4tdiYNggq/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold transition-all"
                  >
                    <span>View DEPI Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="lg:col-span-4 bg-[#12233F] text-white p-6 sm:p-8 rounded-3xl border border-[#12233F] shadow-xl flex flex-col justify-between self-stretch">
            <div>
              <div className="flex items-center gap-2 text-teal-300 font-bold text-xs uppercase tracking-wider mb-4 font-display">
                <Globe2 className="w-4 h-4" />
                <span>Language Proficiency</span>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-white">Arabic</span>
                    <span className="text-xs font-semibold text-teal-300 bg-teal-500/20 px-2 py-0.5 rounded-md">
                      Native Speaker
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Primary native language for stakeholder communication across the MENA region.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-white">English</span>
                    <span className="text-xs font-semibold text-teal-300 bg-teal-500/20 px-2 py-0.5 rounded-md">
                      Fluent (Professional)
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Full professional fluency for international Agile teams, technical documentation, and client discovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-[11px] text-slate-400 mt-6">
              Comfortable leading workshops and writing documentation in both English and Arabic.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
