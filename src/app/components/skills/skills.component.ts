import { Component } from '@angular/core';
import { SKILL_CATEGORIES, SkillCategory, SkillItem } from '../../data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  categories = SKILL_CATEGORIES;
  selectedCategoryId: string = 'all';

  get filteredCategories(): SkillCategory[] {
    if (this.selectedCategoryId === 'all') {
      return this.categories;
    }
    return this.categories.filter(c => c.id === this.selectedCategoryId);
  }

  setCategory(id: string): void {
    this.selectedCategoryId = id;
  }

  getIconPath(iconName?: string): string {
    if (!iconName) return '';
    return `assets/Icons/${iconName}.svg`;
  }
}
