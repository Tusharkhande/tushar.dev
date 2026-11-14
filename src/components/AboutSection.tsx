'use client';

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left */}
          <div>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>ABOUT</p>
            <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
              Focused on building
              <br />
              <span style={{ color: 'var(--accent)' }}>things that work.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                I'm a Software Engineer based in Pune, India, with a focus on Java backend development. My core interest lies in building reliable, maintainable backend services — working with REST APIs, Spring Boot, relational databases, and microservices architecture.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                At Cognizant, I work on enterprise insurance applications, contributing to API development, database schema design, SQL optimization, and production reliability. I enjoy the challenge of working within established systems while improving them incrementally through good engineering practices.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Beyond backend systems, I build responsive frontend interfaces with React and mobile applications with React Native, alongside practical AI integrations. I also integrate modern AI-assisted engineering tools—regularly working with GitHub Copilot, Google Antigravity, and Cursor—to accelerate prototyping, code analysis, and solution delivery.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                I'm currently open to roles in Java backend development, Spring Boot microservices engineering, and full-stack software engineering.
              </p>
            </div>
          </div>

          {/* Right: Quick facts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p className="section-label" style={{ marginBottom: '0.375rem' }}>QUICK FACTS</p>

            {[
              { label: 'Primary Stack', value: 'Java · Spring Boot · Oracle SQL' },
              { label: 'Current Role', value: 'Jr. Software Engineer at Cognizant' },
              { label: 'Frontend & Mobile', value: 'React · Next.js · React Native' },
              { label: 'AI & Dev Tools', value: 'GitHub Copilot · Antigravity · Cursor' },
              { label: 'Location', value: 'Pune, Maharashtra, India' },
              { label: 'Education', value: 'B.E. Electronics & Telecom (8.53 CGPA)' },
              { label: 'Certifications', value: 'AWS Cloud, Azure AZ-900, GitHub Copilot' },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  padding: '0.875rem 1rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>
                  {label}
                </span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500, textAlign: 'right' }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
