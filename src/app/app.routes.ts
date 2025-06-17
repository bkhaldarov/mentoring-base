import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserListComponent } from './user-list/user-list.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './auth.guard';


export const routes: Routes = [
  {path:'user', component:UserListComponent},
  {path:'', component:HomepageComponent},
  {path:'todos', component:TodosListComponent},
  {path:'admin', component:AdminComponent, canActivate:[authGuard] },
];
