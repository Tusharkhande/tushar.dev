'use client';

import { experience } from '@/data/experience';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" style={{ padding: '5rem 0' }}>
      <div className="container">
        {/* Heading */}
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>EXPERIENCE</p>
          <h2 className="section-heading" style={{ marginBottom: '0.875rem' }}>
            Professional
            <br />
            <span style={{ color: 'var(--accent)' }}>background.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '11px',
              top: '8px',
              bottom: '0',
              width: '1px',
              background: 'var(--border)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experience.map((item, index) => (
              <div
                key={`${item.company}-${index}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '24px 1fr',
                  gap: '1.25rem',
                }}
              >
                {/* Timeline dot */}
                <div style={{ paddingTop: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: item.isCurrent ? 'var(--accent)' : 'var(--bg-secondary)',
                      border: `1.5px solid ${item.isCurrent ? 'var(--accent)' : 'var(--border)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    <Briefcase
                      size={10}
                      style={{ color: item.isCurrent ? '#fff' : 'var(--text-secondary)' }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className="card"
                  style={{ padding: '1.375rem 1.5rem', marginBottom: '0' }}
                >
                  {/* Header */}
                  <div style={{ marginBottom: '1rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '0.375rem',
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: '1.0625rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            letterSpacing: '-0.02em',
                            marginBottom: '0.125rem',
                          }}
                        >
                          {item.role}
                        </h3>
                        <p
                          style={{
                            fontSize: '0.9375rem',
                            fontWeight: 600,
                            color: 'var(--accent)',
                          }}
                        >
                          {item.company}
                        </p>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-end' }}>
                        <span
                          className="tag"
                          style={{
                            fontSize: '0.7rem',
                            background: item.type === 'full-time' ? 'rgba(34,197,94,0.08)' : 'var(--bg-secondary)',
                            borderColor: item.type === 'full-time' ? 'rgba(34,197,94,0.25)' : 'var(--border)',
                            color: item.type === 'full-time' ? '#22C55E' : 'var(--text-secondary)',
                          }}
                        >
                          {item.type === 'full-time' ? 'Full-time' : 'Internship'}
                        </span>
                        {item.isCurrent && (
                          <span className="tag tag-accent" style={{ fontSize: '0.65rem' }}>
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.8125rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <Calendar size={12} />
                        {item.period}
                      </span>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.8125rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.375rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        style={{
                          display: 'flex',
                          gap: '0.625rem',
                          fontSize: '0.8125rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: 'var(--accent)',
                            flexShrink: 0,
                            marginTop: '0.375rem',
                          }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tag" style={{ fontSize: '0.7rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
