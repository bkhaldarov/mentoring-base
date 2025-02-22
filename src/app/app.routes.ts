import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserComponent } from './components/user/user.component';


export const routes: Routes = [
  {path:'user', component:UserComponent},
  {path:'', component:HomepageComponent},
];
