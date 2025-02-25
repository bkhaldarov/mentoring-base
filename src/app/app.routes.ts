import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserListComponent } from './components/user-list/user-list.component';


export const routes: Routes = [
  {path:'user', component:UserListComponent},
  {path:'', component:HomepageComponent},
];
