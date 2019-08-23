import { Component, OnInit } from '@angular/core';
import {MainService} from '../main/main.service';
import {PubnComponent} from '../pubn/pubn.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

name :string ="dashboard";
CountUser:number;

CountPubs:number;
CountComments:number;
enable=true;

  constructor(private ServiceMain:MainService) { }

  ngOnInit() {
    this.countUser();
    this.countPubs();
    this.countComments();
  }

  countUser(){
    this.ServiceMain.countUsers().subscribe(
      data => {console.log(this.CountUser =data);
            },
      error => {console.log('error to display data')},
      () => {console.log('succes to load data');
        });
  }
  countPubs(){
    this.ServiceMain.countPubs().subscribe(
      data => {console.log(this.CountPubs =data);
            },
      error => {console.log('error to display data')},
      () => {console.log('succes to load data');
        }
                  );
  }
  countComments(){
    this.ServiceMain.countComments().subscribe(
      data => {console.log(this.CountComments =data);
            },
      error => {console.log('error to display data')},
      () => {console.log('succes to load data');
        }
                  );

}
}
