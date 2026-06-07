import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes básicos',
    loadComponent: () => import('./pages/basic-page/basic-page').then(m => m.BasicPage)
  },
  {
    path: 'custom',
    title: 'Pipes custom',
    loadComponent: () => import('./pages/custom-page/custom-page').then(m => m.CustomPage)
  },
  {
    path: 'numbers',
    title: 'Pipes numéricos',
    loadComponent: () => import('./pages/numbers-page/numbers-page').then(m => m.NumbersPage)
  },
  {
    path: 'uncommon',
    title: 'Pipes poco comunes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page').then(m => m.UncommonPage)
  },
  {
    path: '**',
    redirectTo: 'basic'
  }
];
