import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private resumeUrl: string = 'assets/Resume.pdf';

  constructor() {}

  viewResume() {
    window.open(this.resumeUrl, '_blank');
  }
}
