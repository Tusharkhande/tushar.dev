'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setMobileOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
          background: isScrolled ? 'rgba(9,9,11,0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="container" style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              fontSize: '1.1rem',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              color: 'var(--text-primary)',
            }}
            aria-label="Tushar Khande — Home"
          >
            <span style={{ color: 'var(--accent)' }}>T</span>K
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', marginLeft: '2px', display: 'inline-block' }} />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={pathname === '/' ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  padding: '0.375rem 0.75rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  borderRadius: '6px',
                  transition: 'color 0.15s ease, background 0.15s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = 'var(--text-primary)';
                  (e.target as HTMLElement).style.background = 'var(--bg-secondary)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                  (e.target as HTMLElement).style.background = 'transparent';
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="hidden-mobile">
            <a
              href="/Tushar_Khande_Resume.pdf"
              download="Tushar_Khande_Resume.pdf"
              className="btn-secondary"
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.875rem' }}
              aria-label="Download resume PDF"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="show-mobile"
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '0.4rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'none',
            }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          zIndex: 49,
          background: 'rgba(9,9,11,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem 1.5rem 1.5rem',
          display: mobileOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '0.25rem',
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={pathname === '/' ? link.href : `/${link.href}`}
            onClick={(e) => handleNavClick(e, link.href)}
            style={{
              padding: '0.75rem 1rem',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              borderRadius: '6px',
              transition: 'color 0.15s ease, background 0.15s ease',
              cursor: 'pointer',
            }}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
          <a
            href="/Tushar_Khande_Resume.pdf"
            download="Tushar_Khande_Resume.pdf"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Download size={15} />
            Download Resume
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
