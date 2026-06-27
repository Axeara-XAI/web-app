'use client';

import { useEffect, useRef, useState } from 'react';
import { makeStyles, shorthands, mergeClasses } from '@fluentui/react-components';

// ==========================================
// 1. DATA INSTITUSI
// ==========================================
const institutionData = [
  {
    id: 'kemendikbud',
    logoPath: '/home-pages-asset/logo-kemendikbud.svg',
    name: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
    role: 'Sponsor Pendanaan Utama',
    quote: 'Mendorong lompatan inovasi teknologi medis karya anak bangsa melalui dukungan pendanaan Program Kreativitas Mahasiswa Riset Eksakta (PKM-RE) yang komprehensif dan berkelanjutan.'
  },
  {
    id: 'simbelmawa',
    logoPath: '/home-pages-asset/logo-simbelmawa.svg',
    name: 'SIMBELMAWA',
    role: 'Fasilitator Program Kampus Merdeka',
    quote: 'Menjadi wadah inkubasi yang memfasilitasi mahasiswa untuk mengimplementasikan ide kritis mereka ke dalam purwarupa teknologi kecerdasan buatan yang berdampak langsung bagi masyarakat.'
  },
  {
    id: 'uty',
    logoPath: '/home-pages-asset/logo-uty.svg',
    name: 'Universitas Teknologi Yogyakarta',
    role: 'Institusi Akademik & Inkubator Riset',
    quote: 'Menyediakan ekosistem akademik, fasilitas komputasi terpadu, dan bimbingan pakar untuk memastikan seluruh tahapan penelitian berjalan sesuai kaidah sains dan etika medis yang ketat.'
  },
];

const useStyles = makeStyles({
  // ==========================================
  // 2. LAYOUT UTAMA
  // ==========================================
  section: {
    backgroundColor: '#ffffff',
    ...shorthands.padding('100px', '5%'),
    fontFamily: '"Segoe UI Variable Display", "Segoe UI", "Inter", -apple-system, sans-serif',
    contain: 'content',
    '@media (max-width: 768px)': {
      ...shorthands.padding('60px', '5%'),
    },
  },
  container: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
    display: 'flex',
    flexDirection: 'column',
  },

  // ==========================================
  // 3. HEADER AREA
  // ==========================================
  headerArea: {
    textAlign: 'center',
    marginBottom: '56px',
  },
  kicker: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '12px',
    display: 'block',
  },
  title: {
    fontSize: '36px',
    fontWeight: '600',
    color: '#111827',
    marginTop: '0',
    marginBottom: '0',
    letterSpacing: '-0.5px',
    '@media (max-width: 768px)': {
      fontSize: '28px',
    },
  },

  // ==========================================
  // 4. STRUKTUR SLIDER NATIVE (SCROLL SNAP)
  // ==========================================
  sliderViewport: {
    width: '100%',
    ...shorthands.borderRadius('8px'),
    overflow: 'hidden',
  },
  sliderTrack: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  slideItem: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '100%',
    scrollSnapAlign: 'start',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: '0.8fr 1.2fr',
    gap: '4px',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
      gap: '0',
    },
  },

  // ==========================================
  // 5. KOTAK KIRI (AREA LOGO)
  // ==========================================
  logoBox: {
    backgroundColor: '#eef0f2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...shorthands.padding('60px', '40px'),
    minHeight: '300px',
    '@media (max-width: 900px)': {
      minHeight: '200px',
      ...shorthands.padding('40px', '20px'),
    },
  },
  logoImage: {
    width: '100%',
    maxWidth: '220px',
    height: 'auto',
    maxHeight: '100px',
    objectFit: 'contain',
  },

  // ==========================================
  // 6. KOTAK KANAN (AREA TEKS/KUTIPAN)
  // ==========================================
  quoteBox: {
    backgroundColor: '#f8fafc',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    ...shorthands.padding('60px', '60px'),
    minHeight: '300px',
    '@media (max-width: 900px)': {
      ...shorthands.padding('40px', '32px'),
      minHeight: 'auto',
    },
  },
  quoteText: {
    fontSize: '22px',
    fontWeight: '500',
    lineHeight: '1.5',
    color: '#111827',
    marginBottom: '32px',
    position: 'relative',
    ':before': {
      content: '"\\201C"',
      color: '#00A2E2',
      fontSize: '48px',
      lineHeight: '0',
      position: 'relative',
      top: '16px',
      marginRight: '8px',
      fontWeight: '800',
    },
    '@media (max-width: 768px)': {
      fontSize: '18px',
      marginBottom: '24px',
    },
  },
  authorArea: {
    display: 'flex',
    flexDirection: 'column',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#e5e7eb',
    ...shorthands.padding('20px', '0', '0', '0'),
    width: '100%',
  },
  authorName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '4px',
  },
  authorRole: {
    fontSize: '14px',
    color: '#6b7280',
    fontStyle: 'italic',
  },

  // ==========================================
  // 7. INDIKATOR PROGRESS/SLIDER (BAWAH)
  // ==========================================
  progressContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '6px',
    backgroundColor: '#e5e7eb',
    marginTop: '24px',
    gap: '4px',
  },
  progressSegment: {
    flex: 1,
    height: '100%',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    transitionProperty: 'background-color',
    transitionDuration: '0.3s',
    ':hover': {
      backgroundColor: '#d1d5db',
    },
  },
  progressFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#00A2E2',
    transformOrigin: 'left',
    transitionProperty: 'transform',
    transitionDuration: '0.4s',
  },
  progressFillActive: {
    transform: 'scaleX(1)',
  },
  progressFillInactive: {
    transform: 'scaleX(0)',
  },
});

