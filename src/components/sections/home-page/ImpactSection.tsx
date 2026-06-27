'use client';

import { useState } from 'react';
import Link from 'next/link'; // 1. Pastikan Link di-import
import { makeStyles, shorthands, mergeClasses } from '@fluentui/react-components';
import { ChevronRight24Regular } from '@fluentui/react-icons';

// ==========================================
// 1. DATA KONTEN
// ==========================================
const impactData = [
  {
    id: 'akurasi',
    label: 'Akurasi Model Prediktif',
    title: 'Akurasi Diagnosis Deep Learning',
    desc: 'Mengembangkan arsitektur deep neural network (DNN) yang optimal untuk meningkatkan akurasi deteksi risiko Fetal Growth Restriction (FGR) melalui pengolahan data riwayat klinis maternal.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'transparansi',
    label: 'Transparansi Faktor Risiko',
    title: 'Pemetaan Logis dengan XAI',
    desc: 'Mengintegrasikan metode Explainable AI berbasis SHAP untuk memetakan faktor risiko dominan, sehingga seluruh keputusan model komputasi dapat dipertanggungjawabkan secara logis dan medis.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'narasi',
    label: 'Generator Narasi Medis',
    title: 'Opini Kedua Spesialis Virtual',
    desc: 'Integrasi Large Language Model Gemini menerjemahkan output analitik menjadi narasi medis berbahasa Indonesia, menjadikannya sistem pendukung keputusan yang mudah dipahami tenaga kesehatan.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'skrining',
    label: 'Akses Skrining Terpencil',
    title: 'Deteksi Dini Tanpa Infrastruktur Mahal',
    desc: 'Efektif menjadi alat skrining dini sebagai solusi alternatif bagi wilayah yang mengalami krisis tenaga dokter spesialis Sp.OG dan keterbatasan perangkat Ultrasonografi (USG).',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1600'
  }
];

const useStyles = makeStyles({
  // ==========================================
  // 2. LAYOUT UTAMA
  // ==========================================
  section: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1.3fr 1fr',
    backgroundColor: '#00162A',
    contain: 'content',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
    },
  },
  leftPanel: {
    ...shorthands.padding('120px', '10%', '120px', '12%'),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (max-width: 1024px)': {
      ...shorthands.padding('80px', '5%', '40px', '5%'),
    },
    '@media (max-width: 480px)': {
      ...shorthands.padding('60px', '5%', '32px', '5%'),
    },
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
      gap: '40px',
    },
  },

  // ==========================================
  // 3. BLOK TEKS KIRI
  // ==========================================
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '360px',
    position: 'relative', // 2. Tambahkan pelindung layer
    zIndex: 10,           // 3. Pastikan berada di atas gambar/overlay
    '@media (max-width: 900px)': {
      minHeight: 'auto',
    },
  },
  kicker: {
    color: '#00A2E2',
    fontSize: '14px',
    fontWeight: '800',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    marginBottom: '16px',
    display: 'block',
  },
  title: {
    fontSize: '48px',
    fontWeight: '300',
    lineHeight: '1.2',
    color: '#ffffff',
    marginBottom: '24px',
    letterSpacing: '-0.5px',
    marginTop: '0',
    '@media (max-width: 900px)': {
      fontSize: '36px',
    },
    '@media (max-width: 480px)': {
      fontSize: '32px',
    },
  },
  desc: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#A0B0C0',
    marginBottom: '40px',
    '@media (max-width: 900px)': {
      marginBottom: '32px',
    },
  },
  pillButton: {
    display: 'inline-flex', // 4. Ubah agar Link tampil seperti tombol
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none', // 5. Hilangkan garis bawah link
    backgroundColor: '#ffffff',
    color: '#00162A',
    ...shorthands.borderRadius('999px'),
    ...shorthands.padding('16px', '32px'),
    fontSize: '16px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    marginTop: 'auto',
    position: 'relative', // 6. Pelindung layer klik
    zIndex: 10,
    transitionProperty: 'background-color, transform',
    transitionDuration: '0.2s',
    ':hover': {
      backgroundColor: '#f0f0f0',
      transform: 'scale(1.02)',
    },
    '@media (max-width: 900px)': {
      marginTop: '0',
      width: '100%',
    },
  },

  // ==========================================
  // 4. DAFTAR MENU
  // ==========================================
  linkListArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: '34px',
    width: '100%',
    position: 'relative',
    zIndex: 10,
    '@media (max-width: 900px)': {
      paddingTop: '0',
    },
  },
  linkItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shorthands.padding('20px', '0'),
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    fontSize: '18px',
    fontWeight: '600',
    textDecoration: 'none',
    cursor: 'pointer',
    transitionProperty: 'color',
    transitionDuration: '0.2s',
    '@media (max-width: 480px)': {
      fontSize: '16px',
      ...shorthands.padding('16px', '0'),
    },
  },
  linkItemActive: {
    color: '#00A2E2',
  },
  linkItemInactive: {
    color: '#ffffff',
    ':hover': {
      color: '#00A2E2',
    },
  },
  linkItemLast: {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },

  // ==========================================
  // 5. GAMBAR DINAMIS
  // ==========================================
  rightPanelImage: {
    width: '100%',
    height: '100%',
    minHeight: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transitionProperty: 'background-image',
    transitionDuration: '0.5s',
    position: 'relative',
    pointerEvents: 'none', // 7. Mencegah gambar memblokir klik di layar kecil
    ':before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(to right, #00162A 0%, rgba(0, 22, 42, 0.2) 30%, transparent 100%)',
    },

    '@media (max-width: 1024px)': {
      minHeight: '350px',
      ':before': {
        backgroundImage: 'linear-gradient(to bottom, #00162A 0%, rgba(0, 22, 42, 0.2) 40%, transparent 100%)',
      },
    },
  }
});

export const ImpactSection = () => {
  const styles = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = impactData[activeIndex];

  return (
    <section className={styles.section} id="impact">

      {/* ========================================== */}
      {/* 1. PANEL KIRI */}
      {/* ========================================== */}
      <div className={styles.leftPanel}>
        <div className={styles.contentGrid}>

          {/* 1.1 TEKS UTAMA */}
          <div className={styles.textBlock}>
            <span className={styles.kicker}>Temuan yang Ditargetkan</span>
            <h2 className={styles.title}>{activeData.title}</h2>
            <span className={styles.desc}>
              {activeData.desc}
            </span>
            
            {/* 8. Ini sudah diganti menjadi <Link> */}
            <Link href="/solution" className={styles.pillButton}>
              Lihat Dokumentasi
            </Link>
          </div>

          {/* 1.2 DAFTAR TAUTAN */}
          <div className={styles.linkListArea}>
            {impactData.map((item, index) => {
              const isActive = index === activeIndex;
              const isLast = index === impactData.length - 1;

              return (
                <div
                  key={item.id}
                  className={mergeClasses(
                    styles.linkItem,
                    isActive ? styles.linkItemActive : styles.linkItemInactive,
                    isLast && styles.linkItemLast
                  )}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveIndex(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <span>{item.label}</span>
                  <ChevronRight24Regular />
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ========================================== */}
      {/* 2. PANEL KANAN */}
      {/* ========================================== */}
      <div
        className={styles.rightPanelImage}
        aria-label="Visualisasi Arsitektur Riset Medis"
        style={{
          backgroundImage: `url("${activeData.image}")`
        }}
      />

    </section>
  );
};