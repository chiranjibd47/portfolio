import { Component } from '@angular/core';
import { PROJECTS, ProjectItem } from '../../data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = PROJECTS;
  activeProjectTab: string = 'industrial-energy-portal';
  selectedModalProject: ProjectItem | null = null;

  // Turbine Telemetry Simulation State
  turbines = [
    { id: 'T-01', name: 'Coastal Offshore Alpha', speedRpm: 18.4, health: 'Optimal (98%)', lastMaint: '14 Oct 2026', powerMw: 2.45, status: 'Active' },
    { id: 'T-02', name: 'Ridge Highland Beta', speedRpm: 17.1, health: 'Optimal (94%)', lastMaint: '28 Sep 2026', powerMw: 2.15, status: 'Active' },
    { id: 'T-03', name: 'Valley Sector Gamma', speedRpm: 0.0, health: 'Scheduled Outage', lastMaint: 'Today', powerMw: 0.0, status: 'Maintenance' }
  ];
  selectedTurbine = this.turbines[0];
  exportingFormat: string | null = null;
  exportSuccessMsg: string | null = null;

  // Logistics Hub Simulation State
  hubs = [
    { name: 'Hub East (Bhubaneswar/Kolkata)', activeShipments: 1420, capacityUsed: '78%', status: 'Nominal Flow' },
    { name: 'Hub South (Hyderabad)', activeShipments: 2150, capacityUsed: '88%', status: 'High Volume' },
    { name: 'Hub North (Delhi NCR)', activeShipments: 1890, capacityUsed: '72%', status: 'Nominal Flow' }
  ];
  selectedHub = this.hubs[0];

  selectTurbine(t: any): void {
    this.selectedTurbine = t;
  }

  selectHub(h: any): void {
    this.selectedHub = h;
  }

  triggerExport(format: 'PDF' | 'Excel'): void {
    this.exportingFormat = format;
    this.exportSuccessMsg = null;
    setTimeout(() => {
      this.exportingFormat = null;
      this.exportSuccessMsg = `${format} report compiled & streamed successfully via Spring Boot.`;
      setTimeout(() => {
        this.exportSuccessMsg = null;
      }, 4000);
    }, 1200);
  }

  openCaseStudy(project: ProjectItem): void {
    this.selectedModalProject = project;
  }

  closeCaseStudy(): void {
    this.selectedModalProject = null;
  }
}
