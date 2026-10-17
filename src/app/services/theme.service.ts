import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'cd_portfolio_theme';
  private isDarkSubject = new BehaviorSubject<boolean>(true);
  isDarkMode$ = this.isDarkSubject.asObservable();

  constructor() {
    this.initTheme();
  }

  get isDarkMode(): boolean {
    return this.isDarkSubject.value;
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    if (savedTheme) {
      this.setTheme(savedTheme === 'dark');
    } else {
      // Default to dark theme as required
      this.setTheme(true);
    }
  }

  toggleTheme(): void {
    this.setTheme(!this.isDarkSubject.value);
  }

  setTheme(isDark: boolean): void {
    this.isDarkSubject.next(isDark);
    localStorage.setItem(this.STORAGE_KEY, isDark ? 'dark' : 'light');
    if (isDark) {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
    }
  }
}
