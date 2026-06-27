import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { TeamHero } from '../../components/sections/research-team-pages/TeamHero';
import { TeamGrid } from '../../components/sections/research-team-pages/TeamGrid';
import { Footer } from '../../components/layout/Footer'; // Sesuaikan path jika berbeda
import { ChatWidget } from '../../components/layout/ChatWidget'; // Sesuaikan path jika berbeda

export default function TeamPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', position: 'relative' }}>
      <Navbar />
      <TeamHero />
      <TeamGrid />
      <Footer />
      
      <ChatWidget />
    </main>
  );
}