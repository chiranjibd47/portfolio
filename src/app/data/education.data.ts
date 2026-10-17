export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  field: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  category: 'Cloud' | 'Frontend' | 'Architecture' | 'Database';
  badgeColor: string;
  verified: boolean;
  summary: string;
}

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Mechanical Engineering',
    institution: 'GITA Autonomous College',
    location: 'Bhubaneswar, Odisha',
    period: '2018 – 2022',
    details: 'Foundation in analytical problem-solving, mathematical modeling, and engineering systems.'
  },
  {
    degree: 'Higher Secondary (Science)',
    field: 'Science stream (Physics, Chemistry, Mathematics)',
    institution: 'P.N. College',
    location: 'Khordha, Odisha',
    period: '2016 – 2018'
  },
  {
    degree: 'Secondary Education',
    field: 'High School Curriculum',
    institution: 'Janta Bidyapitha',
    location: 'Podadiha, Odisha',
    period: 'Completed'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Infosys Certified Angular Architect',
    issuer: 'Infosys',
    category: 'Architecture',
    badgeColor: 'purple',
    verified: true,
    summary: 'Mastery in large-scale Angular application structure, state management, modularization, and architectural patterns.'
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    category: 'Cloud',
    badgeColor: 'cyan',
    verified: true,
    summary: 'Core Azure cloud architecture, storage, compute, networking, security, and cloud governance.'
  },
  {
    name: 'Infosys Certified Angular Associate',
    issuer: 'Infosys',
    category: 'Frontend',
    badgeColor: 'purple',
    verified: true,
    summary: 'Proficiency in TypeScript, component lifecycles, reactive forms, RxJS observables, and client-side routing.'
  },
  {
    name: 'Infosys Certified AWS Cloud Practitioner',
    issuer: 'Infosys',
    category: 'Cloud',
    badgeColor: 'cyan',
    verified: true,
    summary: 'Foundational cloud infrastructure across AWS Lambda, Amazon S3, compute containers, and database offerings.'
  },
  {
    name: 'Infosys Certified Database & SQL Professional',
    issuer: 'Infosys',
    category: 'Database',
    badgeColor: 'green',
    verified: true,
    summary: 'Advanced relational SQL querying, schema normalization, execution plan analysis, and database performance tuning.'
  }
];
