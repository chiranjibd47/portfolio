import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isDarkMode = true;
  @Output() modeEmitter = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    // Optional: Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
    // Optional: Apply dark mode to entire body
    if (this.isDarkMode) {
      document.body.classList.add('bg-dark', 'text-light');
      this.modeEmitter.emit(true);
    } else {
      document.body.classList.remove('bg-dark', 'text-light');
      this.modeEmitter.emit(false);
    }
  }

  ngOnInit() {
    // Optional: Load saved preference from localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      this.isDarkMode = JSON.parse(savedMode);
      if (this.isDarkMode) {
        document.body.classList.add('bg-dark', 'text-light');
      }
    }
  }
}
