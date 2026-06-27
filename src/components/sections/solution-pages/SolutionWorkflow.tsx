'use client';

import React, { useState, useCallback } from 'react';
import { makeStyles, shorthands, mergeClasses } from '@fluentui/react-components';
import { 
  FormNew24Regular, 
  DataLine24Regular, 
  DocumentText24Regular 
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  sectionContainer: {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    ...shorthands.padding('100px', '5%'),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    contain: 'content', 
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  // --- HEADER SECTION ---
  sectionHeader: {
    textAlign: 'center',
    ...shorthands.margin('0', '0', '48px', '0'),
  },
  sectionTitle: {
    fontSize: '40px',
    fontWeight: '700', 
    color: '#ffffff',
    letterSpacing: '-1px',
    ...shorthands.margin('0', '0', '16px', '0'),
  },
  sectionSubtitle: {
    fontSize: '18px',
    color: '#94a3b8',
    lineHeight: '1.6',
    maxWidth: '600px',
    ...shorthands.margin('0', 'auto'),
  },

  // --- NAVBAR (SUDUT TAJAM / KOTAK TEGAS) ---
  navBarContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#162032', // Sedikit lebih terang dari background utama
    ...shorthands.padding('4px'),
    ...shorthands.borderRadius('0'), // Dibuat kotak tegas
    ...shorthands.margin('0', '0', '40px', '0'),
    maxWidth: '100%',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  navItem: {
    ...shorthands.padding('12px', '32px'), 
    ...shorthands.borderRadius('0'), // Dibuat kotak tegas
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    border: 'none',
    outline: 'none',
    transitionProperty: 'background-color, color',
    transitionDuration: '0.2s',
  },
  navItemActive: {
    backgroundColor: '#0067c0', // Menggunakan biru tegas Axara untuk tab aktif
    color: '#ffffff',
  },
  navItemInactive: {
    backgroundColor: 'transparent',
    color: '#8b9bb4',
    ':hover': {
      color: '#ffffff',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
  },

  // --- CONTENT DASHBOARD AREA ---
  dashboardView: {
    width: '100%',
    backgroundColor: '#0b1120', // Warna biru dongker sangat gelap seperti di gambar
    ...shorthands.borderRadius('0'), // Dibuat kotak tegas tanpa lengkungan
    border: '1px solid #1e293b',
    ...shorthands.padding('80px', '80px'),
    position: 'relative',
    overflow: 'hidden',
    minHeight: '400px', 
    '@media (max-width: 960px)': {
      ...shorthands.padding('40px', '32px'),
    },
  },
  
  ambientGlow: {
    position: 'absolute',
    top: '-20%',
    right: '-10%',
    width: '600px',
    height: '600px',
    backgroundImage: 'radial-gradient(circle, rgba(0, 103, 192, 0.08) 0%, rgba(11, 17, 32, 0) 70%)',
    ...shorthands.borderRadius('50%'),
    pointerEvents: 'none',
    transform: 'translateZ(0)', 
  },

  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr', // Proporsi teks sedikit lebih lebar dari icon
    gap: '60px',
    alignItems: 'center',
    animationName: {
      from: { opacity: 0, transform: 'translateY(10px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    animationDuration: '0.3s',
    animationTimingFunction: 'ease-out', 
    animationFillMode: 'both',
    '@media (max-width: 960px)': {
      gridTemplateColumns: '1fr',
      gap: '40px',
    },
  },

  // --- BAGIAN TEKS ---
  contentLeft: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 2,
  },
  stepBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#0f2942', // Background biru gelap sesuai referensi gambar
    color: '#38bdf8', // Teks biru terang
    ...shorthands.padding('6px', '16px'),
    ...shorthands.borderRadius('0'), // Kotak tegas
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    ...shorthands.margin('0', '0', '32px', '0'),
  },
  contentTitle: {
    fontSize: '38px',
    fontWeight: '300', // Tipis seperti di gambar
    color: '#ffffff',
    lineHeight: '1.4',
    letterSpacing: '-0.5px',
    ...shorthands.margin('0', '0', '32px', '0'),
    '@media (max-width: 768px)': {
      fontSize: '28px',
    },
  },
  contentDesc: {
    fontSize: '18px',
    color: '#8b9bb4', // Warna abu-abu kebiruan
    lineHeight: '1.8', // Spasi antar baris lebih lega
    ...shorthands.margin('0'),
  },

  // --- BAGIAN IKON KANAN ---
  contentRight: {
    display: 'flex',
    justifyContent: 'flex-end', // Merapatkan ke kanan
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 960px)': {
      justifyContent: 'center',
    },
  },
  iconDisplayBox: {
    width: '200px', // Dibuat lebih besar
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#162032', // Abu-abu slate solid tanpa border
    ...shorthands.borderRadius('0'), // Kotak tegas
    color: '#0067c0', // Warna biru ikon
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)', // Efek mengambang
    '& svg': {
      width: '100px',
      height: '100px',
    },
  },
});

