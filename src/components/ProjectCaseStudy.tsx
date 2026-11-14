'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Github } from '@/components/Icons';
import { Project, projects } from '@/data/projects';

interface Props {
  project: Project;
}

export default function ProjectCaseStudy({ project }: Props) {
  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <div
        style={{
          padding: '4rem 0 3rem',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg-elevated)',
        }}
      >
        <div className="container">
          {/* Back link */}
          <Link
            href="/#work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.8125rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
          >
            <ArrowLeft size={14} />
            Back to Work
          </Link>

          {/* Category */}
          <p className="section-label" style={{ marginBottom: '0.875rem' }}>{project.category}</p>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 6vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}
          >
            {project.title}
          </h1>

          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '62ch',
              marginBottom: '1.75rem',
            }}
          >
            {project.tagline}
          </p>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {project.technologies.map((tech) => (
              <span key={tech} className="tag" style={{ fontSize: '0.75rem' }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.8125rem' }}
              >
                <Github size={14} />
                View on GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.8125rem' }}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '4rem 0' }}>
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Main content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Architecture illustration */}
            <div
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '2rem',
                overflow: 'hidden',
              }}
            >
              <p className="section-label" style={{ marginBottom: '1.25rem' }}>ARCHITECTURE</p>
              <CaseStudyIllustration project={project} />
            </div>

            {/* Overview */}
            <div>
              <h2
                style={{
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.875rem',
                }}
              >
                Project Overview
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {project.longDescription.split('\n\n').filter(Boolean).map((para, i) => (
                  <p
                    key={i}
                    style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}
                  >
                    {para.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div>
              <h2
                style={{
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                Key Features & Engineering Highlights
              </h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        flexShrink: 0,
                        marginTop: '0.5rem',
                      }}
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div
            style={{
              position: 'sticky',
              top: '88px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
            className="case-study-sidebar"
          >
            {/* Tech stack */}
            <div className="card" style={{ padding: '1.25rem' }}>
              <p className="section-label" style={{ marginBottom: '0.875rem' }}>TECH STACK</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    style={{
                      padding: '0.375rem 0.625rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '4px',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Related projects */}
            <div className="card" style={{ padding: '1.25rem' }}>
              <p className="section-label" style={{ marginBottom: '0.875rem' }}>OTHER PROJECTS</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {otherProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.625rem 0.75rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '6px',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.15s, background 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                      (e.currentTarget as HTMLElement).style.background = 'var(--bg-primary)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                      (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)';
                    }}
                  >
                    {p.title}
                    <ArrowUpRight size={12} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .case-study-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 3.5rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .case-study-grid {
            grid-template-columns: 1fr !important;
          }
          .case-study-sidebar {
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
}

function CaseStudyIllustration({ project }: { project: Project }) {
  if (project.slug === 'bharattrains') return <BharatTrainsArch />;
  if (project.slug === 'swiftcart') return <SwiftCartArch />;
  if (project.slug === 'parivarvault') return <ParivarVaultArch />;
  if (project.slug === 'genai') return <GenAIArch />;
  return null;
}

function BharatTrainsArch() {
  return (
    <svg
      viewBox="0 0 700 340"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BharatTrains microservices architecture diagram"
    >
      {/* Client */}
      <rect x="10" y="140" width="90" height="36" rx="6" fill="#1B1B1F" stroke="#27272A" strokeWidth="1.5" />
      <text x="55" y="162" textAnchor="middle" fill="#A1A1AA" fontSize="11" fontFamily="monospace">Client</text>
      <line x1="100" y1="158" x2="160" y2="158" stroke="#27272A" strokeWidth="1" />

      {/* API Gateway / JWT */}
      <rect x="160" y="128" width="110" height="60" rx="6" fill="#1B1B1F" stroke="#FF6A35" strokeWidth="1.5" />
      <text x="215" y="152" textAnchor="middle" fill="#FF6A35" fontSize="11" fontFamily="monospace">API Gateway</text>
      <text x="215" y="168" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace">+ JWT Auth</text>

      {/* Lines to services */}
      {[60, 130, 200, 270, 340].map((y, i) => (
        <line key={i} x1="270" y1="158" x2="340" y2={y + 18} stroke="#27272A" strokeWidth="1" strokeDasharray="4 3" />
      ))}

      {/* Services */}
      {[
        { label: 'Booking Service', y: 44, note: 'Reservation workflows' },
        { label: 'Seat Service', y: 114, note: 'Availability tracking' },
        { label: 'Train Service', y: 184, note: 'Routes & schedules' },
        { label: 'Payment Service', y: 254, note: 'Transactions' },
        { label: 'Notification Svc', y: 0, note: 'Confirmations' },
      ].map(({ label, y, note }, i) => {
        const svcy = i * 60 + 20;
        return (
          <g key={label}>
            <rect x="340" y={svcy} width="130" height="42" rx="5" fill="#141416" stroke="#27272A" strokeWidth="1.2" />
            <text x="405" y={svcy + 17} textAnchor="middle" fill="#FAFAFA" fontSize="10" fontFamily="monospace">{label}</text>
            <text x="405" y={svcy + 31} textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">{note}</text>
          </g>
        );
      })}

      {/* Database */}
      <rect x="500" y="120" width="90" height="36" rx="5" fill="#1B1B1F" stroke="#27272A" strokeWidth="1.2" />
      <text x="545" y="142" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="monospace">Oracle SQL</text>
      {[60, 130, 200].map((y, i) => (
        <line key={i} x1="470" y1={i * 60 + 41} x2="500" y2="138" stroke="#27272A" strokeWidth="0.75" strokeDasharray="3 3" />
      ))}

      {/* Kafka PoC */}
      <rect x="500" y="200" width="90" height="36" rx="5" fill="#1B1B1F" stroke="#27272A" strokeWidth="1" strokeDasharray="4 3" />
      <text x="545" y="218" textAnchor="middle" fill="#52525B" fontSize="9.5" fontFamily="monospace">Kafka</text>
      <text x="545" y="229" textAnchor="middle" fill="#52525B" fontSize="8" fontFamily="monospace">(PoC)</text>
      <line x1="470" y1="261" x2="500" y2="218" stroke="#27272A" strokeWidth="0.75" strokeDasharray="3 3" />

      {/* Admin dashboard */}
      <rect x="500" y="260" width="90" height="36" rx="5" fill="#1B1B1F" stroke="#27272A" strokeWidth="1" />
      <text x="545" y="281" textAnchor="middle" fill="#A1A1AA" fontSize="9.5" fontFamily="monospace">Admin</text>
      <text x="545" y="292" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="monospace">Dashboard</text>

      {/* Legend */}
      <rect x="10" y="300" width="10" height="10" rx="2" fill="none" stroke="#FF6A35" strokeWidth="1.5" />
      <text x="26" y="310" fill="#52525B" fontSize="9" fontFamily="monospace">Core gateway</text>
      <rect x="120" y="300" width="10" height="10" rx="2" fill="none" stroke="#27272A" strokeWidth="1" strokeDasharray="3 2" />
      <text x="136" y="310" fill="#52525B" fontSize="9" fontFamily="monospace">PoC / exploratory</text>
    </svg>
  );
}

function SwiftCartArch() {
  return (
    <svg
      viewBox="0 0 700 280"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SwiftCart distributed e-commerce architecture"
    >
      {/* Client */}
      <rect x="10" y="110" width="80" height="36" rx="5" fill="#1B1B1F" stroke="#27272A" strokeWidth="1.5" />
      <text x="50" y="132" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="monospace">Client</text>
      <line x1="90" y1="128" x2="150" y2="128" stroke="#27272A" strokeWidth="1" />

      {/* API Gateway */}
      <rect x="150" y="100" width="110" height="56" rx="6" fill="#1B1B1F" stroke="#FF6A35" strokeWidth="1.5" />
      <text x="205" y="126" textAnchor="middle" fill="#FF6A35" fontSize="11" fontFamily="monospace">API Gateway</text>
      <text x="205" y="142" textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">Routing & LB</text>

      {/* Service Discovery */}
      <rect x="150" y="30" width="110" height="40" rx="5" fill="#1B1B1F" stroke="#27272A" strokeWidth="1" strokeDasharray="5 3" />
      <text x="205" y="54" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="monospace">Service Discovery</text>
      <line x1="205" y1="100" x2="205" y2="70" stroke="#27272A" strokeWidth="0.75" strokeDasharray="3 3" />

      {/* Services */}
      {[
        { label: 'Products', x: 320, y: 20 },
        { label: 'Orders', x: 320, y: 90 },
        { label: 'Inventory', x: 320, y: 160 },
        { label: 'Users', x: 320, y: 230 },
      ].map(({ label, x, y }) => (
        <g key={label}>
          <rect x={x} y={y} width="100" height="40" rx="5" fill="#141416" stroke="#27272A" strokeWidth="1.2" />
          <text x={x + 50} y={y + 24} textAnchor="middle" fill="#FAFAFA" fontSize="10.5" fontFamily="monospace">{label}</text>
          <line x1="260" y1="128" x2={x} y2={y + 20} stroke="#27272A" strokeWidth="0.75" strokeDasharray="4 3" />
        </g>
      ))}

      {/* Shared DB */}
      <rect x="460" y="100" width="110" height="56" rx="5" fill="#1B1B1F" stroke="#27272A" strokeWidth="1.2" />
      <text x="515" y="126" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="monospace">Oracle SQL</text>
      <text x="515" y="142" textAnchor="middle" fill="#52525B" fontSize="8.5" fontFamily="monospace">Shared DB</text>
      {[20, 90, 160, 230].map((y, i) => (
        <line key={i} x1="420" y1={y + 20} x2="460" y2="128" stroke="#27272A" strokeWidth="0.75" strokeDasharray="3 3" />
      ))}

      {/* AWS/Azure note */}
      <rect x="460" y="195" width="110" height="40" rx="5" fill="#1B1B1F" stroke="#27272A" strokeWidth="0.75" strokeDasharray="4 4" />
      <text x="515" y="218" textAnchor="middle" fill="#52525B" fontSize="9" fontFamily="monospace">AWS / Azure</text>
      <text x="515" y="230" textAnchor="middle" fill="#52525B" fontSize="8" fontFamily="monospace">adaptable</text>
    </svg>
  );
}

function ParivarVaultArch() {
  return (
    <svg
      viewBox="0 0 700 300"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ParivarVault offline-first mobile architecture"
    >
      {/* Phone */}
      <rect x="280" y="10" width="140" height="240" rx="16" fill="#1B1B1F" stroke="#27272A" strokeWidth="1.5" />
      <rect x="290" y="25" width="120" height="210" rx="8" fill="#141416" />

      {/* Phone content */}
      <text x="350" y="60" textAnchor="middle" fill="#FF6A35" fontSize="12" fontFamily="monospace" fontWeight="bold">ParivarVault</text>
      {[
        { label: 'PIN / Biometric Auth', y: 80 },
        { label: 'Document Store', y: 110 },
        { label: 'OCR Autofill', y: 140 },
        { label: 'QR Sharing', y: 170 },
        { label: 'Expiry Reminders', y: 200 },
      ].map(({ label, y }) => (
        <g key={label}>
          <rect x="296" y={y - 8} width="108" height="20" rx="3" fill="#1B1B1F" />
          <text x="350" y={y + 6} textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">{label}</text>
        </g>
      ))}

      {/* Left: Security layer */}
      <rect x="60" y="50" width="130" height="80" rx="6" fill="#1B1B1F" stroke="#27272A" strokeWidth="1" />
      <text x="125" y="78" textAnchor="middle" fill="#FAFAFA" fontSize="10" fontFamily="monospace">Security</text>
      <text x="125" y="95" textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">AES-256 Encryption</text>
      <text x="125" y="110" textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">Biometric / PIN</text>
      <line x1="190" y1="90" x2="280" y2="130" stroke="#27272A" strokeWidth="0.75" strokeDasharray="4 3" />

      {/* Left: OCR */}
      <rect x="60" y="160" width="130" height="60" rx="6" fill="#1B1B1F" stroke={`rgba(255,106,53,0.3)`} strokeWidth="1" />
      <text x="125" y="185" textAnchor="middle" fill="#FF6A35" fontSize="10" fontFamily="monospace">Google ML Kit</text>
      <text x="125" y="201" textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">OCR Document Scan</text>
      <line x1="190" y1="190" x2="280" y2="165" stroke="#27272A" strokeWidth="0.75" strokeDasharray="4 3" />

      {/* Right: Offline-first */}
      <rect x="510" y="50" width="150" height="70" rx="6" fill="#1B1B1F" stroke="#27272A" strokeWidth="1" />
      <text x="585" y="78" textAnchor="middle" fill="#FAFAFA" fontSize="10" fontFamily="monospace">Offline-First</text>
      <text x="585" y="95" textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">Local encrypted DB</text>
      <text x="585" y="110" textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">QR offline sharing</text>
      <line x1="420" y1="120" x2="510" y2="90" stroke="#27272A" strokeWidth="0.75" strokeDasharray="4 3" />

      {/* Right: Languages */}
      <rect x="510" y="155" width="150" height="50" rx="6" fill="#1B1B1F" stroke="#27272A" strokeWidth="1" />
      <text x="585" y="178" textAnchor="middle" fill="#FAFAFA" fontSize="10" fontFamily="monospace">5 Indian Languages</text>
      <text x="585" y="195" textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">Multi-language support</text>
      <line x1="420" y1="160" x2="510" y2="180" stroke="#27272A" strokeWidth="0.75" strokeDasharray="4 3" />

      {/* Bottom: React Native */}
      <rect x="265" y="265" width="170" height="30" rx="5" fill="#141416" stroke="#27272A" strokeWidth="1" />
      <text x="350" y="284" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace">Built with React Native · Android</text>
    </svg>
  );
}

function GenAIArch() {
  return (
    <svg
      viewBox="0 0 700 280"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GenAI multi-service AI integration architecture"
    >
      {/* Central app */}
      <rect x="270" y="90" width="160" height="80" rx="8" fill="#1B1B1F" stroke="#FF6A35" strokeWidth="1.5" />
      <text x="350" y="122" textAnchor="middle" fill="#FF6A35" fontSize="12" fontFamily="monospace">GenAI App</text>
      <text x="350" y="140" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace">Android · React Native</text>
      <text x="350" y="155" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace">5 Chat Assistants</text>

      {/* AI services */}
      {[
        { label: 'OpenAI GPT-3.5', sublabel: 'Conversational AI', x: 40, y: 30, color: '#10B981' },
        { label: 'DALL-E 2.0', sublabel: 'Image Generation', x: 40, y: 130, color: '#8B5CF6' },
        { label: 'Google Gemini', sublabel: 'Multimodal AI', x: 520, y: 30, color: '#3B82F6' },
        { label: 'Hugging Face', sublabel: 'Specialized Models', x: 520, y: 130, color: '#F59E0B' },
      ].map(({ label, sublabel, x, y, color }) => (
        <g key={label}>
          <rect x={x} y={y} width="140" height="54" rx="6" fill="#1B1B1F" stroke="#27272A" strokeWidth="1.2" />
          <text x={x + 70} y={y + 24} textAnchor="middle" fill={color} fontSize="10" fontFamily="monospace">{label}</text>
          <text x={x + 70} y={y + 40} textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">{sublabel}</text>
          {/* Line to center */}
          <line
            x1={x < 350 ? x + 140 : x}
            y1={y + 27}
            x2={x < 350 ? 270 : 430}
            y2={130}
            stroke="#27272A"
            strokeWidth="0.75"
            strokeDasharray="4 3"
          />
        </g>
      ))}

      {/* Firebase */}
      <rect x="230" y="210" width="240" height="50" rx="6" fill="#1B1B1F" stroke="#27272A" strokeWidth="1.2" />
      <text x="350" y="232" textAnchor="middle" fill="#FAFAFA" fontSize="10.5" fontFamily="monospace">Firebase Backend</text>
      <text x="350" y="248" textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">Authentication · Cloud Firestore</text>
      <line x1="350" y1="170" x2="350" y2="210" stroke="#27272A" strokeWidth="0.75" strokeDasharray="4 3" />

      {/* Capabilities */}
      {[
        { label: 'Text Gen', x: 60, y: 220 },
        { label: 'Image Gen', x: 130, y: 220 },
        { label: 'Image Detection', x: 500, y: 220 },
      ].map(({ label, x, y }) => (
        <g key={label}>
          <rect x={x} y={y} width="90" height="24" rx="4" fill="#141416" stroke="#27272A" strokeWidth="0.75" />
          <text x={x + 45} y={y + 15} textAnchor="middle" fill="#52525B" fontSize="8.5" fontFamily="monospace">{label}</text>
        </g>
      ))}
    </svg>
  );
}
