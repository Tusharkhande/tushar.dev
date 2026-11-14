'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Github } from '@/components/Icons';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const categoryColor: Record<string, string> = {
  'Backend Engineering / Microservices': '#FF6A35',
  'Backend Engineering / E-Commerce': '#FF6A35',
  'Mobile Product / Security / Product Engineering': '#A78BFA',
  'AI Integration / Android Development': '#38BDF8',
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const accent = categoryColor[project.category] || '#FF6A35';

  return (
    <article
      className="card"
      style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${accent}40`;
        el.style.transform = 'translateY(-2px)';
        el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--border)';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
    >
      {/* Visual preview */}
      <ProjectIllustration project={project} accent={accent} />

      {/* Card body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', flex: 1 }}>
        {/* Category */}
        <span
          className="section-label"
          style={{ color: accent, fontSize: '0.65rem' }}
        >
          {project.category}
        </span>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.1875rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: 'auto' }}>
          {project.primaryTech.map((tech) => (
            <span key={tech} className="tag" style={{ fontSize: '0.7rem' }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border-subtle)',
            marginTop: '0.25rem',
          }}
        >
          <Link
            href={`/projects/${project.slug}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: accent,
              transition: 'gap 0.15s ease',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = '0.5rem')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = '0.3rem')}
          >
            View Details
            <ArrowUpRight size={14} />
          </Link>

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              style={{ color: 'var(--text-secondary)', transition: 'color 0.15s ease' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// Custom illustration per project
function ProjectIllustration({ project, accent }: { project: Project; accent: string }) {
  return (
    <div
      style={{
        height: '160px',
        background: 'var(--bg-secondary)',
        borderRadius: '6px',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    >
      {project.slug === 'bharattrains' && <BharatTrainsIllustration accent={accent} />}
      {project.slug === 'swiftcart' && <SwiftCartIllustration accent={accent} />}
      {project.slug === 'parivarvault' && <ParivarVaultIllustration accent={accent} />}
      {project.slug === 'genai' && <GenAIIllustration accent={accent} />}
    </div>
  );
}

function BharatTrainsIllustration({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
      {/* Central gateway */}
      <rect x="125" y="65" width="50" height="30" rx="4" fill="none" stroke={accent} strokeWidth="1.5" />
      <text x="150" y="84" textAnchor="middle" fill={accent} fontSize="7" fontFamily="monospace">API GW</text>

      {/* Services */}
      {[
        { x: 30, y: 45, label: 'Booking' },
        { x: 30, y: 100, label: 'Seat' },
        { x: 220, y: 30, label: 'Payment' },
        { x: 220, y: 75, label: 'Train' },
        { x: 220, y: 120, label: 'Notify' },
      ].map(({ x, y, label }) => (
        <g key={label}>
          <rect x={x} y={y} width="55" height="22" rx="3" fill="#1B1B1F" stroke="#27272A" strokeWidth="1" />
          <text x={x + 27.5} y={y + 14} textAnchor="middle" fill="#A1A1AA" fontSize="6.5" fontFamily="monospace">{label}</text>
          {/* Connection line to gateway */}
          <line
            x1={x + (x < 150 ? 55 : 0)}
            y1={y + 11}
            x2={x < 150 ? 125 : 175}
            y2={80}
            stroke="#27272A"
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />
        </g>
      ))}

      {/* JWT label */}
      <rect x="108" y="108" width="34" height="12" rx="2" fill="#1B1B1F" stroke={`${accent}40`} strokeWidth="0.5" />
      <text x="125" y="117" textAnchor="middle" fill={accent} fontSize="5.5" fontFamily="monospace">JWT</text>
    </svg>
  );
}

function SwiftCartIllustration({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
      {/* API Gateway */}
      <rect x="115" y="20" width="70" height="28" rx="4" fill="none" stroke={accent} strokeWidth="1.5" />
      <text x="150" y="38" textAnchor="middle" fill={accent} fontSize="7" fontFamily="monospace">API Gateway</text>

      {/* Service discovery */}
      <rect x="210" y="20" width="75" height="28" rx="4" fill="#1B1B1F" stroke="#27272A" strokeWidth="1" strokeDasharray="3 2" />
      <text x="247" y="38" textAnchor="middle" fill="#A1A1AA" fontSize="6.5" fontFamily="monospace">Discovery</text>
      <line x1="185" y1="34" x2="210" y2="34" stroke="#27272A" strokeWidth="0.75" strokeDasharray="3 3" />

      {/* Services */}
      {[
        { x: 20, y: 80, label: 'Products' },
        { x: 90, y: 80, label: 'Orders' },
        { x: 160, y: 80, label: 'Inventory' },
        { x: 230, y: 80, label: 'Users' },
      ].map(({ x, y, label }) => (
        <g key={label}>
          <rect x={x} y={y} width="60" height="24" rx="3" fill="#1B1B1F" stroke="#27272A" strokeWidth="1" />
          <text x={x + 30} y={y + 15} textAnchor="middle" fill="#A1A1AA" fontSize="6.5" fontFamily="monospace">{label}</text>
          <line x1={x + 30} y1={y} x2={150} y2={48} stroke="#27272A" strokeWidth="0.75" strokeDasharray="3 3" />
        </g>
      ))}

      {/* DB */}
      <ellipse cx="150" cy="135" rx="30" ry="10" fill="#1B1B1F" stroke="#27272A" strokeWidth="1" />
      <line x1="120" y1="135" x2="120" y2="125" stroke="#27272A" strokeWidth="1" />
      <line x1="180" y1="135" x2="180" y2="125" stroke="#27272A" strokeWidth="1" />
      <rect x="120" y="115" width="60" height="20" rx="0" fill="#1B1B1F" stroke="#27272A" strokeWidth="1" />
      <text x="150" y="128" textAnchor="middle" fill="#A1A1AA" fontSize="6" fontFamily="monospace">Database</text>

      {/* Data flow packet */}
      <circle cx="150" cy="63" r="3" fill={accent} opacity="0.7" />
    </svg>
  );
}

function ParivarVaultIllustration({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
      {/* Phone frame */}
      <rect x="105" y="10" width="90" height="140" rx="12" fill="#1B1B1F" stroke="#27272A" strokeWidth="1.5" />
      <rect x="115" y="22" width="70" height="116" rx="6" fill="#141416" />

      {/* Status bar */}
      <rect x="115" y="22" width="70" height="14" rx="6" fill="#1B1B1F" />
      <circle cx="182" cy="29" r="3" fill="#27272A" />

      {/* Lock icon */}
      <rect x="143" y="45" width="14" height="12" rx="2" fill="none" stroke={accent} strokeWidth="1.5" />
      <path d="M145 45 Q150 38 155 45" stroke={accent} strokeWidth="1.5" fill="none" />
      <circle cx="150" cy="51" r="2" fill={accent} />

      {/* Document cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="118" y={68 + i * 18} width="64" height="14" rx="3" fill="#1B1B1F" stroke="#27272A" strokeWidth="0.75" />
          <rect x="122" y={72 + i * 18} width="20" height="6" rx="1" fill="#27272A" />
          <rect x="146" y={73 + i * 18} width="30" height="4" rx="1" fill="#27272A" />
        </g>
      ))}

      {/* AES label */}
      <rect x="10" y="60" width="80" height="16" rx="3" fill="#1B1B1F" stroke="#27272A" strokeWidth="0.75" />
      <text x="50" y="72" textAnchor="middle" fill="#A1A1AA" fontSize="7" fontFamily="monospace">AES-256</text>
      <line x1="90" y1="68" x2="105" y2="90" stroke="#27272A" strokeWidth="0.75" strokeDasharray="3 2" />

      {/* OCR label */}
      <rect x="210" y="60" width="80" height="16" rx="3" fill="#1B1B1F" stroke={`${accent}40`} strokeWidth="0.75" />
      <text x="250" y="72" textAnchor="middle" fill={accent} fontSize="7" fontFamily="monospace">ML Kit OCR</text>
      <line x1="210" y1="68" x2="195" y2="90" stroke="#27272A" strokeWidth="0.75" strokeDasharray="3 2" />

      {/* Biometric */}
      <rect x="210" y="105" width="80" height="16" rx="3" fill="#1B1B1F" stroke="#27272A" strokeWidth="0.75" />
      <text x="250" y="117" textAnchor="middle" fill="#A1A1AA" fontSize="7" fontFamily="monospace">Biometric</text>
    </svg>
  );
}

function GenAIIllustration({ accent }: { accent: string }) {
  const services = [
    { label: 'GPT-3.5', x: 30, y: 30, color: '#10B981' },
    { label: 'DALL-E', x: 30, y: 85, color: '#8B5CF6' },
    { label: 'Gemini', x: 210, y: 30, color: '#3B82F6' },
    { label: 'HuggingFace', x: 200, y: 85, color: '#F59E0B' },
  ];

  return (
    <svg width="100%" height="100%" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
      {/* Central hub */}
      <circle cx="150" cy="80" r="28" fill="#1B1B1F" stroke={accent} strokeWidth="1.5" />
      <text x="150" y="77" textAnchor="middle" fill={accent} fontSize="7" fontFamily="monospace">GenAI</text>
      <text x="150" y="88" textAnchor="middle" fill="#A1A1AA" fontSize="6" fontFamily="monospace">Android</text>

      {services.map(({ label, x, y, color }) => (
        <g key={label}>
          <rect x={x} y={y} width={label === 'HuggingFace' ? 80 : 65} height="22" rx="4" fill="#1B1B1F" stroke="#27272A" strokeWidth="1" />
          <text
            x={x + (label === 'HuggingFace' ? 40 : 32.5)}
            y={y + 14}
            textAnchor="middle"
            fill={color}
            fontSize="7"
            fontFamily="monospace"
          >
            {label}
          </text>
          {/* Line to center */}
          <line
            x1={x + (x < 150 ? (label === 'HuggingFace' ? 80 : 65) : 0)}
            y1={y + 11}
            x2={x < 150 ? 122 : 178}
            y2={80}
            stroke="#27272A"
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />
        </g>
      ))}

      {/* Firebase */}
      <rect x="105" y="122" width="90" height="22" rx="4" fill="#1B1B1F" stroke="#27272A" strokeWidth="0.75" />
      <text x="150" y="136" textAnchor="middle" fill="#A1A1AA" fontSize="6.5" fontFamily="monospace">Firebase + Firestore</text>
      <line x1="150" y1="108" x2="150" y2="122" stroke="#27272A" strokeWidth="0.75" strokeDasharray="3 3" />
    </svg>
  );
}
