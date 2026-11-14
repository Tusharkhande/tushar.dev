'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

const techLabels = ['Java', 'Spring Boot', 'React', 'REST APIs', 'Microservices', 'Oracle SQL', 'React Native'];

const bgNodes = [
  { x: 72, y: 28 },
  { x: 28, y: 62 },
  { x: 85, y: 58 },
  { x: 55, y: 78 },
  { x: 42, y: 35 },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [imgError, setImgError] = useState(false);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background architecture illustration */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {/* API flow lines */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', inset: 0, opacity: 0.4 }}
        >
          {/* Service nodes */}
          <circle cx="720" cy="180" r="40" stroke="#FF6A35" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="820" cy="300" r="30" stroke="#27272A" strokeWidth="0.5" />
          <circle cx="680" cy="380" r="35" stroke="#27272A" strokeWidth="0.5" />
          <circle cx="900" cy="180" r="25" stroke="#27272A" strokeWidth="0.5" strokeDasharray="3 3" />

          {/* Connection lines */}
          <line x1="720" y1="220" x2="820" y2="270" stroke="#27272A" strokeWidth="0.5" strokeDasharray="5 5" />
          <line x1="820" y1="320" x2="720" y2="360" stroke="#27272A" strokeWidth="0.5" strokeDasharray="5 5" />
          <line x1="720" y1="180" x2="900" y2="180" stroke="#FF6A35" strokeWidth="0.3" strokeDasharray="4 6" opacity="0.5" />

          {/* Labels */}
          <text x="695" y="180" fill="#FF6A35" fontSize="8" fontFamily="monospace" textAnchor="middle">API</text>
          <text x="820" y="303" fill="#3F3F46" fontSize="7" fontFamily="monospace" textAnchor="middle">SVC</text>
          <text x="680" y="383" fill="#3F3F46" fontSize="7" fontFamily="monospace" textAnchor="middle">DB</text>

          {/* Data flow packets */}
          <circle cx="760" cy="245" r="2" fill="#FF6A35" opacity="0.6" />
          <circle cx="770" cy="340" r="2" fill="#FF6A35" opacity="0.3" />

          {/* JWT indicator */}
          <rect x="640" y="440" width="80" height="16" rx="2" stroke="#27272A" strokeWidth="0.5" fill="none" />
          <text x="680" y="452" fill="#3F3F46" fontSize="7" fontFamily="monospace" textAnchor="middle">JWT</text>

          {/* Kafka label */}
          <rect x="860" y="380" width="80" height="16" rx="2" stroke="#27272A" strokeWidth="0.5" fill="none" />
          <text x="900" y="392" fill="#3F3F46" fontSize="7" fontFamily="monospace" textAnchor="middle">KAFKA</text>
        </svg>
      </div>

      <div className="container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 400px',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left: Introduction */}
          <div>
            {/* Label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <span className="section-label">FULL STACK SOFTWARE ENGINEER · JAVA &amp; MODERN WEB</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              Building scalable
              <br />
              full-stack systems
              <br />
              <span style={{ color: 'var(--accent)' }}>with a backend core.</span>
            </h1>

            {/* Supporting text */}
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '52ch',
                marginBottom: '2rem',
              }}
            >
              I'm Tushar Khande, a Full Stack Developer specializing in Java, Spring Boot, REST APIs, and microservices, alongside modern React frontends and React Native mobile apps. I build complete, scalable systems with deep backend foundations and AI-assisted workflows.
            </p>

            {/* Location */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                marginBottom: '2rem',
              }}
            >
              <MapPin size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              Pune, Maharashtra, India
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('work');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 72;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
                id="hero-cta-work"
              >
                Explore Projects
                <ArrowRight size={15} />
              </a>
              <a
                href="/Tushar_Khande_Resume.pdf"
                download="Tushar_Khande_Resume.pdf"
                className="btn-secondary"
                id="hero-cta-resume"
              >
                <Download size={15} />
                Download Resume
              </a>
            </div>

            {/* Tech labels */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {techLabels.map((tech) => (
                <span key={tech} className="tag tag-accent">
                  {tech}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
              <a
                href="https://github.com/Tusharkhande"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.8125rem',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/tusharkhande"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.8125rem',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Portrait placeholder */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}
            className="hero-portrait-wrapper"
          >
            <div
              style={{
                width: '100%',
                maxWidth: '360px',
                aspectRatio: '3/4',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {!imgError ? (
                <Image
                  src="/images/portrait.jpg"
                  alt="Tushar Khande — Software Engineer"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 360px"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  onError={() => setImgError(true)}
                />
              ) : (
                <>
                  {/* Portrait placeholder background grid */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                  {/* Placeholder content */}
                  <div style={{ position: 'relative', textAlign: 'center', padding: '2rem' }}>
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'var(--bg-secondary)',
                        border: '2px dashed var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem',
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        color: 'var(--text-secondary)',
                        letterSpacing: '-0.04em',
                      }}
                    >
                      TK
                    </div>
                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        lineHeight: 1.6,
                      }}
                    >
                      Tushar Khande
                    </p>
                  </div>
                </>
              )}

              {/* Accent corner */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '48px',
                  height: '48px',
                  borderRight: '1px solid var(--accent)',
                  borderBottom: '1px solid var(--accent)',
                  borderRadius: '0 0 8px 0',
                  opacity: 0.5,
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '48px',
                  height: '48px',
                  borderLeft: '1px solid var(--accent)',
                  borderTop: '1px solid var(--accent)',
                  borderRadius: '8px 0 0 0',
                  opacity: 0.5,
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />

              {/* Bottom status bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '0.875rem 1rem',
                  background: 'rgba(9,9,11,0.85)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  zIndex: 3,
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#22C55E',
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Tags below portrait */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', justifyContent: 'center' }}>
              {['Jr. Software Engineer', 'Cognizant', 'Pune'].map((tag) => (
                <span key={tag} className="tag" style={{ fontSize: '0.7rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-portrait-wrapper {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
