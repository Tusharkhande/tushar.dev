export interface SkillCategory {
  title: string;
  priority: 'primary' | 'secondary' | 'tertiary';
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Engineering',
    priority: 'primary',
    skills: [
      'Java', 'Spring Boot', 'Spring Framework', 'Spring MVC',
      'RESTful APIs', 'Microservices', 'Hibernate', 'JPA', 'JDBC',
    ],
  },
  {
    title: 'Databases',
    priority: 'primary',
    skills: [
      'Oracle SQL', 'MySQL', 'Firebase Firestore',
      'SQL Query Optimization', 'Database Schema Design',
    ],
  },
  {
    title: 'Distributed Systems & Security',
    priority: 'secondary',
    skills: [
      'Service Discovery', 'API Gateway', 'Synchronous Inter-Service Communication',
      'Apache Kafka (PoC)', 'Asynchronous Event-Based Communication',
      'JWT Authentication & Authorization',
    ],
  },
  {
    title: 'Frontend & Mobile',
    priority: 'secondary',
    skills: [
      'React', 'JavaScript', 'TypeScript', 'Next.js',
      'React Native', 'HTML5', 'CSS3', 'Tailwind CSS',
    ],
  },
  {
    title: 'AI-Assisted Engineering',
    priority: 'tertiary',
    skills: [
      'GitHub Copilot (Certified)', 'Google Antigravity', 'Cursor',
      'Prompt Engineering', 'AI Code Generation', 'Document Automation',
    ],
  },
  {
    title: 'Cloud, DevOps & Tools',
    priority: 'tertiary',
    skills: [
      'AWS Cloud Fundamentals', 'Azure App Services', 'CI/CD Pipelines',
      'Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'Eclipse', 'VS Code',
      'Linux',
    ],
  },
];

export const coreSkills = [
  'Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Oracle SQL',
];

export interface Certification {
  name: string;
  issuer: string;
  type: 'cloud' | 'platform' | 'tool' | 'course';
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    type: 'cloud',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    type: 'cloud',
  },
  {
    name: 'GitHub Copilot Certification',
    issuer: 'GitHub',
    type: 'tool',
  },
  {
    name: 'Alpha — Data Structures & Algorithms in Java',
    issuer: 'Apna College',
    type: 'course',
  },
];
