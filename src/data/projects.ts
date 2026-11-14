export interface Technology {
  name: string;
  category: 'backend' | 'frontend' | 'mobile' | 'database' | 'cloud' | 'ai' | 'tool';
}

export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  primaryTech: string[];
  links: ProjectLink;
  featured: boolean;
  order: number;
  highlights: string[];
  architecture?: string;
}

export const projects: Project[] = [
  {
    slug: 'bharattrains',
    title: 'BharatTrains',
    category: 'Backend Engineering / Microservices',
    tagline: 'Railway booking platform built with microservices architecture',
    description:
      'A railway booking platform developed initially with Spring MVC and Spring Boot, then refactored into a distributed microservices architecture with independent services for bookings, seats, trains, payments, and notifications.',
    longDescription: `BharatTrains is a railway booking backend platform that evolved through two major architectural stages. The initial version used a monolithic Spring Boot application before being refactored into a microservices architecture.

The microservices design cleanly separates concerns across five independent services: Booking Service handles reservation workflows, Seat Service manages availability tracking, Train Service maintains route and schedule data, Payment Service processes transactions, and Notification Service delivers confirmation updates.

JWT-based authentication and authorization secure the APIs across services. An admin dashboard provides visibility into bookings, users, routes, and analytics. Apache Kafka was explored at a proof-of-concept level for asynchronous event-based communication between services.`,
    technologies: [
      'Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'Microservices',
      'JWT', 'Oracle SQL', 'Hibernate', 'JPA', 'Apache Kafka (PoC)'
    ],
    primaryTech: ['Java', 'Spring Boot', 'Microservices', 'REST APIs'],
    links: {},
    featured: true,
    order: 1,
    highlights: [
      'Microservices architecture with five independent services',
      'JWT-based authentication and authorization across services',
      'Admin dashboard for bookings, users, routes, and analytics',
      'Seat availability management and booking workflow',
      'Apache Kafka explored for asynchronous event-based communication (PoC)',
      'Refactored from monolithic Spring Boot to microservices',
      'Oracle SQL with Hibernate/JPA for data persistence',
    ],
    architecture: 'microservices',
  },
  {
    slug: 'swiftcart',
    title: 'SwiftCart',
    category: 'Backend Engineering / E-Commerce',
    tagline: 'Spring Boot microservices e-commerce backend with API Gateway',
    description:
      'A Spring Boot microservices-based e-commerce backend with synchronous inter-service communication, service discovery, and an API Gateway providing a unified entry point for distributed services.',
    longDescription: `SwiftCart is a distributed e-commerce backend designed around microservices principles. The architecture uses synchronous inter-service communication to coordinate between independent product, order, inventory, and user management services.

Service discovery allows services to dynamically register and locate each other without hardcoded configuration. The API Gateway provides a unified entry point for all client requests, handling routing, load balancing, and cross-cutting concerns.

The system is designed with cloud-agnostic principles, making it adaptable for deployment in AWS or Azure environments. This architecture demonstrates patterns common in enterprise e-commerce backends: decoupled services, centralized routing, and resilient distributed design.`,
    technologies: [
      'Java', 'Spring Boot', 'Spring Cloud', 'REST APIs', 'Microservices',
      'API Gateway', 'Service Discovery', 'Oracle SQL', 'Hibernate', 'JPA'
    ],
    primaryTech: ['Java', 'Spring Boot', 'Spring Cloud', 'API Gateway'],
    links: {},
    featured: true,
    order: 2,
    highlights: [
      'API Gateway for centralized request routing',
      'Service discovery for dynamic service registration',
      'Synchronous inter-service communication',
      'Distributed microservices architecture',
      'Cloud-agnostic design for AWS/Azure compatibility',
      'RESTful API design across all services',
    ],
  },
  {
    slug: 'parivarvault',
    title: 'ParivarVault',
    category: 'Mobile Product / Security / Product Engineering',
    tagline: 'Offline-first Android family document vault with AES-256 encryption',
    description:
      'An offline-first Android family document vault for Indian families, built with React Native. Features PIN and biometric authentication, OCR-based document autofill, AES-256 encrypted backups, and support for five Indian languages.',
    longDescription: `ParivarVault is a security-focused mobile application built for Indian families to safely store, organize, and share important documents entirely offline.

The application implements PIN and biometric authentication as the primary security layer. Google ML Kit OCR enables automatic document data extraction, reducing manual entry errors when digitizing physical documents.

Documents can be shared via offline QR codes, eliminating the need for internet connectivity during sharing. AES-256 encrypted backups protect document data at rest. Document expiry reminders notify users before important documents like passports or licenses expire. An emergency access mode provides controlled access in urgent situations. The application supports five Indian languages to serve diverse users across the country.`,
    technologies: [
      'React Native', 'Google ML Kit OCR', 'AES-256 Encryption',
      'Biometric Authentication', 'QR Code', 'JavaScript', 'Android'
    ],
    primaryTech: ['React Native', 'AES-256', 'Google ML Kit', 'Android'],
    links: {},
    featured: true,
    order: 3,
    highlights: [
      'PIN and biometric authentication',
      'Google ML Kit OCR for automated document autofill',
      'Offline QR code sharing (no internet required)',
      'AES-256 encrypted document backups',
      'Document expiry reminders and alerts',
      'Emergency access mode',
      'Support for five Indian languages',
      'Fully offline-first architecture',
    ],
  },
  {
    slug: 'genai',
    title: 'GenAI',
    category: 'AI Integration / Android Development',
    tagline: 'Multi-service AI Android app integrating GPT, DALL-E, Gemini, and Hugging Face',
    description:
      'An AI-powered Android application integrating multiple generative AI services including OpenAI GPT-3.5, DALL-E 2.0, Google Gemini, and Hugging Face models. Features five specialized chat assistants, text generation, image generation, and image detection.',
    longDescription: `GenAI is an Android application that brings together multiple generative AI and ML services into a unified mobile experience.

The application integrates OpenAI GPT-3.5 for conversational AI, DALL-E 2.0 for image generation from text prompts, Google Gemini for multimodal capabilities, and various Hugging Face models for specialized tasks. Five distinct chat assistants are available, each tailored for specific use cases such as general conversation, code assistance, creative writing, image analysis, and technical queries.

Firebase Authentication secures user access, and Cloud Firestore handles conversation history and user preferences. The app demonstrates practical integration of diverse AI APIs into a cohesive mobile product experience.`,
    technologies: [
      'Android', 'React Native', 'OpenAI GPT-3.5', 'DALL-E 2.0',
      'Google Gemini', 'Hugging Face', 'Firebase Authentication',
      'Cloud Firestore', 'REST APIs', 'JavaScript'
    ],
    primaryTech: ['OpenAI GPT-3.5', 'DALL-E 2.0', 'Google Gemini', 'Firebase'],
    links: {},
    featured: true,
    order: 4,
    highlights: [
      'OpenAI GPT-3.5 integration for conversational AI',
      'DALL-E 2.0 for text-to-image generation',
      'Google Gemini for multimodal capabilities',
      'Hugging Face models for specialized tasks',
      'Five specialized chat assistants',
      'Firebase Authentication and Cloud Firestore',
      'Text generation, image generation, and image detection',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}
