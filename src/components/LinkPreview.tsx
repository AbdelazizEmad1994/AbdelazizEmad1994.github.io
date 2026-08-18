import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Globe, Building2, MapPin, ShieldCheck, Loader2 } from 'lucide-react';

export interface OrgInfo {
  name: string;
  url: string;
  domain?: string;
  category?: string;
  description?: string;
  previewType?: 'website' | 'map';
  mapEmbedUrl?: string;
}

// Global registry of verified organization websites and location metadata
export const ORG_REGISTRY: Record<string, OrgInfo> = {
  'adam-health': {
    name: 'Adam Health',
    url: 'https://www.foradam.health/',
    domain: 'foradam.health',
    category: 'Digital Health & Telemedicine',
    description: 'Digital health and men’s wellbeing platform offering clinical consultations and health management.',
  },
  'sbs': {
    name: 'SBS - Specialized Business Solutions',
    url: 'https://www.sbs-sa.net/',
    domain: 'sbs-sa.net',
    category: 'Enterprise Software & IT Consulting',
    description: 'Regional enterprise software solutions provider delivering business automation and consulting.',
  },
  'iti': {
    name: 'Information Technology Institute (ITI)',
    url: 'https://iti.gov.eg/',
    domain: 'iti.gov.eg',
    category: 'Government Tech Institute (MCIT Egypt)',
    description: 'Premier national tech training institute established by Egypt’s Ministry of Communications & IT.',
  },
  'depi': {
    name: 'Digital Egypt Pioneers Initiative (DEPI)',
    url: 'https://depi.gov.eg/',
    domain: 'depi.gov.eg',
    category: 'National Capacity Building Initiative (MCIT)',
    description: 'National scholarship program training Egyptian professionals in modern software engineering.',
  },
  'bdc': {
    name: 'Banque du Caire',
    url: 'https://www.bdc.com.eg/bdcwebsite/home.html',
    domain: 'bdc.com.eg',
    category: 'Commercial Banking & SME Finance',
    description: 'One of Egypt’s largest leading public commercial banks providing corporate and SME banking.',
  },
  'cib': {
    name: 'Commercial International Bank (CIB)',
    url: 'https://www.cibeg.com/',
    domain: 'cibeg.com',
    category: 'Private Commercial Banking',
    description: 'Egypt’s foremost private sector bank offering financial services, retail, and corporate solutions.',
  },
  'tanta-commerce': {
    name: 'Faculty of Commerce, Tanta University, Egypt',
    url: 'https://com.tanta.edu.eg/en/',
    domain: 'com.tanta.edu.eg',
    category: 'Higher Education & BIS Department',
    description: 'Academic institution offering the Business Information Systems (BIS) bachelor program.',
  },
  'tanta-city': {
    name: 'Tanta, Egypt',
    url: 'https://maps.app.goo.gl/h5rQYDE8Y3Gh7Jhr7',
    domain: 'maps.google.com',
    category: 'City Location • Gharbia Governorate, Egypt',
    description: 'Major city in Egypt’s Nile Delta region; strategic hub 90 km north of Cairo.',
    previewType: 'map',
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=30.95%2C30.75%2C31.05%2C30.83&layer=mapnik&marker=30.7865%2C31.0004',
  },
};

interface LinkPreviewProps {
  orgKey?: keyof typeof ORG_REGISTRY;
  customUrl?: string;
  customTitle?: string;
  customCategory?: string;
  customDescription?: string;
  children: React.ReactNode;
  className?: string;
  badgeClassName?: string;
  showIcon?: boolean;
  placement?: 'top' | 'bottom' | 'auto';
}

