export interface PersonalProfile {
  name: string;
  tagline: string;
  role: string;
  experienceYears: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  statusText: string;
  statusAvailable: boolean;
  linkedInUrl: string;
  githubUrl: string;
}

export interface StatHighlight {
  label: string;
  value: string;
  detail: string;
  accent: 'purple' | 'cyan' | 'green';
}

export interface EngineeringPrinciple {
  number: string;
  title: string;
  description: string;
  metric: string;
}

export const PROFILE_DATA: PersonalProfile = {
  name: 'Chiranjib Das',
  role: 'Senior Systems Engineer',
  tagline: 'Full-Stack Developer · Scalable Systems & High-Performance UI',
  experienceYears: '3.5+',
  summary:
    'Full Stack Developer with 3.5+ years of enterprise experience engineering resilient, data-intensive web platforms with Java, Spring Boot, and Angular. Specializing in high-throughput RESTful microservices, interactive geospatial dashboards, complex data models, and enterprise UI migrations.',
  location: 'Bhubaneswar, Odisha, India',
  email: 'chiranjibd47@gmail.com',
  phone: '+91-6370171984',
  resumeUrl: 'assets/Resume.pdf',
  statusText: 'Senior Systems Engineer at Infosys',
  statusAvailable: true,
  linkedInUrl: 'https://linkedin.com',
  githubUrl: 'https://github.com'
};

export const QUICK_STATS: StatHighlight[] = [
  {
    label: 'Professional Experience',
    value: '3.5+ Yrs',
    detail: 'Enterprise full-stack engineering at Infosys',
    accent: 'purple'
  },
  {
    label: 'Primary Core Stack',
    value: 'Java & Spring Boot',
    detail: 'Microservices, REST APIs, OAuth2 & JPA',
    accent: 'cyan'
  },
  {
    label: 'Modern Frontend',
    value: 'Angular 16+',
    detail: 'TypeScript, reactive state & map telemetry',
    accent: 'purple'
  },
  {
    label: 'Production Certifications',
    value: '5 Verified',
    detail: 'Azure, AWS, Angular Architect & SQL',
    accent: 'green'
  }
];

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    number: '01',
    title: 'Maintainability Over Unnecessary Complexity',
    description:
      'Write clean, modular code with clear separation of concerns. Solutions should be easily understood and extended by team members 6 months from today.',
    metric: 'Modular Microservices & Components'
  },
  {
    number: '02',
    title: 'Optimized Latency & Usability',
    description:
      'Backend query optimization, pagination, and intelligent client-side caching ensure responsive interfaces even when dealing with real-time industrial telemetry.',
    metric: 'Sub-second API response targets'
  },
  {
    number: '03',
    title: 'Reusable Component Systems',
    description:
      'Build composable, strictly-typed UI components and reactive state services that can be audited, tested, and reused across enterprise feature modules.',
    metric: 'DRY Architecture'
  },
  {
    number: '04',
    title: 'Strict API Contracts & Data Integrity',
    description:
      'Ensure well-defined REST contracts, DTO schemas, and relational constraints between Java backend services and client frontends to eliminate data flow discrepancies.',
    metric: 'Rock-solid contracts'
  },
  {
    number: '05',
    title: 'Reliable, Testable & Documented Code',
    description:
      'Back every critical module with unit tests and comprehensive Confluence architecture diagrams to keep cross-functional engineering teams completely aligned.',
    metric: 'Production-ready reliability'
  }
];
