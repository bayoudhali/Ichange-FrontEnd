import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';

import   {Pub} from '../shared/pub';
import   {User} from '../shared/user';
import {ProfileService} from '../profile/profile.service';
import {UserService} from '../shared/user.service';
import {AppService} from '../app.service';
import { PrincipalState } from '../shared/principal.state';
import { Principal } from '../shared/principal.model';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

private principal: Principal;
pubs:Pub[];
user:User;


  constructor(private ServiceProfile:ProfileService,
    private appService:AppService,private router:Router,private store: Store<PrincipalState>,private ServiceUser:UserService) { }

  ngOnInit() {

    this.loadPub();
    this.loadUser();
  }

  loadPub(){

  this.ServiceProfile.getPub().subscribe(
    data => {this.pubs =data},
    error => {console.log('error to display data')},
    () => {console.log('succes to load data')}
  );
}

loadUser(){
  let email:string;
    this.store.select('principal').subscribe(principal => {
      this.principal = principal;
        email=principal.name;

  })
 console.log(email);
 this.ServiceUser.getUserByEmail(email).subscribe(
   data => {console.log(this.user=data);},
   error => {console.log('error to display data')},
   () => {console.log('succes to load data')}
  );
  }

logout(){
   this.appService.logout(()=>{
     this.router.navigateByUrl('/');
   });
 }


}
