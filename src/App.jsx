import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Background Interactive Mesh Canvas */}
      <BackgroundCanvas />

      {/* Grid Lines Backdrop */}
      <div className="grid-overlay" />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
