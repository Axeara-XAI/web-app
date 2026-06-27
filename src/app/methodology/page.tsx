import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { MethodologyHero } from '../../components/sections/methodology-pages/MethodologyHero';
import { MethodologySteps } from '../../components/sections/methodology-pages/MethodologySteps';
import { MethodologyVariables } from '../../components/sections/methodology-pages/MethodologyVariables';
import { MethodologyEvaluation } from '../../components/sections/methodology-pages/MethodologyEvaluation';
import { Footer } from '../../components/layout/Footer';
import { ChatWidget } from '../../components/layout/ChatWidget';

export default function MethodologyPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', position: 'relative' }}>
      <Navbar />
      <MethodologyHero />
      <MethodologySteps />
      <MethodologyVariables />
      
      {/* Tambahan seksi evaluasi matematis model */}
      <MethodologyEvaluation /> 
      
      <Footer />
      <ChatWidget />
    </main>
  );
}