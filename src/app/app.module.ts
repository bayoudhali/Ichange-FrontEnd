import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { StoreModule } from '@ngrx/store';

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
import   {Pub} from './shared/pub';
import   {Comments} from './shared/comments';
import {ProfileService} from './profile/profile.service';
import {UserService} from './shared/user.service';
import {AppService} from './app.service';
import { XhrInterceptor } from './xhr.interceptor';
import { principalReducer } from './shared/principal.reducer';
import { MapComponent } from './map/map.component';


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
    PubnComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({principal: principalReducer})
  ],
  providers: [ProfileService,
              AppService,
              { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
              CookieService,
              UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
