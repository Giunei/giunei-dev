import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ABOUT_FOCUS,
  ABOUT_PHILOSOPHY,
  BRAND_HIGHLIGHTS,
  BRAND_ROLE,
  BRAND_TAGLINE
} from '../../../../core/constants/about.constants';
import {
  FEATURED_PROJECTS,
  OTHER_PROJECTS
} from '../../../../core/constants/projects.constants';
import { GITHUB_URL } from '../../../../core/constants/social.constants';
import { TECH_STACK } from '../../../../core/constants/stack.constants';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly featured = FEATURED_PROJECTS[0];
  readonly others = OTHER_PROJECTS;
  readonly role = BRAND_ROLE;
  readonly highlights = BRAND_HIGHLIGHTS;
  readonly tagline = BRAND_TAGLINE;
  readonly githubUrl = GITHUB_URL;
  readonly stack = TECH_STACK;
  readonly philosophy = ABOUT_PHILOSOPHY;
  readonly focus = ABOUT_FOCUS;
}
