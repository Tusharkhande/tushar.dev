export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'full-time' | 'internship';
  isCurrent: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Cognizant Technology Solutions',
    role: 'Jr. Software Engineer',
    period: 'November 2024 – Present',
    location: 'Pune, Maharashtra, India',
    type: 'full-time',
    isCurrent: true,
    description:
      'Developing, enhancing, and maintaining enterprise insurance applications using Java, Spring Boot, REST APIs, Hibernate/JPA, and Oracle SQL.',
    highlights: [
      'Enterprise insurance application development using Java and Spring Boot',
      'REST API development and backend component implementation',
      'Hibernate/JPA for ORM and data access layer implementation',
      'Oracle SQL query optimization and database schema enhancements',
      'Production issue investigation, troubleshooting, and resolution',
      'Code reviews and CI/CD pipeline validation',
      'Collaboration with QA, business analysts, UI developers, and DevOps engineers',
      'AI-assisted development and engineering workflows using GitHub Copilot, Google Antigravity, and Cursor',
      'Developed internal document-generation tooling to streamline effort estimation and project artifacts',
      'Application reliability and data integrity improvements',
    ],
    technologies: [
      'Java', 'Spring Boot', 'REST APIs', 'Hibernate', 'JPA',
      'Oracle SQL', 'CI/CD', 'GitHub Copilot', 'Antigravity', 'Cursor',
    ],
  },
  {
    company: 'Technovate Infotech',
    role: 'Android Developer Intern',
    period: 'April 2023 – July 2023',
    location: 'Pune, Maharashtra, India',
    type: 'internship',
    isCurrent: false,
    description:
      'Built React Native mobile applications including a Wi-Fi scanning and connectivity app, and contributed to React Native and React web frontend projects.',
    highlights: [
      'Developed a React Native Wi-Fi scanning and connectivity application',
      'Contributed to cross-platform React Native mobile application development',
      'Contributed to React web application frontend interfaces and features',
    ],
    technologies: ['React', 'React Native', 'JavaScript', 'Android', 'HTML/CSS'],
  },
  {
    company: 'Mass Technologies',
    role: 'Java Developer Intern',
    period: 'February 2023 – April 2023',
    location: 'Pune, Maharashtra, India',
    type: 'internship',
    isCurrent: false,
    description:
      'Contributed to a Java web application using JSP, Servlets, and JDBC for data access and backend logic.',
    highlights: [
      'Contributed to Java web application development',
      'Worked with JSP and Servlets for server-side rendering',
      'Implemented backend logic with JDBC for database interaction',
    ],
    technologies: ['Java', 'JSP', 'Servlets', 'JDBC', 'SQL'],
  },
];