export const LinkPreview: React.FC<LinkPreviewProps> = ({
  orgKey,
  customUrl,
  customTitle,
  customCategory,
  customDescription,
  children,
  className = '',
  badgeClassName = '',
  showIcon = true,
  placement = 'auto',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [actualPlacement, setActualPlacement] = useState<'top' | 'bottom'>('top');
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const org = orgKey ? ORG_REGISTRY[orgKey] : null;
  const targetUrl = customUrl || org?.url || '#';
  const targetTitle = customTitle || org?.name || 'Website';
  const targetCategory = customCategory || org?.category || 'Official Website';
  const targetDomain = org?.domain || (targetUrl !== '#' ? new URL(targetUrl, 'https://example.com').hostname.replace('www.', '') : '');
  const targetDesc = customDescription || org?.description || 'Click to view the official external website.';
  const isMap = org?.previewType === 'map';
  const iframeSrc = isMap ? (org?.mapEmbedUrl || targetUrl) : targetUrl;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Determine optimal placement based on viewport space
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;
      if (placement === 'bottom') {
        setActualPlacement('bottom');
      } else if (placement === 'top') {
        setActualPlacement('top');
      } else {
        // Auto: prioritize 'top' if space below is constrained (<300px) or if space above is plenty (>260px)
        if (spaceBelow < 310 && spaceAbove > 240) {
          setActualPlacement('top');
        } else if (spaceAbove < 260) {
          setActualPlacement('bottom');
        } else {
          setActualPlacement('top');
        }
      }
    }
    
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      setIsIframeLoaded(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <span
      className={`relative inline-block transition-all ${
        isHovered ? 'z-[100] isolate' : 'z-auto'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        ref={triggerRef}
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 font-semibold text-[#12233F] dark:text-slate-100 hover:text-[#1E8C7C] dark:hover:text-teal-400 transition-colors group/link cursor-pointer decoration-[#1E8C7C]/30 hover:underline underline-offset-2 ${className}`}
        aria-haspopup="dialog"
      >
        <span>{children}</span>
        {showIcon && (
          <ExternalLink className="w-3 h-3 text-[#1E8C7C] dark:text-teal-400 opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all shrink-0" />
        )}
      </a>

      {/* Popover Preview Card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: actualPlacement === 'top' ? 8 : -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: actualPlacement === 'top' ? 6 : -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`absolute left-1/2 -translate-x-1/2 z-[200] w-72 sm:w-80 pointer-events-auto shadow-2xl ${
              actualPlacement === 'top' ? 'bottom-full mb-3' : 'top-full mt-3'
            }`}
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            {/* Popover Card Wrapper */}
            <div className="bg-white dark:bg-[#0F1A34] rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xl overflow-hidden text-left ring-1 ring-black/10 dark:ring-white/10">
              
              {/* Header Bar */}
              <div className="bg-[#12233F] dark:bg-[#0B132B] text-white px-3.5 py-2.5 flex items-center justify-between gap-2 border-b border-[#12233F] dark:border-slate-800">
                <div className="flex items-center gap-2 overflow-hidden">
                  {isMap ? (
                    <div className="w-5 h-5 rounded-md bg-[#1E8C7C] flex items-center justify-center text-white shrink-0">
                      <MapPin className="w-3 h-3" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-md bg-white/10 dark:bg-white/15 flex items-center justify-center text-[#1E8C7C] dark:text-teal-300 shrink-0 font-bold text-[10px]">
                      <Globe className="w-3 h-3" />
                    </div>
                  )}
                  <span className="font-bold text-xs truncate text-white">
                    {targetTitle}
                  </span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-teal-300 bg-white/10 dark:bg-white/15 px-2 py-0.5 rounded-full shrink-0">
                  Preview
                </span>
              </div>

              {/* Iframe Viewport Container */}
              <div className="relative w-full h-36 bg-slate-100 dark:bg-slate-900 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                
                {/* Loader Placeholder */}
                {!isIframeLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-50 dark:bg-[#0B132B] text-slate-400 dark:text-slate-500 z-10">
                    <Loader2 className="w-5 h-5 animate-spin text-[#1E8C7C] dark:text-teal-400" />
                    <span className="text-[11px] font-medium">Connecting to {targetDomain || 'website'}...</span>
                  </div>
                )}

                {/* Secure Sandbox Iframe Preview */}
                <iframe
                  src={iframeSrc}
                  title={`${targetTitle} live preview`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  onLoad={() => setIsIframeLoaded(true)}
                  className="w-full h-full border-0 pointer-events-none scale-100 origin-top-left"
                />

                {/* Subtle overlay shield preventing accidental iframe captures */}
                <div className="absolute inset-0 bg-transparent" />
              </div>

              {/* Card Footer Details */}
              <div className="p-3 bg-white dark:bg-[#0F1A34] space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold text-[#1E8C7C] dark:text-teal-400 uppercase tracking-wider truncate">
                    {targetCategory}
                  </span>
                  {targetDomain && (
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      {targetDomain}
                    </span>
                  )}
                </div>

                <span className="block text-[11px] text-slate-600 dark:text-slate-300 leading-snug line-clamp-2">
                  {targetDesc}
                </span>

                {/* Action CTA */}
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-1 py-1.5 px-3 bg-[#12233F] hover:bg-[#1E8C7C] dark:bg-[#1E8C7C] dark:hover:bg-[#167063] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <span>Open {isMap ? 'in Google Maps' : 'Official Site'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Pointer arrow */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 shadow-xs ${
                actualPlacement === 'top'
                  ? 'top-full -mt-1.5 border-r border-b bg-white dark:bg-[#0F1A34] border-slate-200/90 dark:border-slate-700/80'
                  : 'bottom-full -mb-1.5 border-l border-t bg-[#12233F] dark:bg-[#0B132B] border-[#12233F] dark:border-slate-800'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};
