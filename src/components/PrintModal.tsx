import React from 'react';
import { X, Printer, Download, MapPin, Phone, Mail, Award, Check } from 'lucide-react';
import { cvData } from '../data/cvData';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintModal: React.FC<PrintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      <div className="relative bg-[#0d121d] border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Top Action Bar (no-print) */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-800 bg-[#121826] no-print">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Printer className="w-4 h-4 text-cyan-400" />
            <span>Vista de Impresión / Guardar en PDF</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar como PDF</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans print-container">
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                  {cvData.personal.name}
                </h1>
                <p className="text-sm font-bold text-blue-700 mt-0.5">
                  {cvData.personal.title} — {cvData.personal.specialization}
                </p>
              </div>
              <div className="text-right text-xs text-slate-600 font-mono space-y-0.5">
                <div>DNI: {cvData.personal.dni}</div>
                <div>{cvData.personal.location}</div>
              </div>
            </div>

            {/* Contact details line */}
            <div className="mt-3 pt-2 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs text-slate-700">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-500" />
                {cvData.personal.phone}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-500" />
                {cvData.personal.email}
              </span>
              <span aria-hidden="true">·</span>
              <span>LinkedIn: linkedin.com/in/daniel-jaime-uribe</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Perfil Profesional
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              {cvData.personal.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Experiencia Laboral
            </h2>

            <div className="space-y-4">
              {cvData.experiences.map((exp) => (
                <div key={exp.id} className="print-break-inside-avoid">
                  <div className="flex justify-between items-baseline text-xs mb-1">
                    <div>
                      <strong className="text-slate-900 font-bold">{exp.role}</strong>
                      <span className="text-blue-800 font-medium"> — {exp.company}</span>
                    </div>
                    <span className="text-slate-500 font-mono text-[11px]">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-[11px] text-slate-700 space-y-0.5">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Educación y Certificaciones
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {cvData.education.map((edu) => (
                <div key={edu.id} className="p-2 border border-slate-200 rounded print-break-inside-avoid">
                  <div className="font-bold text-slate-900">{edu.title}</div>
                  <div className="text-slate-600 text-[11px]">{edu.institution}</div>
                  <div className="text-slate-500 font-mono text-[10px] mt-0.5">
                    {edu.period} {edu.hoursOrNote ? `· ${edu.hoursOrNote}` : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Technical Skills */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Software & Competencias Clave
            </h2>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-slate-900 block mb-1">Herramientas Digitales:</strong>
                <p className="text-[11px] text-slate-700">
                  MS Excel (Avanzado), AutoCAD 2D (Intermedio/Avanzado), ArcGIS (Intermedio), Power BI (Básico), Ofimática Integral.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-1">Gestión SSOMA & Monitoreo:</strong>
                <p className="text-[11px] text-slate-700">
                  Matrices IPERC continuo, Permisos PETAR, ATS, Ley 29783, D.S. 024-2016-EM Minería, Calidad de Aire y Ruido, Cadena de Custodia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
