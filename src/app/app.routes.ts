import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./portfolio/pages/introduce/introduce'),
    children: [
      {
        path: 'projects',
        loadComponent: () => import('./portfolio/pages/my-projects/my-projects'),
      },
      {
        path: 'tecnologies',
        loadComponent: () => import('./portfolio/pages/tecnologies/tecnologies'),
      },
      {
        path: 'contact',
        loadComponent: () => import('./portfolio/pages/contact/contact'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
