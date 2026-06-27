'use client';

import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  sectionContainer: {
    backgroundColor: '#ffffff', // Warna latar bersih khas enterprise
    ...shorthands.padding('100px', '5%'),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1200px',
  },
  sectionHeader: {
    textAlign: 'center',
    ...shorthands.margin('0', '0', '100px', '0'),
  },
  sectionTitle: {
    fontSize: '40px',
    fontWeight: '700',
    color: '#111827',
    letterSpacing: '-1px',
    ...shorthands.margin('0'),
  },

  // --- TATA LETAK ZIGZAG (HPE Style) ---
  featureRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '64px',
    ...shorthands.margin('0', '0', '120px', '0'),
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '40px',
      ...shorthands.margin('0', '0', '80px', '0'),
    },
  },
  featureRowReverse: {
    display: 'flex',
    alignItems: 'center',
    gap: '64px',
    flexDirection: 'row-reverse', 
    ...shorthands.margin('0', '0', '20px', '0'),
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '40px',
      ...shorthands.margin('0', '0', '80px', '0'),
    },
  },

  // --- BAGIAN GAMBAR (Diperbarui dengan Fallback Background) ---
  imageColumn: {
    flexBasis: '50%',
    position: 'relative',
    ...shorthands.borderRadius('12px'),
    overflow: 'hidden',
    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
    borderLeft: '8px solid #0067c0', // Aksen biru Axara di kiri
    backgroundColor: '#f3f4f6', // Warna latar saat gambar loading
    minHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageColumnReverse: {
    flexBasis: '50%',
    position: 'relative',
    ...shorthands.borderRadius('12px'),
    overflow: 'hidden',
    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
    borderRight: '8px solid #0067c0', // Aksen biru Axara di kanan
    backgroundColor: '#f3f4f6', // Warna latar saat gambar loading
    minHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%', // Mengisi penuh container
    aspectRatio: '4 / 3',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease',
    ':hover': {
      transform: 'scale(1.03)', // Efek zoom lambat saat kursor diarahkan
    },
  },

  // --- BAGIAN TEKS ---
  textColumn: {
    flexBasis: '50%',
  },
  cardHeading: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#111827',
    lineHeight: '1.2',
    letterSpacing: '-0.5px',
    ...shorthands.margin('0', '0', '32px', '0'),
  },
  subHeading: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0067c0', // Aksen teks biru
    textTransform: 'uppercase',
    letterSpacing: '1px',
    ...shorthands.margin('0', '0', '12px', '0'),
  },
  list: {
    paddingLeft: '20px',
    color: '#4b5563',
    lineHeight: '1.7',
    fontSize: '16px',
    ...shorthands.margin('0', '0', '32px', '0'),
  },
  listItem: {
    ...shorthands.margin('0', '0', '8px', '0'),
  },
});

export const MethodologyVariables = () => {
  const styles = useStyles();

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Parameter & Lingkungan Komputasi</h2>
        </div>
        
        {/* ========================================= */}
        {/* BARIS 1: Gambar di Kiri, Teks di Kanan */}
        {/* ========================================= */}
        <div className={styles.featureRow}>
          <div className={styles.imageColumn}>
            <img 
              src="https://img.freepik.com/free-vector/medical-research-concept-illustration_114360-6395.jpg" 
              alt="Ilustrasi Data Medis" 
              className={styles.image} 
            />
          </div>
          
          <div className={styles.textColumn}>
            <h3 className={styles.cardHeading}>Variabel Klinis Maternal (Bebas)</h3>
            
            <h4 className={styles.subHeading}>Demografi & Kebiasaan</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>Usia Ibu (MAGE) & Usia Ayah (FAGE)</li>
              <li className={styles.listItem}>Pendidikan (MEDUC, FEDUC) & Ras (RACEMOM, RACEDAD)</li>
              <li className={styles.listItem}>Konsumsi Rokok (CIGNUM) & Alkohol (DRINKNUM)</li>
            </ul>
            
            <h4 className={styles.subHeading}>Klinis & Riwayat Medis</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>Kenaikan Berat Badan (GAINED) & Hemoglobin (HEMOGLOB)</li>
              <li className={styles.listItem}>Riwayat Penyakit (Anemia, Diabetes, Jantung, Ginjal)</li>
              <li className={styles.listItem}>Masalah Kehamilan (Hipertensi, Eklamsia) & Ketuban (HYDRAM)</li>
            </ul>

            <h4 className={styles.subHeading}>Faktor Paritas</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>Kunjungan Antenatal (VISITS) & Usia Kehamilan (WEEKS)</li>
              <li className={styles.listItem}>Riwayat Prematur (PRETERM) & Kelahiran Mati (BDEAD)</li>
            </ul>
          </div>
        </div>

        {/* ========================================= */}
        {/* BARIS 2: Teks di Kiri, Gambar di Kanan */}
        {/* ========================================= */}
        <div className={styles.featureRowReverse}>
          <div className={styles.imageColumnReverse}>
            <img 
              src="https://img.freepik.com/free-vector/cloud-computing-security-concept-illustration_114360-8438.jpg" 
              alt="Ilustrasi Infrastruktur Server" 
              className={styles.image} 
            />
          </div>

          <div className={styles.textColumn}>
            <h3 className={styles.cardHeading}>Target & Infrastruktur Teknologi</h3>
            
            <h4 className={styles.subHeading}>Variabel Terikat & Kontrol</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>Target:</strong> BWEIGHT (Berat Badan Lahir) sebagai penentu utama Fetal Growth Restriction (FGR).
              </li>
              <li className={styles.listItem}>
                <strong>Kontrol:</strong> ID, SEX (Jenis Kelamin Janin), Versi API LLM Gemini, dan Hyperparameter Arsitektur Model.
              </li>
            </ul>

            <h4 className={styles.subHeading}>Lingkungan Komputasi</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}><strong>Komputasi Model:</strong> Google Colab Pro (GPU), TensorFlow/PyTorch, Scikit-learn, Pandas, NumPy.</li>
              <li className={styles.listItem}><strong>Explainability & NLP:</strong> Modul SHAP, API Google Gemini LLM.</li>
              <li className={styles.listItem}><strong>Deployment:</strong> GitHub, Hosting & Domain (Streamlit/Flask).</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};