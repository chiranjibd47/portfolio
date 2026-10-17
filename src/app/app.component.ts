import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chiranjib Das - Senior Systems Engineer Portfolio';

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    // Theme service automatically applies theme on initialization
  }
}
