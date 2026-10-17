import { Component } from '@angular/core';

interface ApproachStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tag: string;
}

@Component({
  selector: 'app-approach',
  templateUrl: './approach.component.html',
  styleUrls: ['./approach.component.css']
})
export class ApproachComponent {
  steps: ApproachStep[] = [
    {
      step: '01',
      title: 'Analyze & Specify Requirements',
      subtitle: 'Clarifying Constraints & Business Logic',
      description:
        'Engage closely with product owners, domain specialists, and QA engineers to clarify data boundaries, concurrency requirements, expected latency, and edge cases before writing a line of code.',
      deliverables: ['Requirement specifications', 'Domain boundary maps', 'Entity lifecycle models'],
      tag: 'DISCOVERY & SCOPE'
    },
    {
      step: '02',
      title: 'Architect Data Models & API Contracts',
      subtitle: 'Schema Normalization & Interface Contracts',
      description:
        'Design relational database schemas, DTOs, and REST API contracts. Formalize sequence diagrams in Confluence to ensure the frontend Angular team and backend Java microservices remain in perfect harmony.',
      deliverables: ['Normalized SQL schemas', 'OpenAPI / Swagger contracts', 'Confluence flow diagrams'],
      tag: 'SYSTEM ARCHITECTURE'
    },
    {
      step: '03',
      title: 'Iterative Full-Stack Implementation',
      subtitle: 'Modern Angular & Resilient Spring Boot',
      description:
        'Implement clean Spring Boot services, repository layers, and transactional queries. Complement with modular Angular components, reactive RxJS streams, and accessible UI interactions.',
      deliverables: ['Clean Java & Spring microservices', 'Reactive Angular UI modules', 'Dockerized runtime configs'],
      tag: 'DEVELOPMENT'
    },
    {
      step: '04',
      title: 'Test, Profile & Production Optimization',
      subtitle: 'Quality Assurance, Indexing & Caching',
      description:
        'Audit queries for slow execution plans, configure pagination and caching, write unit and integration test suites, and orchestrate automated CI/CD validation before deployment.',
      deliverables: ['JUnit & Karma test suites', 'Indexed database tuning', 'Sub-second API verification'],
      tag: 'RELIABILITY & DEPLOYMENT'
    }
  ];

  activeStep = 0;

  selectStep(idx: number): void {
    this.activeStep = idx;
  }
}
