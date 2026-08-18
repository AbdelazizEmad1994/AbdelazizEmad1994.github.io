import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Linkedin, Github, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkPreview } from './LinkPreview';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAFAFA] dark:bg-[#080E1E] relative overflow-visible transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E8C7C] dark:text-teal-400 bg-[#1E8C7C]/10 dark:bg-teal-400/10 px-3 py-1 rounded-full border border-[#1E8C7C]/20 dark:border-teal-400/20 inline-block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#12233F] dark:text-white tracking-tight font-display">
            Get in Touch
          </h2>
          <div className="h-1 w-12 bg-[#1E8C7C] rounded-full mx-auto" />
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            Open to Product Owner and Business Analyst opportunities across Egypt, the Gulf region, and remote international teams. Reach out directly via any of the channels below.
          </p>
        </div>

        {/* Primary Contact Channels — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          {/* LinkedIn — Primary channel */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-[#132244] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-2xs hover:border-[#0A66C2]/40 hover:shadow-md transition-all flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0A66C2] dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A66C2] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 rounded-full border border-blue-100 dark:border-blue-900/60">
                Preferred
              </span>
            </div>
            <div>
              <h3 className="font-bold text-[#12233F] dark:text-white text-sm mb-0.5">LinkedIn</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Best channel for professional outreach and role discussions.</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0A66C2] dark:text-blue-400 group-hover:gap-2.5 transition-all">
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* WhatsApp / Phone */}
          <div className="bg-white dark:bg-[#132244] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-2xs hover:border-[#25D366]/40 hover:shadow-md transition-all flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-green-50 dark:bg-green-950/50 text-[#25D366] dark:text-green-400 border border-green-100 dark:border-green-900/60">
                <MessageSquare className="w-6 h-6" />
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-300 transition-colors"
                title="Copy phone number"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <div>
              <h3 className="font-bold text-[#12233F] dark:text-white text-sm mb-0.5">WhatsApp / Phone</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{PERSONAL_INFO.phone}</p>
            </div>
            <div className="flex gap-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phoneRaw}`}
                className="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-[#12233F] dark:text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                Call
              </a>
            </div>
          </div>

          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="bg-white dark:bg-[#132244] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-2xs hover:border-[#1E8C7C]/40 hover:shadow-md transition-all flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-[#1E8C7C]/10 dark:bg-teal-400/10 text-[#1E8C7C] dark:text-teal-400 border border-[#1E8C7C]/20 dark:border-teal-400/20">
                <Mail className="w-6 h-6" />
              </div>
              <button
                onClick={(e) => { e.preventDefault(); handleCopy(PERSONAL_INFO.email, 'email'); }}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-300 transition-colors"
                title="Copy email address"
              >
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <div>
              <h3 className="font-bold text-[#12233F] dark:text-white text-sm mb-0.5">Email</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed break-all">{PERSONAL_INFO.email}</p>
            </div>
            <div className="w-full py-2 rounded-xl bg-[#12233F] dark:bg-[#1E8C7C] hover:bg-[#1E8C7C] dark:hover:bg-[#177769] text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              Send Email
            </div>
          </a>

        </div>

        {/* Bottom info strip — location only */}
        <div className="bg-[#12233F] dark:bg-[#070E20] text-white p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-md border border-transparent dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1E8C7C] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Based in</p>
              <div className="text-xs text-slate-300 font-medium">
                <LinkPreview
                  orgKey="tanta-city"
                  showIcon={false}
                  className="text-teal-300 hover:text-white underline font-medium"
                >
                  {PERSONAL_INFO.location}
                </LinkPreview>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 font-medium italic">
            Open to relocation — sponsorship required for international on-site roles.
          </p>
        </div>

      </div>
    </section>
  );
};
