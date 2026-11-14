'use client';

import ProjectCard from './ProjectCard';
import { getFeaturedProjects } from '@/data/projects';

export default function ProjectGrid() {
  const projects = getFeaturedProjects();

  return (
    <section id="work" style={{ padding: '5rem 0' }}>
      <div className="container">
        {/* Heading */}
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>SELECTED WORK</p>
          <h2 className="section-heading" style={{ marginBottom: '0.875rem' }}>
            Engineering solutions
            <br />
            <span style={{ color: 'var(--accent)' }}>from backend to product.</span>
          </h2>
          <p className="section-subheading">
            A selection of projects highlighting distributed microservices, reliable backends, full-stack & mobile engineering, and AI integration.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
