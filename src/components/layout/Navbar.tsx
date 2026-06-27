'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { makeStyles, shorthands, mergeClasses } from '@fluentui/react-components';
import { ChevronDown20Regular, ChevronUp20Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  // ==========================================
  // 1. STRUKTUR UTAMA
  // ==========================================
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    ...shorthands.borderBottom('1px', 'solid', '#e5e7eb'),
    fontFamily: '"Segoe UI Variable Display", "Segoe UI", "Inter", -apple-system, sans-serif',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '72px',
    maxWidth: '1400px',
    ...shorthands.margin('0', 'auto'),
    ...shorthands.padding('0', '5%'),
    boxSizing: 'border-box',
    '@media (max-width: 1024px)': {
      justifyContent: 'center',
    },
  },

  // ==========================================
  // 2. AREA LOGO DAN BRAND
  // ==========================================
  brandArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
  },
  logoImage: {
    height: '40px',
    width: 'auto',
    display: 'block',
  },
  brandText: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111827',
    letterSpacing: '-0.5px',
  },

  // ==========================================
  // 3. MENU LINK NAVIGASI (TENGAH - DESKTOP)
  // ==========================================
  navArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    '@media (max-width: 1024px)': {
      display: 'none',
    },
  },
  navLink: {
    color: '#4b5563',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    transitionProperty: 'color',
    transitionDuration: '0.2s',
    ':hover': {
      color: '#0067c0',
    },
  },

  // ==========================================
  // 4. TOMBOL DAN INTERAKSI (KANAN - DESKTOP)
  // ==========================================
  actionArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    '@media (max-width: 1024px)': {
      display: 'none',
    },
  },
  loginLink: {
    color: '#111827',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transitionProperty: 'color',
    transitionDuration: '0.2s',
    ':hover': {
      color: '#0067c0',
    },
  },
  ctaButton: {
    backgroundColor: '#0067c0',
    color: '#ffffff',
    height: '40px',
    ...shorthands.padding('0', '24px'),
    fontSize: '14px',
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
  },

  // ==========================================
  // 5. GAYA MOBILE: SUB-HEADER (AZURE STYLE)
  // ==========================================
  mobileSubHeader: {
    display: 'none',
    '@media (max-width: 1024px)': {
      display: 'flex',
      alignItems: 'center',
      height: '48px',
      backgroundColor: '#ffffff',
      ...shorthands.padding('0', '5%'),
      ...shorthands.borderTop('1px', 'solid', '#f3f4f6'),
    },
  },
  mobileToggleBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'transparent',
    border: 'none',
    padding: '0',
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },

  // ==========================================
  // 6. GAYA MOBILE: DROPDOWN MENU
  // ==========================================
  mobileDropdownOverlay: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    ...shorthands.padding('8px', '5%', '24px', '5%'),
    ...shorthands.borderBottom('1px', 'solid', '#e5e7eb'),
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    flexDirection: 'column',
    gap: '8px',
  },
  mobileDropdownOpen: {
    '@media (max-width: 1024px)': {
      display: 'flex',
    },
  },
  mobileNavLink: {
    display: 'block',
    ...shorthands.padding('16px', '0'),
    ...shorthands.borderBottom('1px', 'solid', '#f3f4f6'),
    color: '#111827',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
  },
  mobileActionGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '16px',
  },
  mobileLoginBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '44px',
    width: '100%',
    backgroundColor: '#f3f4f6',
    color: '#111827',
    fontWeight: '600',
    fontSize: '15px',
    ...shorthands.borderRadius('4px'),
    textDecoration: 'none',
  },
  mobileCtaBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '44px',
    width: '100%',
    backgroundColor: '#0067c0',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '15px',
    ...shorthands.borderRadius('4px'),
    textDecoration: 'none',
  },
});

export const Navbar = () => {
  const styles = useStyles();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((currentValue) => !currentValue);
  };

  return (
    <header className={styles.header}>

      {/* ========================================== */}
      {/* 1. HEADER UTAMA */}
      {/* ========================================== */}
      <div className={styles.container}>

        {/* 1.1 BRANDING */}
        <Link href="/" className={styles.brandArea}>
          <img
            src="/navbar-asset/logo.svg"
            alt="Axara XAI Logo"
            className={styles.logoImage}
          />
          <span className={styles.brandText}>Axara</span>
        </Link>

        {/* 1.2 NAVIGASI DESKTOP */}
        <nav className={styles.navArea}>
          <Link href="/solution" className={styles.navLink}>Solusi</Link>
          <Link href="/arsitektur" className={styles.navLink}>Arsitektur</Link>
          <Link href="/research-team" className={styles.navLink}>Tim Peneliti</Link>
        </nav>

        {/* 1.3 AKSI PENGGUNA DESKTOP */}
        <div className={styles.actionArea}>
          <Link href="/login" className={styles.loginLink}>Masuk</Link>
          <button type="button" className={styles.ctaButton}>Mulai Analisis</button>
        </div>

      </div>

      {/* ========================================== */}
      {/* 2. SUB-HEADER MOBILE */}
      {/* ========================================== */}
      <div className={styles.mobileSubHeader}>
        <button
          type="button"
          className={styles.mobileToggleBtn}
          onClick={toggleMobileMenu}
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
        >
          Menu {isMobileMenuOpen ? <ChevronUp20Regular /> : <ChevronDown20Regular />}
        </button>
      </div>

      {/* ========================================== */}
      {/* 3. DROPDOWN MOBILE */}
      {/* ========================================== */}
      <div
        className={mergeClasses(
          styles.mobileDropdownOverlay,
          isMobileMenuOpen && styles.mobileDropdownOpen
        )}
        id="mobile-navigation"
      >
        {/* 3.1 TAUTAN NAVIGASI */}
        <Link href="/solution" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
          Solusi
        </Link>
        <Link href="/methodology" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
          Metodologi
        </Link>
        <Link href="/research-team" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
          Tim Peneliti
        </Link>

        {/* 3.2 AKSI MOBILE */}
        <div className={styles.mobileActionGroup}>
          <Link href="/login" className={styles.mobileLoginBtn} onClick={toggleMobileMenu}>
            Masuk
          </Link>
          <Link href="/analisis" className={styles.mobileCtaBtn} onClick={toggleMobileMenu}>
            Mulai Analisis
          </Link>
        </div>
      </div>

    </header>
  );
};