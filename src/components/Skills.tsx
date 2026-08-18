import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { CheckCircle2, Wrench, Search, Layout, Database, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section id="skills" className="py-20 bg-[#FAFAFA] dark:bg-[#080E1E] border-b border-slate-200 dark:border-slate-800 overflow-visible transition-colors duration-200">
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
              Capabilities &amp; Tooling
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#12233F] dark:text-white tracking-tight font-display mt-1">
              Skills &amp; Technical Competencies
            </h2>
            <div className="h-1 w-12 bg-[#1E8C7C] rounded-full my-2" />
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 max-w-xl">
              Categorized matrix of product ownership methodology, Agile delivery practices, and hands-on software tooling.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-[#132244] border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-medium text-[#12233F] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E8C7C] shadow-2xs"
            />
          </div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, colIdx) => {
            const filteredSkills = category.skills.filter((s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (s.tag && s.tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );

            return (
              <div
                key={category.title}
                className="bg-white dark:bg-[#132244] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-2xs space-y-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-[#12233F] ${
                      colIdx === 0
                        ? 'bg-[#1E8C7C]/10 dark:bg-teal-400/10 text-[#1E8C7C] dark:text-teal-400'
                        : colIdx === 1
                        ? 'bg-blue-500/10 dark:bg-blue-400/10 text-blue-700 dark:text-blue-400'
                        : 'bg-purple-500/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-400'
                    }`}>
                      {colIdx === 0 ? <Layout className="w-5 h-5" /> : colIdx === 1 ? <Sparkles className="w-5 h-5" /> : <Database className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#12233F] dark:text-white font-display">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5 mt-6">
                    {filteredSkills.length > 0 ? (
                      filteredSkills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-3 rounded-xl bg-[#FAFAFA] dark:bg-[#0F1A34] border border-slate-200/80 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#1E8C7C] dark:text-teal-400 shrink-0" />
                            <span className="text-xs font-semibold text-[#12233F] dark:text-slate-100">
                              {skill.name}
                            </span>
                          </div>
                          {skill.tag && (
                            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-300 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-slate-400 dark:text-slate-500 py-4 text-center">
                        No skills match "{searchQuery}"
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-400 dark:text-slate-400 font-medium">
                  {colIdx === 0 && "Focused on requirement accuracy & clinical alignment"}
                  {colIdx === 1 && "Proven cadence in ClickUp & Agile environments"}
                  {colIdx === 2 && "Hands-on ITI .NET & DEPI development training"}
                </div>
              </div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};
