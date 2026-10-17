/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProtocolsSection } from './components/ProtocolsSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintModal } from './components/PrintModal';

export default function App() {
  const [printModalOpen, setPrintModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Fixed Navigation */}
      <Navbar onOpenPrint={() => setPrintModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection onOpenPrint={() => setPrintModalOpen(true)} />
        <ExperienceSection />
        <ProtocolsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal for PDF / Printable Resume */}
      <PrintModal
        isOpen={printModalOpen}
        onClose={() => setPrintModalOpen(false)}
      />
    </div>
  );
}
