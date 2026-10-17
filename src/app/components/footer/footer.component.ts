import { Component } from '@angular/core';
import { PROFILE_DATA } from '../../data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  profile = PROFILE_DATA;
  currentYear = new Date().getFullYear();

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  }
}
