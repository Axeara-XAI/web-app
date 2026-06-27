'use client';

import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  sectionContainer: {
    backgroundColor: '#ffffff',
    ...shorthands.padding('120px', '5%'),
    display: 'flex',
    justifyContent: 'center',
    borderTop: '1px solid #f3f4f6',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    alignItems: 'stretch', // Memaksa gambar dan teks sama tinggi
    gap: '80px',
    '@media (max-width: 960px)': {
      flexDirection: 'column-reverse',
      gap: '48px',
    },
  },

  // --- KOLOM KIRI: GAMBAR ---
  imageColumn: {
    flexBasis: '45%',
    backgroundColor: '#f3f4f6', 
    ...shorthands.borderRadius('16px'),
    overflow: 'hidden',
    position: 'relative', 
    '@media (max-width: 960px)': {
      minHeight: '350px', 
    },
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
  },

  // --- KOLOM KANAN: TEKS ---
  textColumn: {
    flexBasis: '55%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    ...shorthands.padding('24px', '0'), 
  },
  overline: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#0067c0', 
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    ...shorthands.margin('0', '0', '16px', '0'),
  },
  title: {
    fontSize: '44px',
    fontWeight: '300', 
    color: '#111827',
    lineHeight: '1.15',
    letterSpacing: '-1px',
    ...shorthands.margin('0', '0', '32px', '0'),
    '@media (max-width: 768px)': {
      fontSize: '32px',
    },
  },
  description: {
    fontSize: '18px',
    color: '#4b5563',
    lineHeight: '1.7',
    ...shorthands.margin('0', '0', '24px', '0'),
  },
  
  // --- KOTAK KUTIPAN (HIGHLIGHT) ---
  highlightBox: {
    backgroundColor: '#ffffff', 
    borderLeftWidth: '4px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#0067c0', 
    ...shorthands.padding('24px', '32px'),
    ...shorthands.margin('24px', '0', '0', '0'),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)', 
    ...shorthands.borderRadius('0', '12px', '12px', '0'),
  },
  highlightText: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#111827',
    fontStyle: 'italic',
    lineHeight: '1.6',
    ...shorthands.margin('0'),
  }
});

// NAMA KOMPONEN SUDAH BENAR: SolutionImpact
export const SolutionImpact = () => {
  const styles = useStyles();

  return (
    <section className={styles.sectionContainer} id="solution-impact">
      <div className={styles.contentWrapper}>
        
        {/* KOLOM KIRI (Gambar) */}
        <div className={styles.imageColumn}>
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" 
            alt="Tenaga medis menggunakan teknologi" 
            className={styles.image} 
          />
        </div>

        {/* KOLOM KANAN (Teks) */}
        <div className={styles.textColumn}>
          <span className={styles.overline}>Dampak Sosial & Medis</span>
          
          <h2 className={styles.title}>
            Demokratisasi akses deteksi dini secara <strong>inklusif</strong>
          </h2>
          
          <p className={styles.description}>
            Langkah deteksi dini FGR seringkali terhambat di wilayah episentrum seperti Nusa Tenggara Timur, Papua Barat Daya, dan Sulawesi Barat akibat krisis ketersediaan alat Ultrasonografi (USG) serta sebaran dokter spesialis Obgyn (Sp.OG) yang tidak merata.
          </p>
          
          <p className={styles.description}>
            Melalui purwarupa dashboard interaktif AXARA, kami mendemokratisasi akses kesehatan. Bidan atau tenaga medis primer di pelosok daerah kini dapat memasukkan data riwayat klinis sederhana ibu hamil untuk mendapatkan analisis prediksi dan rekomendasi setara spesialis secara <em>real-time</em>.
          </p>
          
          <div className={styles.highlightBox}>
            <p className={styles.highlightText}>
              "Sistem ini memperkuat kemandirian teknologi kesehatan nasional dengan menciptakan alat deteksi dini yang tidak bergantung pada infrastruktur medis mahal, guna mencegah kasus BBLR dan stunting sejak dalam kandungan."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};