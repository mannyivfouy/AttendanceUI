import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  { path: '**', redirectTo: 'login' }
];
