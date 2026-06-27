'use client';

import { Text, makeStyles, shorthands } from '@fluentui/react-components';
import {
  ArrowRight20Regular,
  DatabaseSearch24Regular,
  BrainCircuit24Regular,
  DocumentText24Regular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  // ==========================================
  // 1. LAYOUT UTAMA
  // ==========================================
  section: {
    backgroundColor: '#00101c',
    fontFamily: '"Segoe UI Variable Display", "Segoe UI", "Inter", -apple-system, sans-serif',
    contain: 'content',
  },

  // ==========================================
  // 2. TOP FEATURE BLOCK
  // ==========================================
  topFeatureBlock: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    backgroundColor: '#001A2F',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
  topFeatureImageWrapper: {
    width: '100%',
    height: '100%',
    minHeight: '400px',
    position: 'relative',
    overflow: 'hidden',
  },
  topFeatureImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  topFeatureTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    ...shorthands.padding('80px', '10%', '80px', '8%'),
  },
  topTitle: {
    fontSize: '36px',
    fontWeight: '300',
    lineHeight: '1.2',
    color: '#ffffff',
    marginBottom: '24px',
    letterSpacing: '-0.5px',
  },
  topDesc: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#e5e7eb',
    marginBottom: '32px',
    fontWeight: '400',
  },
  learnMoreBtn: {
    backgroundColor: '#0067c0',
    color: '#ffffff',
    height: '40px',
    ...shorthands.padding('0', '24px'),
    fontSize: '14px',
    fontWeight: '600',
    ...shorthands.borderRadius('2px'),
    border: 'none',
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '0.2s',
    ':hover': {
      backgroundColor: '#005bb5',
    },
  },

  // ==========================================
  // 3. BOTTOM GRID
  // ==========================================
  bottomGridContainer: {
    backgroundColor: '#00162a',
    ...shorthands.padding('80px', '5%'),
  },
  gridArea: {
    maxWidth: '1400px',
    ...shorthands.margin('0', 'auto'),
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
      gap: '48px',
    },
  },

  stepItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  iconBox: {
    color: '#00A2E2',
    fontSize: '28px',
    marginBottom: '24px',
  },
  stepTitle: {
    fontSize: '24px',
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: '16px',
  },
  stepDesc: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#A0B0C0',
    marginBottom: '24px',
  },
  stepLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '400',
    color: '#A0B0C0',
    textDecoration: 'none',
    marginTop: 'auto',
    cursor: 'pointer',
    transitionProperty: 'color',
    transitionDuration: '0.2s',
    ':hover': {
      color: '#ffffff',
    },
  },
});

export const WorkflowSection = () => {
  const styles = useStyles();

  return (
    <section className={styles.section} id="workflow">

      {/* ========================================== */}
      {/* 1. TOP FEATURE BLOCK */}
      {/* ========================================== */}
      <div className={styles.topFeatureBlock}>
        <div className={styles.topFeatureImageWrapper}>
          <img
            src="/home-pages-asset/workflow-image-1.jpg"
            alt="Arsitektur Jaringan Saraf Tiruan AI"
            className={styles.topFeatureImage}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={styles.topFeatureTextWrapper}>
          <h2 className={styles.topTitle}>
            Tinjau Arsitektur Kecerdasan Buatan Medis
          </h2>
          <Text block className={styles.topDesc}>
            Dari komputasi Deep Learning mutakhir hingga sintesis Large Language Model, pelajari tahapan sistem kami mengubah 18 atribut riwayat klinis maternal menjadi keputusan medis yang transparan.
          </Text>
          <button type="button" className={styles.learnMoreBtn}>
            Pelajari Model
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. BOTTOM GRID */}
      {/* ========================================== */}
      <div className={styles.bottomGridContainer}>
        <div className={styles.gridArea}>

          {/* 2.1 PRE-PROCESSING */}
          <div className={styles.stepItem}>
            <div className={styles.iconBox}>
              <DatabaseSearch24Regular />
            </div>
            <h3 className={styles.stepTitle}>Pra-pemrosesan Data</h3>
            <Text block className={styles.stepDesc}>
              Dataset klinis dibersihkan dari <i>missing values</i> dan pencilan. Sistem menyeleksi 18 atribut klinis paling relevan seperti hipertensi dan anemia untuk distandardisasi sebelum proses pelatihan.
            </Text>
            <div className={styles.stepLink}>
              Jelajahi akuisisi data <ArrowRight20Regular />
            </div>
          </div>

          {/* 2.2 AI MODELING */}
          <div className={styles.stepItem}>
            <div className={styles.iconBox}>
              <BrainCircuit24Regular />
            </div>
            <h3 className={styles.stepTitle}>Pemodelan DNN & XAI</h3>
            <Text block className={styles.stepDesc}>
              Model klasifikasi dibangun menggunakan <i>Deep Neural Network</i> (DNN). Kami membedah faktor pemicu utama FGR secara terbuka memanfaatkan teori matematis <i>Shapley values</i> pada SHAP.
            </Text>
            <div className={styles.stepLink}>
              Jelajahi transparansi model <ArrowRight20Regular />
            </div>
          </div>

          {/* 2.3 LLM SYNTHESIS */}
          <div className={styles.stepItem}>
            <div className={styles.iconBox}>
              <DocumentText24Regular />
            </div>
            <h3 className={styles.stepTitle}>Sintesis Narasi Gemini</h3>
            <Text block className={styles.stepDesc}>
              Angka analitik ditransformasikan menjadi laporan klinis otomatis menggunakan API Gemini. Menghasilkan informasi presisi dan saran medis seketika sebagai <i>second opinion</i> tenaga kesehatan.
            </Text>
            <div className={styles.stepLink}>
              Jelajahi integrasi LLM <ArrowRight20Regular />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};