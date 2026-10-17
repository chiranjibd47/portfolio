import { Component } from '@angular/core';
import { EXPERIENCES, ExperienceItem } from '../../data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceTimelineComponent {
  experiences = EXPERIENCES;
  expandedExperienceId: string = 'infosys-senior-se';

  toggleExpand(id: string): void {
    this.expandedExperienceId = this.expandedExperienceId === id ? '' : id;
  }
}
