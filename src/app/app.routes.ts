import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./monitor-legacy-shell/monitor-legacy-shell.component').then(
        m => m.MonitorLegacyShellComponent
      )
  },
  {
    path: 'monitor-v2',
    loadComponent: () =>
      import('./monitor-dashboard/monitor-dashboard.component').then(
        m => m.MonitorDashboardComponent
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
