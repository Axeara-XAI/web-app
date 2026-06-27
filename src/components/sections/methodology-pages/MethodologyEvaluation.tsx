'use client';

import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  sectionContainer: {
    backgroundColor: '#ffffff',
    // Padding diubah: Atas 20px, Kanan 5%, Bawah 100px, Kiri 5%
    ...shorthands.padding('20px', '5%', '100px', '5%'), 
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1200px',
  },
  
  // --- HEADER ALA HPE (Rata Kiri, Bold) ---
  sectionTitle: {
    fontSize: '40px',
    fontWeight: '700',
    color: '#111827',
    letterSpacing: '-1px',
    lineHeight: '1.2',
    ...shorthands.margin('0', '0', '64px', '0'),
    maxWidth: '800px',
  },

  // --- GRID TATA LETAK KARTU ---
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px',
  },

  // --- STYLING KARTU (HPE Vibe + Axara Touch) ---
  evalCard: {
    backgroundColor: '#f9fafb',
    ...shorthands.padding('40px', '32px'),
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'all 0.3s ease',
    borderTopWidth: '4px',
    borderTopStyle: 'solid',
    borderTopColor: 'transparent',
    ':hover': {
      backgroundColor: '#ffffff',
      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
      borderTopColor: '#0067c0',
    },
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#111827',
    lineHeight: '1.3',
    ...shorthands.margin('0', '0', '16px', '0'),
  },
  cardDesc: {
    fontSize: '16px',
    color: '#4b5563',
    lineHeight: '1.6',
    flexGrow: 1, 
    ...shorthands.margin('0', '0', '32px', '0'),
  },
  
  // --- ACTION LINK (Axara Blue) ---
  actionLink: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#0067c0',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'gap 0.2s ease',
    cursor: 'pointer',
    ':hover': {
      gap: '12px',
    },
  },
});

const evaluationData = [
  {
    id: 1,
    title: 'Evaluasi AUC-ROC',
    description: 'Mengukur kemampuan model Deep Learning dalam membedakan kelas risiko Fetal Growth Restriction (FGR) tinggi dan rendah. Nilai AUC yang tinggi merepresentasikan performa diskriminasi klasifikasi yang sangat baik secara klinis.',
    linkText: 'Pelajari metrik AUC',
  },
  {
    id: 2,
    title: 'Metrik F1-Score',
    description: 'Metrik harmonis antara presisi dan recall. F1-Score sangat krusial digunakan pada dataset rekam medis maternal yang seringkali tidak seimbang (imbalanced data) agar evaluasi performa model tidak bias.',
    linkText: 'Pelajari F1-Score',
  },
  {
    id: 3,
    title: 'Analisis XAI (SHAP)',
    description: 'Menerapkan SHapley Additive exPlanations untuk membuka "black-box" AI. Modul ini memetakan secara transparan seberapa besar kontribusi setiap variabel klinis terhadap prediksi risiko komplikasi maternal.',
    linkText: 'Lihat metode SHAP',
  },
  {
    id: 4,
    title: 'Sensitivitas (Recall)',
    description: 'Kemampuan model untuk mengidentifikasi seluruh kasus positif FGR yang sebenarnya. Meminimalkan false negative (kasus lolos deteksi) adalah prioritas absolut dalam diagnosis risiko kehamilan.',
    linkText: 'Pelajari Sensitivitas',
  },
  {
    id: 5,
    title: 'Presisi & Akurasi',
    description: 'Mengukur rasio ketepatan prediksi positif untuk meminimalkan false positive. Hal ini mencegah kepanikan yang tidak perlu atau tindakan intervensi medis yang berlebihan pada pasien maternal.',
    linkText: 'Pelajari Akurasi',
  },
  {
    id: 6,
    title: 'Validasi Narasi LLM',
    description: 'Evaluasi kualitatif terhadap output narasi dari API Gemini. Menguji apakah penjelasan teknis dari SHAP berhasil diterjemahkan menjadi narasi medis yang akurat, intuitif, dan user-friendly bagi tenaga medis.',
    linkText: 'Lihat integrasi LLM',
  },
];

export const MethodologyEvaluation = () => {
  const styles = useStyles();

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        
        <h2 className={styles.sectionTitle}>
          Metrik evaluasi klinis dan teknis yang komprehensif
        </h2>

        <div className={styles.gridContainer}>
          {evaluationData.map((item) => (
            <div key={item.id} className={styles.evalCard}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              
              <div className={styles.actionLink}>
                {item.linkText} <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};