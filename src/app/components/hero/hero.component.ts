import { Component, OnInit } from '@angular/core';
import { PROFILE_DATA } from '../../data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  profile = PROFILE_DATA;
  activeWorkspaceTab: 'telemetry' | 'controller' | 'terminal' = 'telemetry';

  // Interactive simulation state in Hero
  turbineRunning = true;
  turbineRpm = 18.6;
  turbinePower = 2.45;
  turbineHealth = 'OPTIMAL';
  lastPingMs = 38;

  terminalLogs = [
    { type: 'info', text: 'Initializing Spring Boot microservice context...' },
    { type: 'success', text: 'Connected to PostgreSQL pool (HikariCP: 10 connections)' },
    { type: 'info', text: 'Angular 16 reactive frontend hydration verified' },
    { type: 'success', text: 'Google Maps telemetry ingestion: 24 turbine nodes active' }
  ];

  ngOnInit(): void {
    // Subtle periodic heartbeat fluctuation for realistic telemetry feel
    setInterval(() => {
      if (this.turbineRunning) {
        this.turbineRpm = Number((18.2 + Math.random() * 0.9).toFixed(1));
        this.turbinePower = Number((2.38 + Math.random() * 0.18).toFixed(2));
        this.lastPingMs = Math.floor(32 + Math.random() * 14);
      }
    }, 3500);
  }

  toggleTurbineState(): void {
    this.turbineRunning = !this.turbineRunning;
    if (!this.turbineRunning) {
      this.turbineRpm = 0;
      this.turbinePower = 0;
      this.turbineHealth = 'STANDBY';
    } else {
      this.turbineRpm = 18.5;
      this.turbinePower = 2.42;
      this.turbineHealth = 'OPTIMAL';
    }
  }

  setWorkspaceTab(tab: 'telemetry' | 'controller' | 'terminal'): void {
    this.activeWorkspaceTab = tab;
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  }
}
