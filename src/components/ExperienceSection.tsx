import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { cvData, WorkExperience } from '../data/cvData';

export const ExperienceSection: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Toda la Trayectoria' },
    { id: 'monitoreo', label: 'Monitoreo Ambiental' },
    { id: 'mineria', label: 'Minería' },
    { id: 'agroindustria', label: 'Agroindustria' },
    { id: 'telecomunicaciones', label: 'Telecomunicaciones & Obras' },
  ];

  const filteredExperiences = selectedSector === 'all'
    ? cvData.experiences
    : cvData.experiences.filter((exp) => exp.sector === selectedSector);

  return (
    <section id="experiencia" className="py-16 px-4 sm:px-6 bg-[#0a0d14]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Trayectoria Profesional
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            Experiencia Laboral
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Supervisión técnica de seguridad operativa, monitoreo de factores ambientales y cumplimiento de reglamentos sectoriales en el Perú.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls (Functional buttons with click handlers) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#121826] border border-slate-800 rounded-xl mb-10 overflow-x-auto no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedSector(tab.id)}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all ${
                selectedSector === tab.id
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline list */}
        <div className="relative border-l border-slate-800 ml-3 sm:ml-4 space-y-8 pl-6 sm:pl-8">
          {filteredExperiences.map((exp: WorkExperience) => (
            <div key={exp.id} className="relative group">
              {/* Timeline indicator node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0a0d14] border-2 border-cyan-400 group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 m-auto mt-[2px]" />
              </div>

              {/* Experience Card */}
              <div className="bg-[#121826] border border-slate-800/90 hover:border-slate-700/80 rounded-xl p-5 sm:p-6 transition-all shadow-md shadow-black/20">
                {/* Header with clean unboxed metadata */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                      {exp.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Quiet sector label */}
                <div className="text-xs text-slate-400 mb-4 pb-2 border-b border-slate-800/60 flex items-center gap-2">
                  <Briefcase className="w-3 h-3 text-cyan-400" />
                  <span>Sector: {exp.sectorLabel}</span>
                </div>

                {/* Tasks bullet list */}
                <ul className="space-y-2 mb-4">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400/80 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Tools / Standards applied */}
                {exp.keyTools && (
                  <div className="pt-3 border-t border-slate-800/50 flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-slate-400 font-medium">Normas & Instrumentos:</span>
                    <div className="flex flex-wrap items-center gap-1.5 text-slate-300">
                      {exp.keyTools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-800/60 text-cyan-300 px-2 py-0.5 rounded text-[11px] font-mono border border-slate-700/50"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
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
