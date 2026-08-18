import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  isScrolled?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', isScrolled = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative p-2 rounded-xl border transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-[#1E8C7C] ${
        isScrolled
          ? isDark
            ? 'bg-slate-800/80 text-amber-400 border-slate-700 hover:bg-slate-700'
            : 'bg-white/10 text-amber-300 border-white/20 hover:bg-white/20'
          : isDark
          ? 'bg-slate-800 text-amber-400 border-slate-700 hover:bg-slate-700 shadow-xs'
          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:text-slate-900 shadow-xs'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700 group-hover:text-[#12233F]" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
