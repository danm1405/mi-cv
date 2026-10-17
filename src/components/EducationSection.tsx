import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { cvData } from '../data/cvData';

export const EducationSection: React.FC = () => {
  return (
    <section id="formacion" className="py-16 px-4 sm:px-6 bg-[#0a0d14]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Educación y Calificaciones
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            Formación Académica & Certificaciones
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Base universitaria en ingeniería sanitaria y ambiental, complementada con programas especializados de alta exigencia académica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cvData.education.map((item) => (
            <div
              key={item.id}
              className="bg-[#121826] border border-slate-800 hover:border-cyan-500/30 rounded-xl p-6 transition-all shadow-md group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {item.type === 'degree' ? (
                    <GraduationCap className="w-6 h-6" />
                  ) : (
                    <Award className="w-6 h-6" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold text-cyan-400">
                      {item.period}
                    </span>
                    {item.hoursOrNote && (
                      <span className="text-[11px] font-mono text-slate-400">
                        {item.hoursOrNote}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {item.institution}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Acreditación válida / Certificación oficial verificable</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
