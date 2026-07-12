import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Giunei — Home'
  },
  {
    path: 'projetos',
    loadComponent: () =>
      import('./features/projects/pages/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
    title: 'Giunei — Projetos'
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./features/about/pages/about/about.component').then((m) => m.AboutComponent),
    title: 'Giunei — Sobre'
  },
  {
    path: 'contato',
    loadComponent: () =>
      import('./features/contact/pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    title: 'Giunei — Contato'
  },
  { path: '**', redirectTo: '' }
];
