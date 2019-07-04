import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SiginInComponent } from './sigin-in/sigin-in.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MainComponent } from './admin/main/main.component';
import { MembersComponent } from './admin/members/members.component';
import { UsersComponent } from './admin/users/users.component';
import { PubsComponent } from './admin/pubs/pubs.component';
import { PubnComponent } from './admin/pubn/pubn.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiginInComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    NewsComponent,
    ProfileComponent,
    DashboardComponent,
    MainComponent,
    MembersComponent,
    UsersComponent,
    PubsComponent,
    PubnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
