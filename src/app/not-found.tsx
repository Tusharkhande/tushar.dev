import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'This page could not be found.',
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--bg-primary)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '1.5rem',
        }}
      >
        404 — NOT FOUND
      </p>
      <h1
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          color: 'var(--text-primary)',
          marginBottom: '1rem',
          lineHeight: 1.1,
        }}
      >
        This page doesn't exist.
      </h1>
      <p
        style={{
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          marginBottom: '2.5rem',
          maxWidth: '40ch',
        }}
      >
        You may have followed an old link or typed the URL incorrectly.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.625rem 1.25rem',
          background: 'var(--accent)',
          color: '#fff',
          borderRadius: '6px',
          fontSize: '0.875rem',
          fontWeight: 500,
          textDecoration: 'none',
          transition: 'background 0.2s ease',
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
