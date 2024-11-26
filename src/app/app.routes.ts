import { Routes } from '@angular/router';

import { MorecontactsComponent } from './morecontacts/morecontacts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'contacts', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },{
    path:'mcontacts',component:MorecontactsComponent
  },
];
