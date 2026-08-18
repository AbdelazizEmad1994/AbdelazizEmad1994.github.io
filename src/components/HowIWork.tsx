import React, { useState } from 'react';
import { HOW_I_WORK_STEPS, SAMPLE_BPMN_FLOW } from '../data/portfolioData';
import { FileCode, GitBranch, ListTodo, Search, ArrowRight, CheckCircle2, ChevronRight, Layers, Workflow, Info } from 'lucide-react';

export const HowIWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('requirements');
  const [selectedBpmnNode, setSelectedBpmnNode] = useState<string>('step-1');
  const [activeTab, setActiveTab] = useState<'cards' | 'diagram'>('cards');

  const selectedStepData = HOW_I_WORK_STEPS.find((s) => s.id === activeStep) || HOW_I_WORK_STEPS[0];

  return (
    <section id="how-i-work" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E8C7C] bg-[#1E8C7C]/10 px-3 py-1 rounded-full border border-[#1E8C7C]/20 inline-block">
              Proof of Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#12233F] tracking-tight font-display mt-1">
              What I Actually Do Day to Day
            </h2>
            <div className="h-1 w-12 bg-[#1E8C7C] rounded-full my-2" />
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              A breakdown of my day-to-day product management workflow — from initial stakeholder workshops to detailed technical acceptance criteria.
            </p>
          </div>

          {/* Toggle View Mode */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('cards')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'cards'
                  ? 'bg-[#12233F] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-[#12233F]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>4-Step Framework</span>
            </button>
            <button
              onClick={() => setActiveTab('diagram')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'diagram'
                  ? 'bg-[#12233F] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-[#12233F]'
              }`}
            >
              <Workflow className="w-3.5 h-3.5 text-[#1E8C7C]" />
              <span>Sample BPMN Clinical Flow</span>
            </button>
          </div>
        </div>

        {activeTab === 'cards' ? (
          /* Cards View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step Selection Navigation Cards */}
            <div className="lg:col-span-5 space-y-3">
              {HOW_I_WORK_STEPS.map((step) => {
                const isActive = step.id === activeStep;
                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#12233F] text-white border-[#12233F] shadow-lg scale-[1.01]'
                        : 'bg-[#FAFAFA] text-[#12233F] border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                        isActive ? 'bg-[#1E8C7C] text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        Step {step.number}
                      </span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#1E8C7C]' : 'text-slate-400'}`} />
                    </div>

                    <h3 className="font-bold text-base font-display mb-1">
                      {step.title}
                    </h3>
                    <p className={`text-xs line-clamp-2 ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                      {step.summary}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Detailed View Card */}
            <div className="lg:col-span-7 bg-[#FAFAFA] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold text-[#1E8C7C] uppercase tracking-wider font-display">
                    Process Step {selectedStepData.number} Deep-Dive
                  </span>
                  <h3 className="text-2xl font-bold text-[#12233F] font-display mt-0.5">
                    {selectedStepData.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                {selectedStepData.summary}
              </p>

              {/* Deliverables Produced */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-display">
                  Core Deliverables Produced:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedStepData.deliverables.map((del, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-semibold text-[#12233F] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1E8C7C] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-display">
                  Primary Tools &amp; Methods:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStepData.toolsUsed.map((tool, i) => (
                    <span key={i} className="bg-slate-200 text-slate-800 text-xs font-medium px-3 py-1 rounded-lg">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Practical Note */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-3">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-0.5">How this applies in production:</strong>
                  <span>{selectedStepData.detailNote}</span>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* BPMN Diagram View */
          <div className="bg-[#12233F] text-white p-6 sm:p-8 rounded-3xl border border-[#12233F] shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider font-display">
                  Sanitized Process Mapping Artifact
                </span>
                <h3 className="text-2xl font-bold font-display text-white mt-1">
                  Telemedicine Consultation &amp; Acceptance Criteria Decomposition
                </h3>
              </div>
              <span className="text-xs bg-white/10 text-slate-300 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto">
                Interactive Diagram Preview
              </span>
            </div>

            {/* BPMN Interactive Flow Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {SAMPLE_BPMN_FLOW.map((node) => {
                const isSelected = selectedBpmnNode === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedBpmnNode(node.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-[#1E8C7C] text-white border-teal-300 shadow-lg scale-102'
                        : 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10'
                    }`}
                  >
                    <div className="text-[10px] uppercase font-bold text-teal-300 mb-1">
                      {node.actor}
                    </div>
                    <h4 className="font-bold text-xs font-display leading-tight mb-2">
                      {node.title}
                    </h4>
                    <p className="text-[11px] opacity-80 line-clamp-2">
                      {node.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Detail Breakout for BPMN node */}
            {selectedBpmnNode && (
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
                {(() => {
                  const node = SAMPLE_BPMN_FLOW.find((n) => n.id === selectedBpmnNode) || SAMPLE_BPMN_FLOW[0];
                  return (
                    <>
                      <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
                        <span className="font-bold text-teal-300">
                          Selected Node: {node.title} ({node.actor})
                        </span>
                        <span className="text-slate-400">Given-When-Then Specification</span>
                      </div>
                      <p className="text-xs text-slate-300">{node.description}</p>
                      
                      {node.acceptanceCriteria && (
                        <div>
                          <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                            Sample PO Acceptance Criteria (ClickUp Ticket):
                          </span>
                          <ul className="space-y-1 text-xs text-slate-200">
                            {node.acceptanceCriteria.map((ac, idx) => (
                              <li key={idx} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                                <span>{ac}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
