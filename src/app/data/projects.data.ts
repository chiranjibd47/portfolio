export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Enterprise Platform' | 'Full-Stack Architecture' | 'Cloud & Systems';
  timeline: string;
  client: string;
  featured: boolean;
  summary: string;
  challenge: string;
  solution: string;
  implementationHighlights: string[];
  metrics: { value: string; label: string }[];
  technologies: string[];
  architecturePoints: string[];
  hasLiveDemoSimulation: boolean;
  simulationType: 'energy-telemetry' | 'logistics-hub' | 'api-gateway';
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'industrial-energy-portal',
    title: 'Industrial Energy Insights & Turbine Telemetry Portal',
    subtitle: 'Geospatial Industrial Monitoring, Outage Management & Export Engine',
    category: 'Enterprise Platform',
    timeline: 'May 2024 – Present',
    client: 'Industrial Energy Insights Portal (Infosys)',
    featured: true,
    summary:
      'A mission-critical enterprise telemetry portal deployed for industrial energy operators. Combines real-time Google Maps geospatial tracking for wind and power turbine assets with dynamic outage workflows, maintenance planning, and automated high-throughput PDF/Excel report generation.',
    challenge:
      'Plant operators needed immediate situational awareness over distributed turbine installations across varied geographic coordinates, with instant visibility into rotational velocity, operating temperatures, planned downtime schedules, and fast audit reporting without bogging down database servers.',
    solution:
      'Engineered a reactive Angular dashboard with custom Google Maps overlays that renders live turbine telemetry. Built modular outage management interfaces allowing operators to schedule maintenance windows directly. On the backend, created a Spring Boot reporting microservice capable of compiling and streaming PDF and Excel documents asynchronously, paired with indexed database queries and caching to optimize response times.',
    implementationHighlights: [
      'Interactive Google Maps integration with custom SVG markers reflecting turbine health, operating RPM, and last inspection timestamp.',
      'Comprehensive Scheduled Outage Management subsystem with maintenance window calendars and live repair progress updates.',
      'High-performance Spring Boot export logic generating paginated PDF charts and detailed Excel sheets.',
      'Optimized query execution paths in PostgreSQL/SQL Server, eliminating redundant relational joins and introducing pagination/caching.'
    ],
    metrics: [
      { value: 'Real-Time', label: 'Telemetry Streaming' },
      { value: 'Multi-Format', label: 'PDF & Excel Generation' },
      { value: 'Sub-Second', label: 'Cached API Response' },
      { value: '100%', label: 'Feature Delivery Ownership' }
    ],
    technologies: [
      'Angular',
      'Java 11+',
      'Spring Boot',
      'Google Maps API',
      'PostgreSQL',
      'REST APIs',
      'Docker',
      'OAuth2'
    ],
    architecturePoints: [
      'Microservices architecture with clear boundary between telemetry ingestion and export reporting',
      'Angular reactive forms and RxJS state management for seamless UI updates',
      'Spring Boot resource-streaming endpoints preventing memory exhaustion on huge file downloads',
      'Database indexing strategy targeted on turbine time-series telemetry keys'
    ],
    hasLiveDemoSimulation: true,
    simulationType: 'energy-telemetry'
  },
  {
    id: 'logistics-intelligence-platform',
    title: 'Logistics Intelligence & Multi-Hub Inventory Platform',
    subtitle: 'Real-Time Shipment Tracking & Enterprise Angular 16 Migration',
    category: 'Enterprise Platform',
    timeline: 'Mar 2023 – April 2024',
    client: 'Logistics Intelligence Platform (Infosys)',
    featured: true,
    summary:
      'A distributed logistics and inventory tracking system managing cargo flow across multi-regional logistic distribution centres. Also encompassed a critical frontend architectural modernization migrating legacy Angular 6 to Angular 16.',
    challenge:
      'The client faced data latency and inventory discrepancies across high-velocity logistics hubs. Additionally, the existing UI codebase was locked on legacy Angular 6 with obsolete libraries, impeding performance, type safety, and security compliance.',
    solution:
      'Developed high-reliability Java Spring Boot backend services to capture and reconcile inventory movements in real time. Designed clean relational schemas for shipment lifecycle tracking. Simultaneously led key segments of the modernization from Angular 6 to Angular 16, refactoring deprecated syntax into modern standalone patterns and reactive services.',
    implementationHighlights: [
      'Designed normalized database schemas to model shipment transitions, warehouse bay assignments, and custody handoffs.',
      'Engineered backend inventory tracking microservices ensuring atomic updates and eliminating race conditions.',
      'Contributed to the multi-version enterprise modernization from Angular 6 to Angular 16, upgrading build tooling and reactive state.',
      'Penned extensive architecture blueprints and REST API specifications in Confluence for cross-functional engineering teams.'
    ],
    metrics: [
      { value: 'v6 → v16', label: 'Angular Migration' },
      { value: 'Multi-Hub', label: 'Real-Time Inventory' },
      { value: 'Zero Drift', label: 'Shipment Tracking Integrity' },
      { value: '10+ Specs', label: 'Confluence API Workflows' }
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Angular 16',
      'TypeScript',
      'SQL Server / MySQL',
      'Microservices',
      'Git / CI/CD',
      'Confluence'
    ],
    architecturePoints: [
      'Transactional Spring Data services ensuring ACID guarantees across warehouse operations',
      'Modernized TypeScript interfaces and Angular RxJS observables for fluid data updates',
      'Standardized REST endpoints documented with Swagger and Confluence flowcharts',
      'Automated testing workflows integrated into Jenkins CI/CD pipelines'
    ],
    hasLiveDemoSimulation: true,
    simulationType: 'logistics-hub'
  },
  {
    id: 'secure-microservice-foundations',
    title: 'Enterprise Microservice Architecture & Security Gateway',
    subtitle: 'Secure Coding, OAuth2/Okta Integration & Scalable RESTful Services',
    category: 'Cloud & Systems',
    timeline: '2023 – 2024',
    client: 'Infosys Enterprise Architecture Practice',
    featured: false,
    summary:
      'Design and implementation of cloud-ready microservices leveraging Java, Spring Boot, OAuth2 authentication, Okta identity federation, and Dockerized runtime environments for enterprise-grade compliance.',
    challenge:
      'Ensuring strict role-based access control, cryptographic token verification, and low-latency inter-service communication across distributed microservices.',
    solution:
      'Implemented OAuth2 / Okta JWT token validation filters, fine-grained method-level security with Spring Security, Docker containerization for standardized deployments, and robust unit/integration test suites.',
    implementationHighlights: [
      'Stateless JWT validation filters integrated into Spring Boot web services.',
      'Containerized development environments with Docker for reproducible builds across dev and CI/CD.',
      'Applied secure coding practices preventing SQL injection, broken authentication, and sensitive data exposure.',
      'Modular architecture facilitating seamless integration with cloud infrastructure (AWS S3, Lambda, ECS).'
    ],
    metrics: [
      { value: 'OAuth2/OKTA', label: 'Identity Protection' },
      { value: 'Dockerized', label: 'Container Runtime' },
      { value: 'RESTful', label: 'Microservice Design' }
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'OAuth2',
      'Okta',
      'Docker',
      'AWS S3 / Lambda',
      'RESTful APIs',
      'JUnit'
    ],
    architecturePoints: [
      'Spring Security filter chain configuration with fine-grained claim validation',
      'Docker multi-stage builds for minimal container attack surface',
      'AWS cloud infrastructure familiarity (S3, Lambda, DynamoDB, ECS/EKS)',
      'Database connection pooling and prepared statements for absolute SQL safety'
    ],
    hasLiveDemoSimulation: true,
    simulationType: 'api-gateway'
  }
];
