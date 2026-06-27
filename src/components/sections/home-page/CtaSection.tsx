'use client';

import { makeStyles, shorthands } from '@fluentui/react-components';
import { ArrowRight20Regular, DocumentArrowDown20Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  // ==========================================
  // 1. LAYOUT UTAMA
  // ==========================================
  section: {
    backgroundColor: '#00162a',
    ...shorthands.padding('120px', '5%'),
    fontFamily: '"Segoe UI Variable Display", "Segoe UI", "Inter", -apple-system, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      ...shorthands.padding('80px', '5%'),
    },
  },
  container: {
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  // ==========================================
  // 2. TIPOGRAFI
  // ==========================================
  kicker: {
    color: '#00A2E2',
    fontSize: '14px',
    fontWeight: '800',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    marginBottom: '24px',
  },
  title: {
    fontSize: '48px',
    fontWeight: '600',
    lineHeight: '1.2',
    color: '#ffffff',
    marginBottom: '24px',
    letterSpacing: '-1px',
    marginTop: '0',
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
    '@media (max-width: 480px)': {
      fontSize: '32px',
    },
  },
  desc: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#A0B0C0',
    marginBottom: '48px',
    '@media (max-width: 768px)': {
      fontSize: '16px',
      marginBottom: '32px',
    },
  },

  // ==========================================
  // 3. GRUP TOMBOL (CALL TO ACTION)
  // ==========================================
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      width: '100%',
    },
  },

  primaryBtn: {
    backgroundColor: '#00A2E2',
    color: '#ffffff',
    ...shorthands.borderRadius('999px'),
    ...shorthands.padding('16px', '32px'),
    fontSize: '16px',
    fontWeight: '700',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    transitionProperty: 'background-color, transform',
    transitionDuration: '0.2s',
    ':hover': {
      backgroundColor: '#008bc2',
      transform: 'scale(1.02)',
    },
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
});

export const CtaSection = () => {
  const styles = useStyles();

  return (
    <section className={styles.section} id="cta">
      <div className={styles.container}>

        {/* ========================================== */}
        {/* 1. KONTEN CTA */}
        {/* ========================================== */}
        <span className={styles.kicker}>Kesimpulan Riset</span>

        <h2 className={styles.title}>
          Siap mengeksplorasi masa depan komputasi medis?
        </h2>

        <p className={styles.desc}>
          Pelajari lebih dalam mengenai arsitektur Deep Learning dan integrasi Large Language Model yang kami kembangkan untuk mendeteksi risiko FGR. Akses laporan lengkap dan dokumentasi teknis sistem sekarang.
        </p>

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.primaryBtn}>
            Coba Analisis Sekarang <ArrowRight20Regular />
          </button>
        </div>

      </div>
    </section>
  );
};