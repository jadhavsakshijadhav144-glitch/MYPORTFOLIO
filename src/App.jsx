import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificateModal from './components/CertificateModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="portfolio-app">
      {/* Background Ambient Mesh & Floating Orbs */}
      <div className="bg-mesh-container">
        <div className="bg-ambient-orb bg-orb-1"></div>
        <div className="bg-ambient-orb bg-orb-2"></div>
        <div className="bg-ambient-orb bg-orb-3"></div>
        <div className="bg-grid-overlay"></div>
      </div>

      {/* Sticky Header / Navbar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications onSelectCertificate={(cert) => setSelectedCertificate(cert)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <CertificateModal 
        certificate={selectedCertificate} 
        onClose={() => setSelectedCertificate(null)} 
      />

      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
}
