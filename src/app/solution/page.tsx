import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Import komponen seksi Solusi
import { SolutionHero } from '../../components/sections/solution-pages/SolutionHero';
import { SolutionFeatures } from '../../components/sections/solution-pages/SolutionFeatures';
import { SolutionWorkflow } from '../../components/sections/solution-pages/SolutionWorkflow';
import { SolutionImpact } from '../../components/sections/solution-pages/SolutionImpact';

export default function SolutionPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', position: 'relative' }}>
      <Navbar />
      
      <SolutionHero />
      <SolutionFeatures />
      <SolutionWorkflow />
      <SolutionImpact />
      
      <Footer />
      <ChatWidget />
    </main>
  );
}