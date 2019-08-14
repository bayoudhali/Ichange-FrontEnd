import { Component, OnInit } from '@angular/core';

import {ProfileService} from '../../profile/profile.service';
import {MainService} from '../main/main.service';
import {Pub} from '../../shared/pub';
@Component({
  selector: 'app-pubn',
  templateUrl: './pubn.component.html',
  styleUrls: ['./pubn.component.css']
})
export class PubnComponent implements OnInit {
pubs:[];

  constructor(private ServiceProfile:ProfileService,private ServiceMain:MainService) { }

  ngOnInit() {
    this.getAllPubs();

  }

  getAllPubs(){
    this.ServiceProfile.getPubs().subscribe(
      data => {console.log(this.pubs =data);
            },
      error => {console.log('error to display data')},
      () => {console.log('succes to load data');
        });
  }
  approvedPub(idPub:number){
    const pub = new Pub();
    this.ServiceMain.updateStatusPub(idPub,pub).subscribe(
      res => {
      console.log('pub Approved with succes')
      this.getAllPubs();
      }
    );
  }
  deletePub(pubid:number){
    this.ServiceProfile.removePub(pubid).subscribe(
      res => {
      console.log('pub deleted with succes')
        this.getAllPubs();
      }
    );
  }
}
