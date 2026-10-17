import { Component } from '@angular/core';
import { QUICK_STATS } from '../../data';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent {
  stats = QUICK_STATS;
}
