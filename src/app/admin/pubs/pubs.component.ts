import { Component, OnInit } from '@angular/core';

import {ProfileService} from '../../profile/profile.service';
@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.component.html',
  styleUrls: ['./pubs.component.css']
})
export class PubsComponent implements OnInit {

pubs:[]
  constructor(private ServiceProfile:ProfileService) { }

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
}
