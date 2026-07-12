import { environment } from '../../../environments/environment';

export interface NavLink {
  label: string;
  path: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Projetos', path: '/projetos' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Contato', path: '/contato' }
];

export const MUSEUM_NAV: NavLink = {
  label: 'My Museum',
  path: environment.museumUrl,
  external: true
};
