import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { getProjectBySlug, projects } from '@/data/projects';
import ProjectCaseStudy from '@/components/ProjectCaseStudy';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — ${project.category}`,
    description: project.description,
  };
}

async function ProjectContent({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}

export default function ProjectPage({ params }: Props) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px', minHeight: '100vh' }}>
        <Suspense
          fallback={
            <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
              <div style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
                Loading case study...
              </div>
            </div>
          }
        >
          <ProjectContent params={params} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
