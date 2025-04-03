import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'new',
    component: UserFormComponent,
  },
  {
    path: ':id',
    component: UserFormComponent,
  },
];
