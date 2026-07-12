import { Component } from '@angular/core';
import { SOCIAL_LINKS, SocialLink } from '../../../../core/constants/social.constants';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly links: SocialLink[] = SOCIAL_LINKS;
  readonly museumUrl = environment.museumUrl;
}
