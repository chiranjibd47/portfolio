export interface SkillItem {
  name: string;
  category: string;
  iconName?: string;
  highlight?: boolean;
  context: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconType: 'backend' | 'frontend' | 'cloud' | 'database' | 'security' | 'tools';
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Scalable server-side microservices, distributed data processing, and robust REST APIs.',
    iconType: 'backend',
    skills: [
      { name: 'Java 11+', category: 'Backend', iconName: 'java', highlight: true, context: 'Enterprise applications, streams, modern syntax & concurrency' },
      { name: 'Spring Boot', category: 'Backend', iconName: 'spring-boot', highlight: true, context: 'RESTful microservices, Spring Data JPA, security' },
      { name: 'Microservices Architecture', category: 'Backend', highlight: true, context: 'Decoupled services, domain boundaries & event flows' },
      { name: 'RESTful Web Services', category: 'Backend', context: 'Standardized API contracts, status codes & pagination' },
      { name: 'Node.js', category: 'Backend', iconName: 'nodejs', context: 'Backend runtimes, event loops & asynchronous utilities' },
      { name: 'Data Caching & Pagination', category: 'Backend', context: 'High-throughput latency reduction & optimized fetches' }
    ]
  },
  {
    id: 'frontend',
    title: 'Modern Frontend',
    description: 'High-performance single page applications, responsive dashboards, and geospatial telemetry.',
    iconType: 'frontend',
    skills: [
      { name: 'Angular (6 - 16+)', category: 'Frontend', iconName: 'angular', highlight: true, context: 'Enterprise components, RxJS, routing & lifecycle management' },
      { name: 'TypeScript', category: 'Frontend', iconName: 'ts', highlight: true, context: 'Strict static typing, interfaces, generics & decorators' },
      { name: 'JavaScript (ES6+)', category: 'Frontend', iconName: 'js', context: 'Asynchronous event handling, modern closures & modularity' },
      { name: 'Google Maps API', category: 'Frontend', highlight: true, context: 'Geospatial asset projection, custom markers & telemetry overlays' },
      { name: 'Responsive UI Design', category: 'Frontend', iconName: 'css', context: 'Fluid grids, mobile-first layouts & accessible typography' },
      { name: 'HTML5 & Modern CSS', category: 'Frontend', iconName: 'html', context: 'Semantic layout, CSS variables & fluid animations' }
    ]
  },
  {
    id: 'database',
    title: 'Databases & Data Modeling',
    description: 'Relational data modeling, index optimization, and transactional integrity.',
    iconType: 'database',
    skills: [
      { name: 'PostgreSQL', category: 'Database', highlight: true, context: 'Complex queries, schema design, constraints & performance indexing' },
      { name: 'SQL Server', category: 'Database', context: 'Enterprise transactions, stored routines & data consistency' },
      { name: 'MySQL', category: 'Database', iconName: 'mysql', context: 'Relational storage, query optimization & joins reduction' },
      { name: 'Spring Data JPA / Hibernate', category: 'Database', highlight: true, context: 'ORM mappings, repository patterns & transactional boundaries' },
      { name: 'Database Query Tuning', category: 'Database', context: 'Eliminating N+1 queries, redundant joins & query profiling' }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Infrastructure',
    description: 'Containerization, cloud workloads, and automated delivery pipelines.',
    iconType: 'cloud',
    skills: [
      { name: 'AWS (Familiarity)', category: 'Cloud', iconName: 'aws', highlight: true, context: 'Lambda, S3 storage, ECS/EKS containerization & DynamoDB' },
      { name: 'Microsoft Azure', category: 'Cloud', iconName: 'azure', highlight: true, context: 'Azure Fundamentals certified, cloud concepts & services' },
      { name: 'Docker', category: 'DevOps', iconName: 'docker', highlight: true, context: 'Multi-stage container builds & reproducible development runs' },
      { name: 'Kubernetes', category: 'DevOps', context: 'Container orchestration principles & pod deployments' },
      { name: 'Git & Version Control', category: 'DevOps', iconName: 'git', context: 'Branching strategies, collaborative code reviews & PR merges' },
      { name: 'CI/CD (Jenkins / GitHub)', category: 'DevOps', iconName: 'jenkins', context: 'Automated test runners, build pipelines & deployment validation' }
    ]
  },
  {
    id: 'security-architecture',
    title: 'Security & Enterprise Architecture',
    description: 'Identity federation, tokenized access controls, and cross-functional documentation.',
    iconType: 'security',
    skills: [
      { name: 'OAuth2 & Token Auth', category: 'Security', highlight: true, context: 'Stateless access tokens, bearer claims & authentication flows' },
      { name: 'OKTA Identity Management', category: 'Security', highlight: true, context: 'Enterprise single sign-on & identity provider integration' },
      { name: 'Secure Coding Practices', category: 'Security', context: 'OWASP mitigation, input sanitization & secret protection' },
      { name: 'Confluence Architecture Specs', category: 'Architecture', context: 'System diagrams, API contracts & team knowledge sharing' },
      { name: 'API Debugging & Monitoring', category: 'Architecture', iconName: 'postman', context: 'Postman collections, endpoint verification & load testing' }
    ]
  }
];
