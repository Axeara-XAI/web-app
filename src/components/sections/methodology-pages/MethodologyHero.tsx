'use client';

import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { ArrowDownload20Regular, ChevronRight20Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  heroContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%', // Memastikan container membentang penuh
    minHeight: '75vh',
    boxSizing: 'border-box', // Mencegah padding merusak kalkulasi lebar
    overflow: 'hidden',
    
    // Gambar latar belakang penuh
    backgroundImage: 'url("https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2064&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Diubah ke center agar gambar tidak tertarik ke salah satu sisi
    backgroundRepeat: 'no-repeat', // Memastikan gambar tidak berulang
    backgroundColor: '#0f172a',
  },

  gradientOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%', // Memastikan gradasi juga menutupi area penuh
    background: 'linear-gradient(90deg, #0f172a 45%, rgba(15, 23, 42, 0.85) 60%, rgba(15, 23, 42, 0) 100%)',
    zIndex: 1,
    '@media (max-width: 1024px)': {
      background: 'linear-gradient(180deg, #0f172a 50%, rgba(15, 23, 42, 0.95) 100%)',
    },
  },

  textContent: {
    position: 'relative',
    zIndex: 2,
    width: '55%', 
    ...shorthands.padding('0', '5%'),
    '@media (max-width: 1024px)': {
      width: '100%',
      ...shorthands.padding('80px', '5%'),
    },
  },
  
  overline: {
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: '700',
    color: '#38bdf8', 
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    ...shorthands.margin('0', '0', '24px', '0'),
  },

  titleWrapper: {
    borderLeftWidth: '6px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#0067c0', 
    ...shorthands.padding('0', '0', '0', '24px'),
    ...shorthands.margin('0', '0', '24px', '0'),
  },
  
  title: {
    fontSize: '48px',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1.15',
    letterSpacing: '-1px',
    maxWidth: '650px',
    ...shorthands.margin('0'), 
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
  },
  
  description: {
    fontSize: '18px',
    color: '#94a3b8',
    lineHeight: '1.6',
    maxWidth: '550px',
    ...shorthands.margin('0', '0', '48px', '0'),
  },
  
  buttonGroup: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  
  primaryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#ffffff',
    color: '#0f172a',
    fontWeight: '700',
    fontSize: '15px',
    ...shorthands.padding('12px', '28px'),
    ...shorthands.borderRadius('100px'),
    border: 'none',
    cursor: 'pointer',
    transitionProperty: 'background-color, transform',
    transitionDuration: '0.2s',
    ':hover': {
      backgroundColor: '#e2e8f0',
      transform: 'translateY(-2px)',
    },
  },
  
  secondaryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '15px',
    ...shorthands.padding('12px', '28px'),
    ...shorthands.borderRadius('100px'),
    ...shorthands.border('2px', 'solid', '#0067c0'),
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '0.2s',
    ':hover': {
      backgroundColor: 'rgba(0, 103, 192, 0.2)',
    },
  },
});

export const MethodologyHero = () => {
  const styles = useStyles();

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' });
  };

  return (
    <section className={styles.heroContainer}>
      
      {/* Overlay Gradasi yang menyatu dengan gambar */}
      <div className={styles.gradientOverlay} />
      
      {/* Konten Teks */}
      <div className={styles.textContent}>
        <span className={styles.overline}>Metodologi Riset</span>
        
        {/* Judul dengan aksen garis vertikal di kirinya */}
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>
            Arsitektur Deep Learning & Pendekatan Klinis
          </h1>
        </div>
        
        <p className={styles.description}>
          Penelitian ini mengonvergensikan pemodelan prediktif, analisis eksplanatori (XAI), dan interpretasi naratif (LLM) ke dalam satu ekosistem sistem pendukung keputusan yang transparan dan akurat.
        </p>

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.primaryBtn} onClick={handleScrollDown}>
            Lihat Tahapan Riset <ChevronRight20Regular />
          </button>
          <button type="button" className={styles.secondaryBtn}>
            Unduh Proposal <ArrowDownload20Regular />
          </button>
        </div>
      </div>

    </section>
  );
};