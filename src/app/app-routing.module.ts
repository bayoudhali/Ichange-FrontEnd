import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SiginInComponent} from './sigin-in/sigin-in.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {MembersComponent} from './admin/members/members.component';
import {UsersComponent} from './admin/users/users.component';
import {PubsComponent} from './admin/pubs/pubs.component';
import {PubnComponent} from './admin/pubn/pubn.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'sigin-in', component: SiginInComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'members', component: MembersComponent},
  {path: 'users', component: UsersComponent},
  {path: 'pubs', component: PubsComponent},
  {path: 'pubn', component: PubnComponent},
  {
  path: '',
  redirectTo: '/',
   pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
