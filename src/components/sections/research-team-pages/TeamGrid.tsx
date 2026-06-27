'use client';

import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

interface AdvisorData {
  name: string;
  role: string;
  description: string;
  image: string;
}

const useStyles = makeStyles({
  sectionContainer: {
    backgroundColor: '#fafafa',
    ...shorthands.padding('80px', '5%'),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1200px',
  },
  sectionHeader: {
    textAlign: 'center',
    ...shorthands.margin('0', '0', '48px', '0'),
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#111827',
    letterSpacing: '-0.5px',
    ...shorthands.margin('0', '0', '16px', '0'),
  },
  divider: {
    width: '60px',
    height: '4px',
    backgroundColor: '#0067c0',
    ...shorthands.margin('0', 'auto'),
  },

  // --- STYLING KHUSUS DOSEN PEMBIMBING (ALA HPE) ---
  advisorFeatureCard: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    width: '100%',
    maxWidth: '1000px',
    ...shorthands.margin('0', 'auto', '80px', 'auto'),
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  advisorImageWrapper: {
    flexBasis: '40%',
    backgroundColor: '#f4f5f7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    minHeight: '350px',
  },
  advisorImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(15%)',
  },
  advisorContent: {
    flexBasis: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    ...shorthands.padding('56px', '48px'),
    '@media (max-width: 768px)': {
      ...shorthands.padding('32px', '24px'),
    },
  },
  advisorName: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#111827',
    letterSpacing: '-0.5px',
    lineHeight: '1.25',
    ...shorthands.margin('0', '0', '16px', '0'),
  },
  advisorRole: {
    fontSize: '18px',
    fontWeight: '400',
    color: '#4b5563',
    lineHeight: '1.5',
    ...shorthands.margin('0', '0', '24px', '0'),
  },
  advisorDesc: {
    fontSize: '16px',
    color: '#4b5563',
    lineHeight: '1.7',
    ...shorthands.margin('0'),
    whiteSpace: 'pre-line',
  },

  // --- STYLING UNTUK TIM INTI (GRID BAWAH) ---
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    position: 'relative',
    transitionProperty: 'box-shadow, transform',
    transitionDuration: '0.3s',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      backgroundColor: 'transparent',
      transition: 'background-color 0.3s',
    },
    ':hover': {
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
      transform: 'translateY(-4px)',
      '::before': {
        backgroundColor: '#0067c0',
      },
    },
  },
  imageWrapper: {
    width: '100%',
    // Rasio diubah menjadi 3:4 untuk mengakomodasi gambar vertikal seperti 600x800px
    aspectRatio: '3 / 4', 
    backgroundColor: '#f3f4f6',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(20%)',
    transition: 'filter 0.3s',
    ':hover': {
      filter: 'grayscale(0%)',
    },
  },
  cardContent: {
    ...shorthands.padding('24px'),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  name: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111827',
    ...shorthands.margin('0', '0', '4px', '0'),
  },
  role: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0067c0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    ...shorthands.margin('0', '0', '16px', '0'),
  },
  description: {
    fontSize: '14px',
    color: '#4b5563',
    lineHeight: '1.6',
    ...shorthands.margin('0'),
    flexGrow: 1,
  },
});

const advisorData: AdvisorData = {
  name: 'Ledy Elsera Astrianty, S.Kom., M.Kom.',
  role: 'Principal Investigator & Pembina Riset',
  description: 'Memberikan arahan strategis pada metodologi riset Sains Data dan memastikan validasi model Explainable AI yang dikembangkan tim selaras dengan standar akademik serta etika riset teknologi.',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
};

const teamData: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Sherlly Briliant Saputri',
    role: 'Ketua Tim',
    description: 'Memimpin koordinasi strategis proyek Axara XAI, memastikan keselarasan antara inovasi kecerdasan buatan dan tujuan utama riset tim.',
    image: '/research-team/photo-sherlly.webp',
  },
  {
    id: 'team-2',
    name: 'Syafiqka Emalinda Aflikha',
    role: 'Explainable AI Team',
    description: 'Fokus pada pengembangan kapabilitas interpretasi model AI, memastikan hasil prediksi data kompleks dapat dipahami dengan transparan.',
    image: '/research-team/photo-linda.webp',
  },
  {
    id: 'team-3',
    name: 'Risang Haryo Pamungkas Bimani Sakti',
    role: 'AI Innovation Team',
    description: 'Mengeksplorasi dan mengimplementasikan arsitektur model mutakhir, termasuk optimasi pipeline RAG pada ekosistem Azure OpenAI.',
    image: '/research-team/photo-risang.webp',
  },
  {
    id: 'team-4',
    name: 'Ica Nurcahya',
    role: 'Healthcare Research Team',
    description: 'Melakukan analisis mendalam pada dataset spesifik domain kesehatan dan mengawasi relevansi fungsional solusi AI dengan kebutuhan medis.',
    image: '/research-team/photo-icha.webp',
  },
  {
    id: 'team-5',
    name: 'Hartono Adji Susanto',
    role: 'Data & Development Team',
    description: 'Mengelola arsitektur infrastruktur digital, prapemrosesan dataset, serta inisiasi integrasi frontend dan komputasi cloud.',
    image: '/research-team/photo-hartono.webp',
  },
];

interface ProfileCardProps {
  member: TeamMember;
}

const ProfileCard = ({ member }: ProfileCardProps) => {
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={member.image} alt={`Foto ${member.name}`} className={styles.profileImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.name}>{member.name}</h3>
        <span className={styles.role}>{member.role}</span>
        <p className={styles.description}>{member.description}</p>
      </div>
    </div>
  );
};

export const TeamGrid = () => {
  const styles = useStyles();

  return (
    <section className={styles.sectionContainer} id="team-grid">
      <div className={styles.contentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Principal Investigator</h2>
          <div className={styles.divider} />
        </div>
        <div className={styles.advisorFeatureCard}>
          <div className={styles.advisorImageWrapper}>
            <img src={advisorData.image} alt={`Foto ${advisorData.name}`} className={styles.advisorImage} />
          </div>
          <div className={styles.advisorContent}>
            <h3 className={styles.advisorName}>{advisorData.name}</h3>
            <h4 className={styles.advisorRole}>{advisorData.role}</h4>
            <p className={styles.advisorDesc}>{advisorData.description}</p>
          </div>
        </div>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Tim Pengembang Utama</h2>
          <div className={styles.divider} />
        </div>
        <div className={styles.teamGrid}>
          {teamData.map((member) => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};