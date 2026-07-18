import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/components/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
/*       {
        path: 'dashboard',
        loadChildren: () => Promise.resolve(DASHBOARD_ROUTES),
      }, */
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
