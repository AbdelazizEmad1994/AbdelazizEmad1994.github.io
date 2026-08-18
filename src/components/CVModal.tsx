import React, { useState } from 'react';
import { X, ExternalLink, Printer, Copy, Check, Mail, Phone, MapPin, Download, Globe } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES, GOOGLE_DRIVE_CV_URL } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.roleSubline}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

PROFILE SUMMARY:
${PERSONAL_INFO.aboutParagraphs.join('\n')}

PROFESSIONAL EXPERIENCE:
${EXPERIENCES.map((e) => `${e.role} | ${e.company} | ${e.period}\n${e.bullets.map((b) => `• ${b}`).join('\n')}`).join('\n\n')}

KEY SKILLS & TOOLS:
${SKILL_CATEGORIES.map((c) => `${c.title}:\n${c.skills.map((s) => `• ${s.name}`).join('\n')}`).join('\n\n')}

EDUCATION:
B.Sc. in Business Information Systems, Faculty of Commerce, Tanta University | 2014 – 2018
Graduated with Excellent degree, GPA: 3.73/4

LANGUAGES:
Arabic (Native), English (Fluent)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#0E172E] text-[#12233F] dark:text-white w-full max-w-4xl max-h-[92vh] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-700">
        
        {/* Modal Top Header Bar */}
        <div className="p-4 sm:p-5 bg-[#12233F] dark:bg-[#070E20] text-white flex flex-wrap items-center justify-between gap-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E8C7C] flex items-center justify-center font-bold text-sm text-white shrink-0">
              AE
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg font-display text-white">
                Abdelaziz Emad — Official CV
              </h3>
              <p className="text-xs text-slate-300">
                Product Owner | Business Analyst
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={GOOGLE_DRIVE_CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E8C7C] hover:bg-[#166d61] text-xs font-bold text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Google Drive CV</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              title="Copy text representation"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 text-xs sm:text-sm print:p-0">
          
          {/* Resume Header Block */}
          <div className="text-center border-b border-slate-200 dark:border-slate-700/80 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12233F] dark:text-white tracking-tight font-display">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-bold text-[#1E8C7C] dark:text-teal-400 font-display">
              {PERSONAL_INFO.roleSubline}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium pt-2">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#1E8C7C] dark:text-teal-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#1E8C7C] dark:text-teal-400" />
                <a href={`tel:${PERSONAL_INFO.phoneRaw}`} className="hover:underline">{PERSONAL_INFO.phone}</a>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#1E8C7C] dark:text-teal-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#12233F] dark:text-teal-400 font-display border-b border-slate-200 dark:border-slate-700/80 pb-1">
              Profile Summary
            </h2>
            <div className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              {PERSONAL_INFO.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#12233F] dark:text-teal-400 font-display border-b border-slate-200 dark:border-slate-700/80 pb-1">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-l-2 border-[#1E8C7C] dark:border-teal-400 pl-3 py-0.5">
                    <h3 className="text-sm font-bold text-[#12233F] dark:text-white">
                      {exp.role} <span className="text-slate-500 dark:text-slate-400 font-normal">| {exp.company}</span>
                    </h3>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{exp.period}</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 list-disc pl-5">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Skills & Tools */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#12233F] dark:text-teal-400 font-display border-b border-slate-200 dark:border-slate-700/80 pb-1">
              Key Skills &amp; Tools
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="bg-slate-50 dark:bg-[#132244] p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-2">
                  <h3 className="text-xs font-bold text-[#12233F] dark:text-white">
                    {cat.title}
                  </h3>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {cat.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E8C7C] dark:bg-teal-400" />
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#12233F] dark:text-teal-400 font-display border-b border-slate-200 dark:border-slate-700/80 pb-1">
              Education
            </h2>
            <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 space-y-1">
              <p className="font-bold text-[#12233F] dark:text-white">
                B.Sc. in Business Information Systems, Faculty of Commerce, Tanta University <span className="font-normal text-slate-500 dark:text-slate-400">| 2014 – 2018</span>
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-xs">
                Graduated with Excellent degree, GPA: 3.73/4
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#12233F] dark:text-teal-400 font-display border-b border-slate-200 dark:border-slate-700/80 pb-1">
              Languages
            </h2>
            <div className="flex gap-6 text-xs text-slate-700 dark:text-slate-300">
              <p>• <strong>Arabic:</strong> Native</p>
              <p>• <strong>English:</strong> Fluent</p>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-100 dark:bg-[#070E20] text-slate-600 dark:text-slate-400 text-xs flex items-center justify-between border-t border-slate-200 dark:border-slate-700/80 shrink-0">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#1E8C7C] dark:text-teal-400" />
            <span>Official Curriculum Vitae — Abdelaziz Emad</span>
          </div>
          <a
            href={GOOGLE_DRIVE_CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-lg bg-[#1E8C7C] hover:bg-[#166d61] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Open Google Drive CV</span>
          </a>
        </div>

      </div>
    </div>
  );
};

