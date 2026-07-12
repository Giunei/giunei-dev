import { Component } from '@angular/core';
import {
  FEATURED_PROJECTS,
  FeaturedProject,
  OTHER_PROJECTS
} from '../../../../core/constants/projects.constants';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly featured: FeaturedProject = FEATURED_PROJECTS[0];
  readonly others: FeaturedProject[] = OTHER_PROJECTS;
}
