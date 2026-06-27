'use client';

import { Text, makeStyles, shorthands } from '@fluentui/react-components';
import {
  Cloud24Regular,
  ShieldLock24Regular,
  LockClosed24Regular,
  DataBarHorizontal24Regular,
  ArrowRight20Regular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  // ==========================================
  // 1. LAYOUT UTAMA
  // ==========================================
  section: {
    backgroundColor: '#ffffff',
    ...shorthands.padding('140px', '5%'),
    fontFamily: '"Segoe UI Variable Display", "Segoe UI", "Inter", -apple-system, sans-serif',
    contain: 'content',
    '@media (max-width: 900px)': {
      ...shorthands.padding('80px', '5%'),
    },
  },
  container: {
    maxWidth: '1400px',
    ...shorthands.margin('0', 'auto'),
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '80px',
    alignItems: 'flex-start',
    position: 'relative',

    '@media (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
      gap: '48px',
    },
  },

  // ==========================================
  // 2. KOLOM KIRI
  // ==========================================
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'sticky',
    top: '120px',
    '@media (max-width: 1024px)': {
      position: 'relative',
      top: 0,
    },
  },
  title: {
    fontSize: '56px',
    fontWeight: '600',
    lineHeight: '1.1',
    color: '#111827',
    marginBottom: '24px',
    letterSpacing: '-1.5px',
    marginTop: '0',
    '@media (max-width: 900px)': {
      fontSize: '40px',
      letterSpacing: '-1px',
    },
    '@media (max-width: 480px)': {
      fontSize: '32px',
      letterSpacing: '-0.5px',
    },
  },
  subtitle: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#4b5563',
    marginBottom: '32px',
    '@media (max-width: 480px)': {
      fontSize: '16px',
    },
  },

  // ==========================================
  // 3. KOLOM KANAN
  // ==========================================
  rightColumn: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '48px 40px',

    '@media (max-width: 640px)': {
      gridTemplateColumns: '1fr',
      gap: '32px',
    },
  },
  featureItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  iconBox: {
    marginBottom: '24px',
    color: '#0067c0',
    fontSize: '48px',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 480px)': {
      fontSize: '40px',
      marginBottom: '16px',
    },
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '12px',
  },
  featureDesc: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#4b5563',
    marginBottom: '24px',
  },

  // ==========================================
  // 4. TAUTAN TINDAKAN
  // ==========================================
  featureLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    ...shorthands.borderBottom('1px', 'solid', '#e5e7eb'),
    ...shorthands.padding('0', '0', '12px', '0'),
    fontSize: '15px',
    fontWeight: '600',
    color: '#111827',
    textDecoration: 'none',
    marginTop: 'auto',
    cursor: 'pointer',
    transitionProperty: 'border-color, color',
    transitionDuration: '0.3s',
    ':hover': {
      color: '#0067c0',
      ...shorthands.borderColor('#0067c0'),
    },
  },
});

export const AzureInfraSection = () => {
  const styles = useStyles();

  return (
    <section className={styles.section} id="infrastructure">
      <div className={styles.container}>

        {/* 1. KOLOM KIRI */}
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>
            Aman kapan pun, di mana pun—tanpa kompleksitas.
          </h2>
          <Text block className={styles.subtitle}>
            Sistem AXARA diimplementasikan ke dalam kerangka kerja aplikasi web terintegrasi yang didukung oleh infrastruktur cloud global untuk menjamin stabilitas dan keamanan riset klinis.
          </Text>
        </div>

        {/* 2. KOLOM KANAN */}
        <div className={styles.rightColumn}>

          {/* 2.1 MICROSOFT AZURE */}
          <div className={styles.featureItem}>
            <div className={styles.iconBox}>
              <Cloud24Regular />
            </div>
            <h3 className={styles.featureTitle}>Microsoft Azure Cloud</h3>
            <Text block className={styles.featureDesc}>
              Menjalankan arsitektur komputasi Deep Neural Network pada virtual machine Azure untuk memastikan skalabilitas pemrosesan data maternal berskala besar secara real-time.
            </Text>
            <div className={styles.featureLink}>
              <span>Arsitektur Cloud</span> <ArrowRight20Regular />
            </div>
          </div>

          {/* 2.2 EDGE SECURITY */}
          <div className={styles.featureItem}>
            <div className={styles.iconBox}>
              <ShieldLock24Regular />
            </div>
            <h3 className={styles.featureTitle}>Cloudflare Edge Security</h3>
            <Text block className={styles.featureDesc}>
              Melindungi antarmuka web dan API Gemini dari serangan siber menggunakan perlindungan DDoS proaktif dan Content Delivery Network (CDN) dari Cloudflare.
            </Text>
            <div className={styles.featureLink}>
              <span>Keamanan Jaringan</span> <ArrowRight20Regular />
            </div>
          </div>

          {/* 2.3 ANONIMISASI DATA */}
          <div className={styles.featureItem}>
            <div className={styles.iconBox}>
              <LockClosed24Regular />
            </div>
            <h3 className={styles.featureTitle}>Anonimisasi Data Klinis</h3>
            <Text block className={styles.featureDesc}>
              Memastikan privasi pasien tetap terjaga sesuai standar etika medis, di mana sumber data riwayat klinis yang diolah sistem telah teranonimisasi sepenuhnya.
            </Text>
            <div className={styles.featureLink}>
              <span>Kebijakan Privasi</span> <ArrowRight20Regular />
            </div>
          </div>

          {/* 2.4 VALIDASI METRIK */}
          <div className={styles.featureItem}>
            <div className={styles.iconBox}>
              <DataBarHorizontal24Regular />
            </div>
            <h3 className={styles.featureTitle}>Validasi Metrik Ketat</h3>
            <Text block className={styles.featureDesc}>
              Keandalan infrastruktur model divalidasi menggunakan metrik AUC-ROC dan F1-Score, memastikan keluaran prediksi klasifikasi FGR selalu berada dalam standar tertinggi.
            </Text>
            <div className={styles.featureLink}>
              <span>Evaluasi Model</span> <ArrowRight20Regular />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};