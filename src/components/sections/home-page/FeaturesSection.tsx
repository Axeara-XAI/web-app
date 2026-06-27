'use client';

import { Text, makeStyles, mergeClasses, shorthands } from '@fluentui/react-components';
import { ChevronRight20Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  // ==========================================
  // 1. LAYOUT UTAMA
  // ==========================================
  section: {
    backgroundColor: '#ffffff',
    ...shorthands.padding('80px', '5%', '140px', '5%'),
    fontFamily: '"Segoe UI Variable Display", "Segoe UI", "Inter", -apple-system, sans-serif',
    contain: 'content',
  },
  container: {
    maxWidth: '1400px',
    ...shorthands.margin('0', 'auto'),
  },

  // ==========================================
  // 2. HEADER AREA
  // ==========================================
  headerArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '48px',
    maxWidth: '65%',
    '@media (max-width: 900px)': {
      maxWidth: '100%',
    },
  },
  title: {
    fontSize: '48px',
    fontWeight: '300',
    lineHeight: '1.1',
    color: '#111827',
    marginBottom: '0',
    letterSpacing: '-1px',
    '@media (max-width: 900px)': {
      fontSize: '36px',
    },
  },

  // ==========================================
  // 3. GRID KARTU
  // ==========================================
  gridArea: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
      gap: '24px',
    },
  },

  // ==========================================
  // 4. DESAIN KARTU
  // ==========================================
  card: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    backgroundColor: '#f8fafc',
    ...shorthands.border('1px', 'solid', '#e5e7eb'),
    cursor: 'pointer',
    willChange: 'transform, box-shadow',
    transitionProperty: 'box-shadow, transform',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    ':hover': {
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.06)',
      transform: 'translateY(-4px)',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  cardFeatured: {
    gridColumn: '1 / -1',
    '@media (max-width: 1024px)': {
      gridColumn: '1',
    },
  },

  cardContent: {
    ...shorthands.padding('40px'),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: '28px',
    fontWeight: '300',
    lineHeight: '1.2',
    color: '#111827',
    marginBottom: '16px',
  },
  cardDesc: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#4b5563',
    marginBottom: '40px',
  },
  cardAction: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '15px',
    fontWeight: '700',
    color: '#0067c0',
    textDecoration: 'none',
    marginTop: 'auto',
  },

  cardImageWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    aspectRatio: '4 / 3',
    backgroundColor: '#e5e7eb',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export const FeaturesSection = () => {
  const styles = useStyles();

  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>

        {/* ========================================== */}
        {/* 1. HEADER */}
        {/* ========================================== */}
        <div className={styles.headerArea}>
          <h2 className={styles.title}>
            Mendefinisikan ulang deteksi FGR melalui transparansi kecerdasan buatan
          </h2>
        </div>

        {/* ========================================== */}
        {/* 2. GRID FITUR */}
        {/* ========================================== */}
        <div className={styles.gridArea}>

          {/* 2.1 FITUR UTAMA */}
          <article className={mergeClasses(styles.card, styles.cardFeatured)}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Pemodelan Terbuka (Glass-Box Model)
              </h3>
              <Text block className={styles.cardDesc}>
                Kami meninggalkan pendekatan black-box tradisional. AXARA memadukan ketangguhan Deep Neural Network (DNN) dan metode SHapley Additive exPlanations (SHAP) untuk membedah hierarki variabel klinis pemicu FGR secara transparan agar mudah divalidasi oleh dokter spesialis.
              </Text>
              <div className={styles.cardAction}>
                Pelajari metode XAI <ChevronRight20Regular />
              </div>
            </div>
            <div className={styles.cardImageWrapper}>
              <img
                src="/home-pages-asset/feature-image-1.jpg"
                alt="Data analitik terbuka pada layar monitor"
                className={styles.cardImage}
                decoding="async"
              />
            </div>
          </article>

          {/* 2.2 FITUR KEDUA */}
          <article className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Generator Narasi Medis
              </h3>
              <Text block className={styles.cardDesc}>
                Integrasi Large Language Model (LLM) Gemini mentransformasikan angka komputasi yang rumit menjadi laporan deskriptif dan saran klinis berbahasa Indonesia. Sebuah <i>second opinion</i> virtual bagi tenaga kesehatan di pelosok.
              </Text>
              <div className={styles.cardAction}>
                Lihat simulasi LLM <ChevronRight20Regular />
              </div>
            </div>
            <div className={styles.cardImageWrapper}>
              <img
                src="/home-pages-asset/feature-image-2.jpg"
                alt="Baris kode kecerdasan buatan"
                className={styles.cardImage}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          {/* 2.3 FITUR KETIGA */}
          <article className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Klasifikasi Risiko Presisi
              </h3>
              <Text block className={styles.cardDesc}>
                Memproses masukan 18 parameter data klinis maternal—mulai dari riwayat hipertensi, nilai hemoglobin, hingga anomali kehamilan—untuk memberikan keputusan prediksi yang kuat dan telah teruji melalui validasi silang metrik AUC-ROC.
              </Text>
              <div className={styles.cardAction}>
                Tinjau metrik klasifikasi <ChevronRight20Regular />
              </div>
            </div>
            <div className={styles.cardImageWrapper}>
              <img
                src="/home-pages-asset/feature-image-3.jpg"
                alt="Tenaga medis meninjau hasil laboratorium"
                className={styles.cardImage}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};