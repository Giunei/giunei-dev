import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MUSEUM_NAV, NAV_LINKS, NavLink } from '../../core/constants/navigation.constants';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly links: NavLink[] = NAV_LINKS;
  readonly museum = MUSEUM_NAV;
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
