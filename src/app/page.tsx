'use client';

import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { ChatWidget } from '@/src/components/layout/ChatWidget';
import {
  HeroSection,
  FeaturesSection,
  WorkflowSection,
  AzureInfraSection,
  ImpactSection,
  CredibilitySection,
  CtaSection,
} from '../components/sections/home-page';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* ========================================== */}
      {/* 1. NAVBAR */}
      {/* ========================================== */}
      <Navbar />

      {/* ========================================== */}
      {/* 2. KONTEN UTAMA */}
      {/* ========================================== */}
      <div style={{ flex: 1 }}>
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <AzureInfraSection />
        <ImpactSection />
        <CredibilitySection />
        <CtaSection />
      </div>

      {/* ========================================== */}
      {/* 3. FOOTER */}
      {/* ========================================== */}
      <Footer />

      {/* ========================================== */}
      {/* 4. CHAT WIDGET (AI ASSISTANT) */}
      {/* ========================================== */}
      <ChatWidget />

    </main>
  );
}