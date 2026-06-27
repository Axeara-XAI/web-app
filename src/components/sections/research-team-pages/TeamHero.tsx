'use client';

import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { ArrowDown20Regular } from '@fluentui/react-icons';

const TEAM_GRID_ID = 'team-grid';

const useStyles = makeStyles({
  heroContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight: '75vh',
    boxSizing: 'border-box',
    overflow: 'hidden',
    backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#0f172a',
  },

  gradientOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
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
  
  primaryBtn: {
    display: 'inline-flex',
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
});

export const TeamHero = () => {
  const styles = useStyles();

  const handleScrollDown = () => {
    const teamGrid = document.getElementById(TEAM_GRID_ID);

    if (teamGrid) {
      teamGrid.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroContainer}>
      <div className={styles.gradientOverlay} />

      <div className={styles.textContent}>
        <span className={styles.overline}>Tim Peneliti</span>

        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Penggerak di Balik Inovasi Axara XAI</h1>
        </div>

        <p className={styles.description}>
          Kami adalah tim peneliti dari Universitas Teknologi Yogyakarta yang berdedikasi
          untuk menciptakan solusi kecerdasan buatan medis yang transparan, dapat dijelaskan,
          dan aman digunakan.
        </p>

        <button type="button" className={styles.primaryBtn} onClick={handleScrollDown}>
          Lihat Susunan Tim <ArrowDown20Regular />
        </button>
      </div>
    </section>
  );
};