import { Component } from '@angular/core';
import { EDUCATION_LIST, CERTIFICATIONS } from '../../data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = EDUCATION_LIST;
  certifications = CERTIFICATIONS;
}
