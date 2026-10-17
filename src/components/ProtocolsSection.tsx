import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle, Scale, AlertTriangle, Layers } from 'lucide-react';
import { cvData } from '../data/cvData';

export const ProtocolsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const protocols = [
    {
      title: "Matriz IPERC Continuo & ATS",
      code: "IPERC / ATS",
      framework: "Ley 29783 · D.S. 024-2016-EM",
      description: "Metodología sistemática de identificación de peligros, evaluación de riesgos e implementación de la jerarquía de controles (Eliminación, Sustitución, Ingeniería, Administrativos y EPP) antes de iniciar labores operativas.",
      deliverables: [
        "Identificación in-situ de peligros físicos, químicos, ergonómicos y mecánicos.",
        "Elaboración y firma del Análisis de Trabajo Seguro (ATS) en cuadrillas.",
        "Verificación de controles críticos en el punto de trabajo.",
        "Aplicación de la Tarjeta Roja / Derecho a Decir NO ante peligro inminente."
      ]
    },
    {
      title: "Permisos de Alto Riesgo (PETAR)",
      code: "PETAR",
      framework: "D.S. 024-2016-EM · Norma G.050",
      description: "Autorización escrita y rigurosa requerida para la ejecución de tareas de alto potencial de severidad en minería, obra y montaje.",
      deliverables: [
        "Liberación de trabajos en altura (arnés certificado, líneas de vida, puntos de anclaje).",
        "Supervisión de trabajos en caliente (pantallas ignífugas, extintor rodante PQS, vigía de fuego).",
        "Permisos para espacios confinados y proximidad a líneas eléctricas energizadas.",
        "Revisión de aptitud médica de los operarios para trabajos de alto riesgo."
      ]
    },
    {
      title: "Monitoreo Ambiental & Ocupacional",
      code: "MONITOREO",
      framework: "ECA MINAM · R.M. 375-2008-TR",
      description: "Medición cuantitativa de factores ambientales y agentes ocupacionales para garantizar que las concentraciones permanezcan por debajo de los Límites Máximos Permisibles (LMP) y Estándares de Calidad Ambiental (ECA).",
      deliverables: [
        "Monitoreo de Ruido Ambiental diurno y nocturno con sonómetro integrador calibrado.",
        "Muestreo de Calidad de Aire (PM10, PM2.5, gases) y preservación según protocolo.",
        "Generación estricta de hojas de Cadena de Custodia para laboratorios acreditados.",
        "Elaboración de informes técnicos de cumplimiento comparativo con normativas peruanas."
      ]
    },
    {
      title: "Cultura Preventiva & Charlas de 5 Minutos",
      code: "SST OPERATIVO",
      framework: "Plan Anual de Seguridad · Comités SST",
      description: "Liderazgo diario en el frente de trabajo para concientizar al personal obrero y técnico sobre la autoprotección y la disciplina en el uso de EPP.",
      deliverables: [
        "Dictado de inducciones y charlas de 5 minutos al inicio del turno laboral.",
        "Control, registro de dotación y recambio oportuno de Equipos de Protección Personal (EPP).",
        "Inspecciones no anunciadas de orden y limpieza bajo metodología 5S.",
        "Reporte e investigación oportuna de cuasi-accidentes y condiciones subestándar."
      ]
    }
  ];

  return (
    <section id="normativa" className="py-16 px-4 sm:px-6 bg-[#0d121d] border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Marco Normativo y Práctica Operativa
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            Protocolos SSOMA en Campo
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Dominio de los estándares de seguridad industrial, minera y ambiental exigidos por OEFA, SUNAFIL, OSINERGMIN y MINAM.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {protocols.map((p, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              type="button"
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeTab === index
                  ? 'bg-slate-800 border-cyan-400/80 shadow-md shadow-cyan-500/10'
                  : 'bg-[#121826] border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-[11px] font-mono text-cyan-400 font-bold mb-1">{p.code}</div>
              <div className="text-xs sm:text-sm font-bold text-white line-clamp-1">{p.title}</div>
            </button>
          ))}
        </div>

        {/* Active Protocol Card */}
        <div className="bg-[#121826] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <Scale className="w-3.5 h-3.5" />
                <span>Marco Legal: {protocols[activeTab].framework}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {protocols[activeTab].title}
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {protocols[activeTab].description}
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Aplicación y Responsabilidades en Obra / Planta:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {protocols[activeTab].deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/70"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Peruvian Regulatory Framework Summary */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cvData.normativeFramework.map((norm, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#121826]/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="text-xs font-mono font-bold text-cyan-400 mb-0.5">{norm.code}</div>
              <div className="text-xs font-bold text-white mb-1">{norm.name}</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">{norm.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
