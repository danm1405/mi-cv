import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  IdCard,
  Linkedin,
  Send,
  Download,
  Copy,
  Check,
  ShieldCheck,
} from 'lucide-react';
import { cvData } from '../data/cvData';

interface HeroSectionProps {
  onOpenPrint: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPrint }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="perfil" className="pt-28 pb-16 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy & Executive Summary */}
          <div className="lg:col-span-7">
            {/* Clean unboxed availability line */}
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-3 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>{cvData.personal.availability}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2">
              {cvData.personal.name}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-cyan-300 mb-4">
              {cvData.personal.title}
            </p>

            {/* High-level Executive Summary */}
            <div className="space-y-3 mb-6 max-w-2xl text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                {cvData.personal.summary}
              </p>
              
              {/* Quiet editorial highlights */}
              <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-cyan-400 font-semibold">Enfoque Técnico:</span>
                <span>Inspecciones de Campo</span>
                <span aria-hidden="true">·</span>
                <span>Matrices IPERC Continuo</span>
                <span aria-hidden="true">·</span>
                <span>Permisos PETAR & ATS</span>
                <span aria-hidden="true">·</span>
                <span>Monitoreo de Ruido & Aire</span>
                <span aria-hidden="true">·</span>
                <span>Gestión de EPP</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${cvData.personal.phoneRaw}?text=Hola%20Daniel,%20he%20revisado%20tu%20perfil%20profesional%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad%20laboral.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>

              <button
                onClick={onOpenPrint}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-colors active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Descargar CV</span>
              </button>

              <a
                href={cvData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Card with Clean Professional Avatar */}
          <div className="lg:col-span-5">
            <div className="bg-[#121826] border border-slate-800 rounded-2xl p-6 sm:p-7 relative shadow-xl shadow-black/40">
              {/* Executive Avatar Container */}
              <div className="relative mx-auto w-32 h-32 mb-4">
                <div className="w-full h-full rounded-full p-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-teal-400 shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#0c1322] via-[#111c33] to-[#0a0f1d] flex flex-col items-center justify-center relative border border-slate-700/60 text-center">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-extrabold text-xl tracking-wider mb-1">
                      DJ
                    </div>
                    <span className="text-[10px] tracking-widest font-bold text-slate-300 uppercase">
                      SSOMA
                    </span>
                  </div>
                </div>
              </div>

              {/* Identity summary */}
              <div className="text-center mb-5">
                <h3 className="text-lg font-bold text-white">{cvData.personal.shortName}</h3>
                <p className="text-xs text-cyan-400 font-medium">{cvData.personal.specialization}</p>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Seguridad Industrial & Monitoreo</span>
                </div>
              </div>

              {/* Quick Info List with clean separators */}
              <ul className="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-slate-800/80">
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    Ubicación
                  </span>
                  <span className="font-medium text-slate-200">{cvData.personal.location}</span>
                </li>

                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-400">
                    <IdCard className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    DNI
                  </span>
                  <span className="font-mono text-slate-200 font-medium">{cvData.personal.dni}</span>
                </li>

                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-400">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    Universidad
                  </span>
                  <span className="font-medium text-slate-200 text-right">UNICA ({cvData.personal.gradYear})</span>
                </li>

                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-400">
                    <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    Teléfono
                  </span>
                  <a
                    href={`tel:${cvData.personal.phoneRaw}`}
                    className="text-cyan-300 hover:underline font-mono"
                  >
                    {cvData.personal.phone}
                  </a>
                </li>

                <li className="flex items-center justify-between pt-1">
                  <span className="flex items-center gap-2 text-slate-400">
                    <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    Email
                  </span>
                  <button
                    onClick={() => handleCopyEmail(cvData.personal.email)}
                    type="button"
                    className="flex items-center gap-1.5 text-slate-200 hover:text-cyan-300 transition-colors"
                    title="Copiar email al portapapeles"
                  >
                    <span className="truncate max-w-[180px] font-mono text-[11px]">{cvData.personal.email}</span>
                    {copiedEmail ? (
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                    ) : (
                      <Copy className="w-3 h-3 text-slate-400 shrink-0" />
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4-Column KPI / Metrics Strip (Full-width row placed below hero split) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
          {cvData.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#121826]/70 border border-slate-800/80 rounded-xl p-4 hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono tabular-nums mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-200">{stat.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