const workflowData = [
  {
    id: 'step-1',
    navLabel: 'Data Klinis',
    step: 'Langkah 01',
    title: 'Input Parameter Maternal Secara Instan',
    description: 'Tenaga medis memasukkan parameter sederhana ibu hamil seperti usia, riwayat penyakit (hipertensi/diabetes), hemoglobin, dan kunjungan antenatal langsung ke dalam antarmuka terpusat AXARA.',
    icon: <FormNew24Regular />,
  },
  {
    id: 'step-2',
    navLabel: 'Kalkulasi AI',
    step: 'Langkah 02',
    title: 'Analisis DNN & Ekstraksi SHAP Real-time',
    description: 'Sistem memproses data di latar belakang. Model Deep Learning menghitung probabilitas risiko FGR, sementara modul SHAP memetakan persentase kontribusi setiap gejala dengan presisi tinggi.',
    icon: <DataLine24Regular />,
  },
  {
    id: 'step-3',
    navLabel: 'Opini Kedua',
    step: 'Langkah 03',
    title: 'Visualisasi Risiko & Panduan Intervensi',
    description: 'Dashboard seketika menampilkan grafik risiko interaktif yang mudah dibaca, dilengkapi dengan paragraf narasi medis (Second Opinion) otomatis sebagai panduan intervensi yang aman.',
    icon: <DocumentText24Regular />,
  },
];

export const SolutionWorkflow = () => {
  const styles = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = useCallback((index: number) => {
    return () => setActiveIndex(index);
  }, []);

  const activeData = workflowData[activeIndex];

  return (
    <section className={styles.sectionContainer} id="solution-workflow">
      <div className={styles.contentWrapper}>
        
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Alur Kerja Sistem</h2>
          <p className={styles.sectionSubtitle}>
            Pengalaman terpadu yang menyederhanakan proses kompleks menjadi keputusan terukur dalam hitungan detik.
          </p>
        </div>

        <div className={styles.navBarContainer} role="tablist">
          {workflowData.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                className={mergeClasses(
                  styles.navItem,
                  isActive ? styles.navItemActive : styles.navItemInactive
                )}
                onClick={handleTabClick(index)} 
              >
                {item.navLabel}
              </button>
            );
          })}
        </div>

        <div className={styles.dashboardView}>
          <div className={styles.ambientGlow} />
          
          <div key={activeData.id} className={styles.contentGrid}>
            <div className={styles.contentLeft}>
              <div className={styles.stepBadge}>{activeData.step}</div>
              
              {/* Memotong judul menjadi dua baris agar mirip dengan gambar referensi */}
              <h3 className={styles.contentTitle}>
                {activeData.title.split(' ').slice(0, 3).join(' ')}<br/>
                {activeData.title.split(' ').slice(3).join(' ')}
              </h3>
              
              <p className={styles.contentDesc}>{activeData.description}</p>
            </div>

            <div className={styles.contentRight}>
              <div className={styles.iconDisplayBox}>
                {activeData.icon}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};