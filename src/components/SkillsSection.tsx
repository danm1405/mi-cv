import React from 'react';
import { Laptop, ShieldAlert, Activity, Users, Check } from 'lucide-react';
import { cvData } from '../data/cvData';

export const SkillsSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'laptop':
        return <Laptop className="w-5 h-5 text-cyan-400" />;
      case 'shield-check':
        return <ShieldAlert className="w-5 h-5 text-blue-400" />;
      case 'test-tube':
        return <Activity className="w-5 h-5 text-teal-400" />;
      default:
        return <Users className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="competencias" className="py-16 px-4 sm:px-6 bg-[#0a0d14]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Capacidades Técnicas
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            Software & Competencias
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Herramientas digitales, competencias técnicas de campo y habilidades de liderazgo operativo para la gestión ambiental y preventiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cvData.skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#121826] border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors shadow-md"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-100">
                          {skill.name}
                        </span>
                      </div>
                      {skill.detail && (
                        <p className="text-[11px] text-slate-400 ml-5 mt-0.5">
                          {skill.detail}
                        </p>
                      )}
                    </div>

                    {skill.level && (
                      <span className="self-start sm:self-auto ml-5 sm:ml-0 text-[11px] font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded shrink-0">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
