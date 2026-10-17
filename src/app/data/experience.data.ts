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
      'Integrated <strong>Google Maps API</strong> into the Angular dashboard to visually project wind turbine plant locations with real-time rotational speed, operational health status, and maintenance schedules.',
      'Implemented full modules for <strong>scheduled outage management</strong>, allowing plant operators to coordinate downtime, track repair progress, and view upcoming maintenance directly from the UI.',
      'Created backend logic in <strong>Spring Boot</strong> to generate exportable audit reports, supporting high-throughput <strong>PDF and Excel formats</strong> for turbine performance, outages, and maintenance summaries.',
      'Optimized backend APIs by refactoring relational queries, <strong>reducing unnecessary joins</strong>, and introducing <strong>pagination and caching</strong> to deliver faster, sub-second responses to the frontend.',
      'Took <strong>end-to-end technical ownership</strong> of assigned features from initial design and Spring Boot / Angular development to automated testing and documentation.'
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
      'Developed robust backend services using <strong>Java and Spring Boot</strong> to manage real-time inventory tracking across distributed logistics hubs and regional distribution centres.',
      'Designed and implemented normalized relational data models to maintain <strong>shipment statuses, inventory locations, and operational workflows</strong> efficiently.',
      'Participated in debugging and optimizing backend processes, improving reliability and <strong>reducing errors in data flow</strong>.',
      'Authored comprehensive documentation in <strong>Confluence</strong> covering API endpoints and application flow diagrams to support cross-functional teams and developers.',
      'Contributed to migrating the frontend enterprise application from <strong>Angular 6 to Angular 16</strong>, updating deprecated modules and upgrading reactive state.',
      'Worked closely with cross-functional teams including <strong>QA engineers and product owners</strong> to ensure seamless integrations and timely delivery of features.'
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
