import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring physics for fluid progress filling
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-transparent"
      role="progressbar"
      aria-label="Page scroll progress"
    >
      {/* Background track indicator (very faint) */}
      <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[0.5px]" />

      {/* Dynamic progress bar with brand gradient and subtle glow */}
      <motion.div
        id="scroll-progress-bar"
        className="h-full w-full bg-linear-to-r from-[#1E8C7C] via-[#38c1ad] to-[#1E8C7C] origin-left shadow-[0_1px_6px_rgba(30,140,124,0.35)]"
        style={{ scaleX }}
      />
    </div>
  );
};
