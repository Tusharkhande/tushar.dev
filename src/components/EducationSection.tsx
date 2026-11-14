'use client';

import { GraduationCap, Trophy } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Electronics and Telecommunication',
    institution: 'Sinhgad College of Engineering, Pune',
    period: '2020 – 2024',
    grade: '8.53 CGPA',
    type: 'degree' as const,
  },
  {
    degree: 'HSC — Science',
    field: '',
    institution: 'A. S. C. College, Rahuri',
    period: '2020',
    grade: '',
    type: 'school' as const,
  },
  {
    degree: 'SSC',
    field: '',
    institution: 'De Paul English Medium High School, Rahuri Factory',
    period: '2018',
    grade: '',
    type: 'school' as const,
  },
];

const achievements = [
  {
    title: 'Cadence Design Systems Scholarship',
    description:
      'Recipient of a four-year undergraduate scholarship sponsored by Cadence Design Systems Pvt. Ltd. and Joining Hands Foundation.',
    icon: Trophy,
  },
  {
    title: 'Promising Junior Star Award',
    description: 'Recognized with the Promising Junior Star Award at Cognizant Technology Solutions.',
    icon: Trophy,
  },
];

export default function EducationSection() {
  return (
    <section id="education" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
          }}
          className="edu-grid"
        >
          {/* Education */}
          <div>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>EDUCATION</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1.75rem' }}>
              Academic
              <br />
              <span style={{ color: 'var(--accent)' }}>background.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="card"
                  style={{ padding: '1.125rem 1.25rem', display: 'flex', gap: '0.875rem' }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      background: edu.type === 'degree' ? 'var(--accent-dim)' : 'var(--bg-secondary)',
                      border: `1px solid ${edu.type === 'degree' ? 'rgba(255,106,53,0.25)' : 'var(--border)'}`,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <GraduationCap
                      size={16}
                      style={{ color: edu.type === 'degree' ? 'var(--accent)' : 'var(--text-secondary)' }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.125rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {edu.degree}
                      {edu.field && (
                        <span style={{ fontWeight: 400, color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                          {' '}in {edu.field}
                        </span>
                      )}
                    </p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                      {edu.institution}
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span className="tag" style={{ fontSize: '0.7rem' }}>{edu.period}</span>
                      {edu.grade && (
                        <span className="tag tag-accent" style={{ fontSize: '0.7rem' }}>{edu.grade}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>ACHIEVEMENTS</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1.75rem' }}>
              Recognition &
              <br />
              <span style={{ color: 'var(--accent)' }}>awards.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="card"
                  style={{ padding: '1.25rem 1.375rem', display: 'flex', gap: '0.875rem' }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'rgba(255,106,53,0.1)',
                      border: '1px solid rgba(255,106,53,0.25)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <Trophy size={16} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.375rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {achievement.title}
                    </p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
