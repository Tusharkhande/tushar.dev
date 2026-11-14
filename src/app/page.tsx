import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Section dividers */}
        <div style={{ background: 'var(--border-subtle)', height: '1px' }} />
        <ProjectGrid />

        <div style={{ background: 'var(--border-subtle)', height: '1px' }} />
        <ExperienceTimeline />

        <div style={{ background: 'var(--border-subtle)', height: '1px' }} />
        <SkillsSection />

        <div style={{ background: 'var(--border-subtle)', height: '1px' }} />
        <EducationSection />

        <div style={{ background: 'var(--border-subtle)', height: '1px' }} />
        <AboutSection />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
