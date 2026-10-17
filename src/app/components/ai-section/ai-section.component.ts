import { Component } from '@angular/core';

interface AiExplorationArea {
  title: string;
  category: string;
  description: string;
  status: 'Active Workflow' | 'Research & Exploration';
  technologies: string[];
}

@Component({
  selector: 'app-ai-section',
  templateUrl: './ai-section.component.html',
  styleUrls: ['./ai-section.component.css']
})
export class AiSectionComponent {
  areas: AiExplorationArea[] = [
    {
      title: 'AI-Augmented Developer Workflows',
      category: 'Productivity & Tooling',
      description:
        'Leveraging cutting-edge LLMs (Gemini, Claude, Copilot) for accelerated boilerplate generation, complex regex creation, code refactoring, and edge-case test suite synthesis.',
      status: 'Active Workflow',
      technologies: ['Gemini CLI', 'GitHub Copilot', 'Prompt Engineering', 'Context Augmentation']
    },
    {
      title: 'Structured Output & LLM Integration Patterns',
      category: 'Architectural Exploration',
      description:
        'Experimenting with JSON schema constrained decoding, function calling, and structured prompt pipelines to bridge generative AI outputs reliably with Java / Spring Boot enterprise services.',
      status: 'Research & Exploration',
      technologies: ['JSON Schema Guardrails', 'LangChain4j Concepts', 'RESTful AI Connectors']
    },
    {
      title: 'RAG & Semantic Retrieval Foundations',
      category: 'Information Architecture',
      description:
        'Studying Retrieval-Augmented Generation architectures, vector embeddings, and chunking heuristics for enterprise documentation and internal knowledge retrieval.',
      status: 'Research & Exploration',
      technologies: ['Vector Similarity', 'Context Chunking', 'PostgreSQL pgvector Study']
    }
  ];
}
