import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SOCIAL_LINKS, SocialLink } from '../../core/constants/social.constants';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly links: SocialLink[] = SOCIAL_LINKS;
  readonly museumUrl = environment.museumUrl;
  readonly domain = environment.domain;
}
