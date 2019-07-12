import { Component, OnInit } from '@angular/core';

import   {Pub} from '../shared/pub';
import {ProfileService} from '../profile/profile.service';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

pubs:Pub[];

  constructor(private ServiceProfile:ProfileService,private appService:AppService,private router:Router) { }

  ngOnInit() {
    this.loadPub();
  }

  loadPub(){

  this.ServiceProfile.getPub().subscribe(
    data => {this.pubs =data},
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
