'use client';

import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  sectionContainer: {
    backgroundColor: '#fafafa', // Warna abu-abu sangat terang khas enterprise
    ...shorthands.padding('100px', '5%'),
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1200px',
  },
  
  // --- HEADER SECTION (Rata Kiri ala Ciena) ---
  headerArea: {
    ...shorthands.margin('0', '0', '80px', '0'),
    maxWidth: '800px',
  },
  sectionTitle: {
    fontSize: '48px',
    fontWeight: '300', // Tipografi tipis/light khas Ciena
    color: '#111827',
    letterSpacing: '-1px',
    lineHeight: '1.2',
    ...shorthands.margin('0', '0', '16px', '0'),
  },
  sectionSubtitle: {
    fontSize: '18px',
    color: '#4b5563',
    fontWeight: '500',
    ...shorthands.margin('0'),
  },

  // --- GRID TATA LETAK ---
  grid: {
    display: 'grid',
    // Akan otomatis menjadi 4 kolom di desktop besar, dan menyesuaikan di layar lebih kecil
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '48px',
  },

  // --- STYLING ITEM (Tanpa Kotak/Card) ---
  stepItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  accentLine: {
    width: '40px',
    height: '3px',
    backgroundColor: '#0067c0', // Garis aksen biru Axara menggantikan merah Ciena
    ...shorthands.margin('0', '0', '24px', '0'),
  },
  stepTitle: {
    fontSize: '32px',
    fontWeight: '300', // Judul item tipis dan elegan
    color: '#111827',
    lineHeight: '1.2',
    letterSpacing: '-0.5px',
    ...shorthands.margin('0', '0', '16px', '0'),
  },
  stepDesc: {
    fontSize: '16px',
    color: '#4b5563',
    lineHeight: '1.6',
    ...shorthands.margin('0'),
  },
});

const stepsData = [
  {
    id: 1,
    title: 'Akuisisi Dataset',
    description: 'Mengumpulkan data sekunder riwayat klinis maternal dengan usia kehamilan (GA) ≥ 36 minggu dari repositori medis Kaggle, mencakup 101.400 catatan medis tervalidasi.',
  },
  {
    id: 2,
    title: 'Pra-pemrosesan',
    description: 'Pembersihan missing values dan pencilan, dilanjutkan seleksi atribut klinis (hipertensi, diabetes, anemia), pelabelan risiko FGR, feature scaling, dan encoding kategori.',
  },
  {
    id: 3,
    title: 'Pemodelan & XAI',
    description: 'Melatih arsitektur Deep Neural Network (ReLU & Adam). Model dianalisis dengan metode SHAP untuk mengekstraksi faktor risiko secara transparan melalui Explainable AI.',
  },
  {
    id: 4,
    title: 'Integrasi Sistem',
    description: 'Output XAI ditransformasikan oleh LLM Gemini menjadi narasi medis otomatis, kemudian diimplementasikan ke dalam dashboard web interaktif berbasis Streamlit/Flask.',
  },
];

export const MethodologySteps = () => {
  const styles = useStyles();

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        
        <div className={styles.headerArea}>
          <h2 className={styles.sectionTitle}>
            Tahapan riset terstruktur dengan keandalan klinis
          </h2>
          <p className={styles.sectionSubtitle}>
            Pendekatan sistematis dari pengolahan data mentah hingga integrasi sistem pendukung keputusan.
          </p>
        </div>

        <div className={styles.grid}>
          {stepsData.map((step) => (
            <div key={step.id} className={styles.stepItem}>
              {/* Garis Aksen Pendek ala Ciena */}
              <div className={styles.accentLine}></div>
              
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};