export const CredibilitySection = () => {
  const styles = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (trackRef.current) {
      const scrollLeft = trackRef.current.scrollLeft;
      const slideWidth = trackRef.current.clientWidth;
      const newActiveIndex = Math.round(scrollLeft / slideWidth);

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    }
  };

  const scrollToSlide = (index: number) => {
    setActiveIndex(index);
    if (trackRef.current) {
      const slideWidth = trackRef.current.clientWidth;
      trackRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % institutionData.length;
      scrollToSlide(nextIndex);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className={styles.section} id="credibility">
      <div className={styles.container}>

        {/* ========================================== */}
        {/* 1. HEADER */}
        {/* ========================================== */}
        <div className={styles.headerArea}>
          <span className={styles.kicker}>
            Dukungan Riset & Pendanaan
          </span>
          <h2 className={styles.title}>
            Institusi pendukung inovasi medis
          </h2>
        </div>

        {/* ========================================== */}
        {/* 2. SLIDER KREDIBILITAS */}
        {/* ========================================== */}
        <div className={styles.sliderViewport}>
          <div
            className={styles.sliderTrack}
            ref={trackRef}
            onScroll={handleScroll}
          >
            {institutionData.map((institution) => (
              <article key={institution.id} className={styles.slideItem}>

                {/* 2.1 LOGO INSTITUSI */}
                <div className={styles.logoBox}>
                  <img
                    src={institution.logoPath}
                    alt={`Logo ${institution.name}`}
                    className={styles.logoImage}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* 2.2 KUTIPAN & PERAN */}
                <div className={styles.quoteBox}>
                  <p className={styles.quoteText}>
                    {institution.quote}
                  </p>
                  <div className={styles.authorArea}>
                    <span className={styles.authorName}>— {institution.name}</span>
                    <span className={styles.authorRole}>{institution.role}</span>
                  </div>
                </div>

              </article>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* 3. NAVIGASI SLIDER */}
        {/* ========================================== */}
        <div className={styles.progressContainer} aria-label="Slider navigation">
          {institutionData.map((_, index) => (
            <div
              key={index}
              className={styles.progressSegment}
              onClick={() => scrollToSlide(index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToSlide(index);
                }
              }}
            >
              <div
                className={mergeClasses(
                  styles.progressFill,
                  index === activeIndex ? styles.progressFillActive : styles.progressFillInactive
                )} 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};