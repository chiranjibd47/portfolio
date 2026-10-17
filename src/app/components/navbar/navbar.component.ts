import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';
import { PROFILE_DATA } from '../../data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isDarkMode = true;
  isScrolled = false;
  mobileMenuOpen = false;
  activeSection = 'hero';
  profile = PROFILE_DATA;
  private themeSub?: Subscription;

  navItems = [
    { label: 'About', target: 'about' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Skills', target: 'skills' },
    { label: 'Approach', target: 'approach' },
    { label: 'Contact', target: 'contact' }
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSub = this.themeService.isDarkMode$.subscribe(
      dark => (this.isDarkMode = dark)
    );
    this.checkScroll();
  }

  ngOnDestroy(): void {
    this.themeSub?.unsubscribe();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
    this.determineActiveSection();
  }

  checkScroll(): void {
    this.isScrolled = window.scrollY > 30;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  scrollTo(sectionId: string): void {
    this.closeMobileMenu();
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      this.activeSection = sectionId;
    }
  }

  private determineActiveSection(): void {
    const sections = ['contact', 'approach', 'skills', 'projects', 'experience', 'about', 'hero'];
    const scrollPos = window.scrollY + 200;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el && el.offsetTop <= scrollPos) {
        this.activeSection = section;
        break;
      }
    }
  }
}
