'use client';

import Link from 'next/link';
import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  // ==========================================
  // 1. LAYOUT UTAMA
  // ==========================================
  footer: {
    backgroundColor: '#ffffff',
    color: '#111827',
    ...shorthands.padding('80px', '5%', '40px', '5%'),
    ...shorthands.borderTop('1px', 'solid', '#e5e7eb'),
    fontFamily: '"Segoe UI Variable Display", "Segoe UI", "Inter", -apple-system, sans-serif',
  },
  container: {
    maxWidth: '1300px',
    ...shorthands.margin('0', 'auto'),
    display: 'flex',
    flexDirection: 'column',
  },
  topSection: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '40px',
    marginBottom: '60px',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },

  // ==========================================
  // 2. AREA BRAND (LOGO & DESKRIPSI)
  // ==========================================
  brandArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '350px',
  },
  brandHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  brandLogo: {
    height: '50px',
    width: 'auto',
    objectFit: 'contain',
  },
  brandName: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#111827',
    letterSpacing: '-0.5px',
  },
  brandDesc: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#4b5563',
    marginBottom: '24px',
  },

  // ==========================================
  // 3. IKON MEDIA SOSIAL
  // ==========================================
  socialGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginTop: '8px',
  },
  socialIconWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'transform, opacity',
    transitionDuration: '0.2s',
    opacity: 0.7,
    ':hover': {
      opacity: 1,
      transform: 'translateY(-2px)',
    },
  },
  socialIconImg: {
    width: '24px',
    height: '24px',
    objectFit: 'contain',
  },

  // ==========================================
  // 4. MENU NAVIGASI (KOLOM)
  // ==========================================
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  colTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#111827',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '8px',
  },
  linkItem: {
    color: '#4b5563',
    textDecoration: 'none',
    fontSize: '15px',
    transitionProperty: 'color',
    transitionDuration: '0.2s',
    ':hover': {
      color: '#0067c0',
    }
  },

  // ==========================================
  // 5. COPYRIGHT & BOTTOM SECTION
  // ==========================================
  bottomSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '32px',
    borderTop: '1px solid #e5e7eb',
  },
  copyright: {
    fontSize: '14px',
    color: '#6b7280',
    textAlign: 'center',
  },
});

export const Footer = () => {
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* ========================================== */}
        {/* 1. BAGIAN ATAS */}
        {/* ========================================== */}
        <div className={styles.topSection}>

          {/* 1.1 BRAND & SOSIAL MEDIA */}
          <div className={styles.brandArea}>

            <div className={styles.brandHeader}>
              <img
                src="/navbar-asset/logo.svg"
                alt="Logo Axara XAI"
                className={styles.brandLogo}
              />
              <span className={styles.brandName}>Axara XAI</span>
            </div>

            <span className={styles.brandDesc}>
              Sistem analitik presisi berbasis Explainable AI dan infrastruktur Microsoft Azure. Mendukung inovasi riset biomedis melalui pemrosesan data maternal secara real-time.
            </span>

            {/* 1.1.1 IKON SOSIAL MEDIA */}
            <div className={styles.socialGroup}>
              <Link href="https://instagram.com" target="_blank" className={styles.socialIconWrap} aria-label="Instagram">
                <img src="/footer-asset/instagram-icon.svg" alt="Instagram" className={styles.socialIconImg} />
              </Link>
              <Link href="https://youtube.com" target="_blank" className={styles.socialIconWrap} aria-label="YouTube">
                <img src="/footer-asset/youtube-icon.svg" alt="YouTube" className={styles.socialIconImg} />
              </Link>
              <Link href="https://github.com" target="_blank" className={styles.socialIconWrap} aria-label="GitHub">
                <img src="/footer-asset/github-icon.svg" alt="GitHub" className={styles.socialIconImg} />
              </Link>
            </div>

          </div>

          {/* 1.2 JELAJAHI AXARA (Diubah dari Teknologi) */}
          <div className={styles.column}>
            <span className={styles.colTitle}>Jelajahi Axara</span>
            <Link href="#" className={styles.linkItem}>Apa itu Axara?</Link>
            <Link href="#" className={styles.linkItem}>Infrastruktur Axara</Link>
            <Link href="#" className={styles.linkItem}>Arsitektur</Link>
            <Link href="#" className={styles.linkItem}>ACloud</Link>
          </div>

          {/* 1.3 LUARAN RISET */}
          <div className={styles.column}>
            <span className={styles.colTitle}>Luaran Riset</span>
            <Link href="#" className={styles.linkItem}>Solusi</Link>
            <Link href="#" className={styles.linkItem}>Artikel Ilmiah</Link>
            <Link href="#" className={styles.linkItem}>Metodologi</Link>
          </div>

          {/* 1.4 DUKUNGAN (Diubah dari Tautan Terkait) */}
          <div className={styles.column}>
            <span className={styles.colTitle}>Dukungan</span>
            <Link href="#" className={styles.linkItem}>Kontak Kami</Link>
            <Link href="#" className={styles.linkItem}>Axara Assisten</Link>
          </div>

        </div>

        {/* ========================================== */}
        {/* 2. BAGIAN BAWAH */}
        {/* ========================================== */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Axara XAI. Hak Cipta Dilindungi Undang-Undang.
          </div>
        </div>

      </div>
    </footer>
  );
};