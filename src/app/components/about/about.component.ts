import { Component } from '@angular/core';
import { PROFILE_DATA, ENGINEERING_PRINCIPLES } from '../../data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  profile = PROFILE_DATA;
  principles = ENGINEERING_PRINCIPLES;
  activePrincipleIndex = 0;

  selectPrinciple(index: number): void {
    this.activePrincipleIndex = index;
  }
}
