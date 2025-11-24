import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { Dashboard } from './pages/dashboard/dashboard';
import { Input } from './pages/input/input';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: 'input', component: Input },
      { path: 'dashboard', component: Dashboard },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
