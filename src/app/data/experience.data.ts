export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  client: string;
  period: string;
  badge: string;
  isCurrent: boolean;
  location: string;
  overview: string;
  responsibilities: string[];
  keyAchievements: string[];
  technologies: string[];
  systemHighlights: {
    metric: string;
    label: string;
  }[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'infosys-senior-se',
    role: 'Senior Systems Engineer',
    company: 'Infosys',
    client: 'Industrial Energy Insights Portal',
    period: 'May 2024 – Present',
    badge: 'Current Role',
    isCurrent: true,
    location: 'Bhubaneswar, India',
    overview:
      'Leading full-stack engineering for an industrial energy portal delivering real-time telemetry, geographic turbine monitoring, automated reporting, and planned outage management.',
    responsibilities: [
      'Integrated Google Maps API within Angular dashboards to dynamically project live wind turbine plant coordinates with real-time rotational speed, operational health status, and maintenance schedules.',
      'Architected end-to-end modules for scheduled outage management, empowering operators to coordinate preventive maintenance, review downtime forecasts, and record repair milestones directly through the interface.',
      'Developed high-performance backend reporting pipelines in Spring Boot supporting asynchronous generation of multi-page PDF and Excel exports for turbine telemetry, outage logs, and operational summaries.',
      'Optimized mission-critical backend APIs by refactoring relational queries, eliminating redundant SQL joins, and implementing server-side pagination and caching for low-latency frontend consumption.',
      'Took end-to-end technical ownership spanning feature specification, architectural design, full-stack implementation, unit testing, and production documentation.'
    ],
    keyAchievements: [
      'Visualized live turbine health and geospatial metrics on interactive maps with real-time parameter streaming',
      'Engineered automated PDF & Excel export pipelines for mission-critical audit compliance',
      'Reduced API query overhead through indexing, optimized joins, and query caching'
    ],
    technologies: [
      'Java 11+',
      'Spring Boot',
      'Angular',
      'TypeScript',
      'Google Maps API',
      'PostgreSQL',
      'REST APIs',
      'Docker',
      'OAuth2'
    ],
    systemHighlights: [
      { metric: 'Real-Time', label: 'Geospatial Turbine Telemetry' },
      { metric: 'Multi-Format', label: 'Automated PDF/Excel Reporting' },
      { metric: 'Optimized', label: 'Query Latency & Caching' }
    ]
  },
  {
    id: 'infosys-se',
    role: 'Systems Engineer',
    company: 'Infosys',
    client: 'Logistics Intelligence Platform',
    period: 'Mar 2023 – April 2024',
    badge: '1 Year 2 Months',
    isCurrent: false,
    location: 'Bhubaneswar, India',
    overview:
      'Engineered scalable Java microservices and data pipelines for a multi-hub enterprise logistics tracking system while spearheading key frontend modernization from Angular 6 to Angular 16.',
    responsibilities: [
      'Developed robust backend services in Java and Spring Boot to track real-time inventory flows across distributed logistics hubs and regional fulfilment centres.',
      'Designed and executed normalized relational data schemas to maintain shipment transit lifecycles, warehouse bin allocations, and operational workflow history with zero data drift.',
      'Participated in end-to-end debugging and optimization of core backend worker processes, improving transactional throughput and preventing race conditions in data pipelines.',
      'Authored exhaustive technical architecture documentation and sequence flow diagrams in Confluence to streamline API adoption across cross-functional frontend, backend, and QA teams.',
      'Contributed to the major enterprise migration of legacy frontend applications from Angular 6 to Angular 16, replacing deprecated modules and leveraging modern reactive practices.',
      'Partnered closely with product owners, database administrators, and QA automation engineers to ensure strict test coverage and reliable release cycles.'
    ],
    keyAchievements: [
      'Successfully migrated legacy Angular 6 codebase up to Angular 16, eliminating deprecated dependencies',
      'Built multi-hub real-time inventory tracking microservices with resilient data schemas',
      'Authored Confluence technical documentation and workflow diagrams for cross-functional developers'
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Angular 16',
      'TypeScript',
      'SQL Server / MySQL',
      'Confluence',
      'Microservices',
      'Git',
      'CI/CD'
    ],
    systemHighlights: [
      { metric: 'Angular 6 → 16', label: 'Enterprise UI Migration' },
      { metric: 'Multi-Hub', label: 'Live Inventory State Tracking' },
      { metric: 'Confluence', label: 'API & Architectural Specs' }
    ]
  }
];
