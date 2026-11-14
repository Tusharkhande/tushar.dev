'use client';

import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'tkhande09@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" style={{ padding: '5rem 0 6rem' }}>
      <div className="container">
        {/* Divider line */}
        <div
          style={{
            height: '1px',
            background: 'var(--border)',
            marginBottom: '4rem',
          }}
        />

        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>GET IN TOUCH</p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
            }}
          >
            Open to the right
            <br />
            <span style={{ color: 'var(--accent)' }}>opportunity.</span>
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '48ch',
              margin: '0 auto 2.5rem',
            }}
          >
            I'm interested in full stack development, Java backend systems, and software engineering opportunities. If you're building something exciting, let's connect.
          </p>

          {/* Email CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1.25rem',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <Mail size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
            <a
              href={`mailto:${email}`}
              style={{
                fontSize: '0.9375rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-primary)',
                fontWeight: 500,
                flex: 1,
                minWidth: 0,
              }}
              id="contact-email-link"
            >
              {email}
            </a>
            <button
              onClick={handleCopy}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
              style={{
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                padding: '0.3rem 0.625rem',
                color: copied ? '#22C55E' : 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.75rem',
                transition: 'color 0.15s ease, border-color 0.15s ease',
                flexShrink: 0,
              }}
            >
              {copied ? (
                <>
                  <Check size={13} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={13} />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Primary email button */}
          <a
            href={`mailto:${email}`}
            className="btn-primary"
            style={{ marginBottom: '2rem', display: 'inline-flex' }}
            id="contact-email-button"
          >
            <Mail size={15} />
            Send an Email
            <ArrowUpRight size={15} />
          </a>

          {/* Social links */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <a
              href="https://linkedin.com/in/tusharkhande"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1rem',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                transition: 'border-color 0.15s ease, color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#0A66C2';
                (e.currentTarget as HTMLElement).style.color = '#0A66C2';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              }}
              aria-label="Connect on LinkedIn"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Tusharkhande"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1rem',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                transition: 'border-color 0.15s ease, color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--text-secondary)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              }}
              aria-label="View GitHub profile"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
