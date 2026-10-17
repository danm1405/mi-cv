import React, { useState } from 'react';
import { Send, Mail, Phone, Linkedin, Copy, Check, MessageSquare } from 'lucide-react';
import { cvData } from '../data/cvData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // WhatsApp template selector
  const templates = [
    {
      id: 'entrevista',
      label: 'Propuesta Laboral / Entrevista',
      text: 'Hola Daniel, hemos revisado tu perfil como Bachiller en Ingeniería Ambiental y Sanitaria (SSOMA / Monitoreo) y nos gustaría coordinar una entrevista laboral.',
    },
    {
      id: 'supervision',
      label: 'Supervisión SSOMA en Obra / Planta',
      text: 'Hola Daniel, tenemos una oportunidad para supervisión SSOMA (IPERC, PETAR, EPP) en campo y queremos evaluar tu disponibilidad.',
    },
    {
      id: 'monitoreo',
      label: 'Servicio de Monitoreo Ambiental',
      text: 'Hola Daniel, requerimos soporte para la ejecución de monitoreo ambiental (aire, ruido, agua) y elaboración de informes técnicos.',
    },
  ];

  const [selectedTemplate, setSelectedTemplate] = useState(templates[0].text);
  const [customText, setCustomText] = useState(templates[0].text);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleWhatsAppSend = () => {
    const encoded = encodeURIComponent(customText);
    window.open(`https://wa.me/${cvData.personal.phoneRaw}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 bg-[#0d121d] border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Ponte en Contacto
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            ¿Conversamos sobre una oportunidad laboral?
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Disponible para incorporarme a equipos de Seguridad y Salud en el Trabajo (SSOMA), supervisión en campo, monitoreo ambiental y gestión preventiva.
          </p>
        </div>

        {/* Interactive Contact Card */}
        <div className="bg-[#121826] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          {/* Quick contact channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pb-8 border-b border-slate-800/80">
            {/* Phone */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">Teléfono Directo</span>
                <a
                  href={`tel:${cvData.personal.phoneRaw}`}
                  className="text-sm font-bold text-white hover:text-cyan-300 font-mono block"
                >
                  {cvData.personal.phone}
                </a>
              </div>
              <button
                onClick={() => handleCopy(cvData.personal.phone, 'phone')}
                type="button"
                className="mt-3 flex items-center justify-between text-xs text-slate-400 hover:text-cyan-300 transition-colors pt-2 border-t border-slate-800"
              >
                <span>{copiedPhone ? 'Copiado' : 'Copiar número'}</span>
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Email (only daniel.juribe14@gmail.com) */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">Correo Electrónico</span>
                <a
                  href={`mailto:${cvData.personal.email}`}
                  className="text-xs font-bold text-white hover:text-cyan-300 truncate block font-mono"
                  title={cvData.personal.email}
                >
                  {cvData.personal.email}
                </a>
              </div>
              <button
                onClick={() => handleCopy(cvData.personal.email, 'email')}
                type="button"
                className="mt-3 flex items-center justify-between text-xs text-slate-400 hover:text-cyan-300 transition-colors pt-2 border-t border-slate-800"
              >
                <span>{copiedEmail ? 'Copiado' : 'Copiar correo'}</span>
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* LinkedIn */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">Red Profesional</span>
                <a
                  href={cvData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-cyan-300 hover:underline truncate block"
                >
                  linkedin.com/in/daniel-jaime-uribe
                </a>
              </div>
              <a
                href={cvData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between text-xs text-slate-400 hover:text-cyan-300 transition-colors pt-2 border-t border-slate-800"
              >
                <span>Ver perfil</span>
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Interactive WhatsApp message builder */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-bold text-white">
                Enviar mensaje instantáneo a WhatsApp ({cvData.personal.phone})
              </h3>
            </div>

            {/* Template options */}
            <div className="flex flex-wrap gap-2 mb-3">
              {templates.map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => {
                    setSelectedTemplate(tpl.text);
                    setCustomText(tpl.text);
                  }}
                  type="button"
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                    selectedTemplate === tpl.text
                      ? 'bg-blue-600/30 text-cyan-300 border-cyan-500/50'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {tpl.label}
                </button>
              ))}
            </div>

            {/* Textarea */}
            <textarea
              rows={3}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500 resize-none leading-relaxed mb-4"
              placeholder="Escribe tu mensaje para Daniel..."
            />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                Se abrirá WhatsApp Web o la App móvil con el mensaje listo para enviar.
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={cvData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center gap-1.5 border border-slate-700 transition-colors w-full sm:w-auto"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>Ver LinkedIn</span>
                </a>

                <button
                  onClick={handleWhatsAppSend}
                  type="button"
                  className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 transition-all w-full sm:w-auto"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Abrir WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
