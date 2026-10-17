import React from 'react';
import { ArrowUp, Linkedin, Mail, Phone } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0d14] border-t border-slate-800/80 py-8 px-4 sm:px-6 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-bold text-slate-200">
            {cvData.personal.name}
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {cvData.personal.title} · UNICA · {cvData.personal.location}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={cvData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${cvData.personal.email}`}
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
          <a
            href={`https://wa.me/${cvData.personal.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            WhatsApp
          </a>
          <button
            onClick={scrollToTop}
            type="button"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Volver arriba"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
