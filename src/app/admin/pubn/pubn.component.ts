import { Component, OnInit } from '@angular/core';

import {ProfileService} from '../../profile/profile.service';
@Component({
  selector: 'app-pubn',
  templateUrl: './pubn.component.html',
  styleUrls: ['./pubn.component.css']
})
export class PubnComponent implements OnInit {
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
