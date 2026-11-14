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
                I'm a Full Stack Developer based in Pune, India, with a strong engineering core in Java backend development. While my primary architectural strength lies in building reliable microservices, REST APIs, and database schemas with Spring Boot and Oracle SQL, I actively build complete end-to-end web applications with React and mobile apps with React Native.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                At Cognizant, I develop enterprise insurance applications—focusing on backend APIs, database optimization, production troubleshooting, and system reliability. I enjoy engineering solutions across the full lifecycle, from architecture and database design to clean interface implementation.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Across full-stack web and mobile products, I craft clean UI experiences in React, build cross-platform apps in React Native, and integrate intelligent AI services. I also embed modern AI-assisted engineering tools—regularly utilizing GitHub Copilot, Google Antigravity, and Cursor—to accelerate prototyping, code review, and automated testing.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                I'm open to roles in Full Stack Software Engineering, Java Backend Development, and Microservices Engineering.
              </p>
            </div>
          </div>

          {/* Right: Quick facts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p className="section-label" style={{ marginBottom: '0.375rem' }}>QUICK FACTS</p>

            {[
              { label: 'Core Stack', value: 'Java · Spring Boot · React · Oracle SQL' },
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
