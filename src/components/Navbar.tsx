import React, { useState, useEffect } from 'react';
import { Download, Printer, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrint }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Perfil', href: '#perfil' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Normativa & Protocolos', href: '#normativa' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Competencias', href: '#competencias' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0a0d14]/90 backdrop-blur-md border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-[#0a0d14]/70 backdrop-blur-sm border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#perfil"
          className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform"></span>
          <span>DANIEL JAIME</span>
          <span className="text-cyan-400 font-mono text-xs">/ SSOMA</span>
        </a>

        {/* Zone 2: Navigation Links (Single-line, concise) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPrint}
            type="button"
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-md shadow-blue-500/20 whitespace-nowrap shrink-0 active:scale-95"
            title="Descargar o imprimir CV en formato ejecutivo"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Imprimir / PDF</span>
            <span className="sm:hidden">CV PDF</span>
          </button>

          <a
            href="https://wa.me/51998653740?text=Hola%20Daniel,%20vi%20tu%20CV%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad%20laboral."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d121d] border-b border-slate-800 px-6 py-4 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrint();
              }}
              className="w-full py-2 text-xs font-semibold text-center text-white bg-blue-600 rounded-lg"
            >
              Exportar CV a PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
