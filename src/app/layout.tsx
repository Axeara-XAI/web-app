import type { ReactNode } from 'react';

import '@/src/app/globals.css';
import { Providers } from './providers';

// ==========================================
// 1. METADATA APLIKASI
// ==========================================
export const metadata = {
  title: 'Axara XAI | Analitik Biomedis', // Catatan: Typo Axera -> Axara (sesuai penulisan sebelumnya)
  description: 'Sistem analitik presisi berbasis data untuk mendukung riset dan inovasi medis (PKM).',
  icons: {
    icon: '/icon.svg', // Mengarah ke file favicon utama
    // Tambahan opsional jika kamu memiliki logo untuk perangkat Apple/mobile:
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
};

// ==========================================
// 2. ROOT LAYOUT
// ==========================================
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}