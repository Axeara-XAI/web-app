'use client';

import {
  Text,
  makeStyles,
  shorthands,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  // ==========================================
  // 1. LAYOUT UTAMA
  // ==========================================
  heroWrapper: {
    backgroundImage:
      'linear-gradient(to bottom, rgba(255, 255, 255, 0) 75%, #ffffff 100%), url("/home-pages-asset/hero.svg")',
    backgroundColor: '#f4f7fc',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    minHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    ...shorthands.padding('0', '5%'),
    boxSizing: 'border-box',
    fontFamily:
      '"Segoe UI Variable Display", "Segoe UI", "Inter", -apple-system, sans-serif',
  },

  // ==========================================
  // 2. KOTAK KONTEN
  // ==========================================
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    maxWidth: '1400px',
    width: '100%',
    position: 'relative',
    zIndex: 2,

    '@media (max-width: 900px)': {
      alignItems: 'center',
      textAlign: 'center',
      ...shorthands.padding('60px', '0'),
    },
  },

  // ==========================================
  // 3. PEMBUNGKUS TEKS UTAMA
  // ==========================================
  contentBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '750px',
    '@media (max-width: 900px)': {
      alignItems: 'center',
    },
  },

  // ==========================================
  // 4. TIPOGRAFI
  // ==========================================
  kicker: {
    color: '#005bb5',
    fontSize: '13px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    marginBottom: '20px',
    display: 'block',
  },
  title: {
    fontSize: '56px',
    lineHeight: '1.15',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '24px',
    letterSpacing: '-0.5px',
    marginTop: '0',
    '@media (max-width: 900px)': {
      fontSize: '42px',
    },
    '@media (max-width: 480px)': {
      fontSize: '36px',
    },
  },
  subtitle: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#4b5563',
    marginBottom: '48px',
    maxWidth: '90%',
    '@media (max-width: 900px)': {
      maxWidth: '100%',
    },
    '@media (max-width: 480px)': {
      fontSize: '16px',
    },
  },

  // ==========================================
  // 5. TOMBOL & AKSI
  // ==========================================
  buttonGroup: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    '@media (max-width: 900px)': {
      justifyContent: 'center',
    },
  },
  mainButton: {
    backgroundColor: '#0067c0',
    color: '#ffffff',
    height: '48px',
    ...shorthands.padding('0', '24px'),
    fontSize: '15px',
    fontWeight: '600',
    ...shorthands.borderRadius('4px'),
    border: 'none',
    cursor: 'pointer',
    transitionProperty: 'background-color, transform',
    transitionDuration: '0.2s',
    ':hover': {
      backgroundColor: '#005bb5',
      transform: 'translateY(-1px)',
    },
    '@media (max-width: 480px)': {
      width: '100%',
    },
  },
  outlineButton: {
    backgroundColor: 'transparent',
    color: '#111827',
    height: '48px',
    ...shorthands.padding('0', '24px'),
    fontSize: '15px',
    fontWeight: '600',
    ...shorthands.borderRadius('4px'),
    ...shorthands.border('1px', 'solid', '#d1d5db'),
    cursor: 'pointer',
    transitionProperty: 'background-color, border-color, transform',
    transitionDuration: '0.2s',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      ...shorthands.borderColor('#9ca3af'),
      transform: 'translateY(-1px)',
    },
    '@media (max-width: 480px)': {
      width: '100%',
    },
  },
});

export const HeroSection = () => {
  const styles = useStyles();

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.container}>

        {/* ========================================== */}
        {/* 1. KONTEN UTAMA */}
        {/* ========================================== */}
        <div className={styles.contentBlock}>
          <span className={styles.kicker}>
            AXERA AI. INFRASTRUKTUR RISET ANDA.
          </span>

          <h1 className={styles.title}>
            Mulai analisis presisi dengan inovasi terbaru untuk Biomedis
          </h1>

          <Text block className={styles.subtitle}>
            Dapatkan lebih dari sekadar data mentah lewat pemrosesan mendalam dari
            model Axera AI tentang cara mengekstraksi, menskalakan, dan
            memvisualisasikan anomali klinis secara real-time.
          </Text>

          {/* 1.1 TOMBOL AKSI */}
          <div className={styles.buttonGroup}>
            <button type="button" className={styles.mainButton}>
              Mulai gunakan Axera
            </button>
            <button type="button" className={styles.outlineButton}>
              Lihat arsitektur sistem
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};