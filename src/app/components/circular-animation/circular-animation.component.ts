import { Component, OnInit } from '@angular/core';

interface IconPosition {
  id: number;
  icon: string;
  path: string;
}

@Component({
  selector: 'app-circular-animation',
  templateUrl: './circular-animation.component.html',
  styleUrls: ['./circular-animation.component.css'],
})
export class CircularAnimationComponent implements OnInit {
  private readonly radiusX = 130;
  private readonly radiusY = 70;
  private readonly centerX = 150;
  private readonly centerY = 100;
  icons: IconPosition[] = [];

  ngOnInit(): void {
    // Create 6 icons alternating between different shapes
    const iconPath = [
      'assets/Icons/spring-boot.svg',
      'assets/Icons/angular.svg',
      'assets/Icons/react.svg',
    ];
    this.icons = Array(3)
      .fill(0)
      .map((_, index) => ({
        id: index,
        icon: iconPath[index % iconPath.length],
        path: 'assets/Icons/spring-boot.svg',
      }));
  }

  getEllipsePath(): string {
    return `M ${this.centerX + this.radiusX} ${this.centerY} 
            A ${this.radiusX} ${this.radiusY} 0 1 1 ${
      this.centerX + this.radiusX - 0.01
    } ${this.centerY}`;
  }

  getIconColor(id: number): string {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];
    return colors[id % colors.length];
  }
}
