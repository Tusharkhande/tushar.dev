'use client';

import { skillCategories, certifications } from '@/data/skills';
import { Award } from 'lucide-react';

const priorityOrder = { primary: 0, secondary: 1, tertiary: 2 };
const priorityLabel: Record<string, string> = {
  primary: 'Primary',
  secondary: 'Supporting',
  tertiary: 'Tools & Cloud',
};

const certIcon: Record<string, string> = {
  cloud: '☁',
  platform: '⚙',
  tool: '🔧',
  course: '📚',
};

export default function SkillsSection() {
  const sorted = [...skillCategories].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  return (
    <section id="skills" style={{ padding: '5rem 0' }}>
      <div className="container">
        {/* Heading */}
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>TECHNICAL SKILLS</p>
          <h2 className="section-heading" style={{ marginBottom: '0.875rem' }}>
            Full-stack breadth,
            <br />
            <span style={{ color: 'var(--accent)' }}>backend depth.</span>
          </h2>
          <p className="section-subheading">
            Enterprise backend engineering in Java and microservices, paired with modern React web development, cross-platform mobile apps, and AI-assisted workflows.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {sorted.map((category) => (
            <div
              key={category.title}
              className="card"
              style={{
                padding: '1.375rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Category priority indicator */}
              {category.priority === 'primary' && (
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--accent)',
                  }}
                />
              )}

              <div style={{ marginBottom: '0.875rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.25rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {category.title}
                  </h3>
                  <span
                    className="tag"
                    style={{
                      fontSize: '0.65rem',
                      background:
                        category.priority === 'primary'
                          ? 'rgba(255,106,53,0.08)'
                          : 'var(--bg-secondary)',
                      borderColor:
                        category.priority === 'primary'
                          ? 'rgba(255,106,53,0.25)'
                          : 'var(--border)',
                      color:
                        category.priority === 'primary'
                          ? 'var(--accent)'
                          : 'var(--text-secondary)',
                    }}
                  >
                    {priorityLabel[category.priority]}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.2rem 0.55rem',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      fontSize: '0.7875rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      transition: 'border-color 0.15s ease, color 0.15s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <p
            className="section-label"
            style={{ marginBottom: '1.25rem' }}
          >
            CERTIFICATIONS
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '0.875rem',
            }}
          >
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="card"
                style={{
                  padding: '1rem 1.125rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    background: 'var(--bg-secondary)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.875rem',
                  }}
                >
                  <Award size={15} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      lineHeight: 1.4,
                      marginBottom: '0.1875rem',
                    }}
                  >
                    {cert.name}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
