'use client';

import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';

interface Feature {
  id: number;
  title: string;
  description: string;
}

const useStyles = makeStyles({
  sectionContainer: {
    backgroundColor: '#f9fafb',
    ...shorthands.padding('100px', '5%'),
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1200px',
  },
  headerArea: {
    ...shorthands.margin('0', '0', '120px', '0'),
    maxWidth: '800px',
  },
  sectionTitle: {
    fontSize: '48px',
    fontWeight: '200',
    color: '#111827',
    letterSpacing: '-1.5px',
    lineHeight: '1.2',
    ...shorthands.margin('0'),
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '60px',
  },
  featureItem: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    ...shorthands.padding('0'),
    boxShadow: 'none',
    position: 'relative',
  },
  accentLine: {
    width: '40px',
    height: '3px',
    backgroundColor: '#0067c0',
    ...shorthands.margin('0', '0', '24px', '0'),
  },
  stepTitle: {
    fontSize: '28px',
    fontWeight: '300',
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

const featuresData: Feature[] = [
  {
    id: 1,
    title: 'Model Prediktif Terbuka (Glass-Box)',
    description: 'Arsitektur Deep Neural Network (DNN) mutakhir yang dilatih dengan lebih dari 100.000 data klinis maternal, dirancang khusus untuk memberikan deteksi dini risiko FGR dengan tingkat akurasi dan sensitivitas tinggi.',
  },
  {
    id: 2,
    title: 'Transparansi Keputusan XAI',
    description: 'Mengintegrasikan metode SHAP (SHapley Additive exPlanations) untuk membongkar kotak hitam AI. Setiap hasil prediksi disertai visualisasi persentase kontribusi dari masing-masing variabel klinis ibu hamil.',
  },
  {
    id: 3,
    title: 'Generator Narasi Medis Cerdas',
    description: 'Ditenagai oleh Large Language Model (Gemini AI) yang bertugas menyintesis angka analitik XAI menjadi paragraf narasi medis berbahasa Indonesia yang intuitif, layaknya opini kedua (second opinion) dari dokter spesialis.',
  },
];

export const SolutionFeatures = () => {
  const styles = useStyles();

  return (
    <section className={styles.sectionContainer} id="solution-features">
      <div className={styles.contentWrapper}>
        <div className={styles.headerArea}>
          <h2 className={styles.sectionTitle}>
            Tiga pilar utama teknologi pendukung keandalan AXARA
          </h2>
        </div>

        <div className={styles.grid}>
          {featuresData.map((feature) => (
            <div key={feature.id} className={styles.featureItem}>
              <div className={styles.accentLine} />
              <h3 className={styles.stepTitle}>{feature.title}</h3>
              <p className={styles.stepDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};