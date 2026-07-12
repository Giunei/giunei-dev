import { Component } from '@angular/core';
import {
  ABOUT_FOCUS,
  ABOUT_PHILOSOPHY,
  BRAND_HIGHLIGHTS,
  BRAND_ROLE,
  BRAND_TAGLINE
} from '../../../../core/constants/about.constants';
import { TECH_STACK } from '../../../../core/constants/stack.constants';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly role = BRAND_ROLE;
  readonly highlights = BRAND_HIGHLIGHTS;
  readonly tagline = BRAND_TAGLINE;
  readonly philosophy = ABOUT_PHILOSOPHY;
  readonly focus = ABOUT_FOCUS;
  readonly stack = TECH_STACK;
}
