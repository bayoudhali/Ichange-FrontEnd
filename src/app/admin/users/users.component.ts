import { Component, OnInit } from '@angular/core';

import {MainService} from '../main/main.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:[];
  constructor(private ServiceMain:MainService) { }

  ngOnInit() {
      this.getAllUsers();
  }
  getAllUsers(){
    this.ServiceMain.getUsers().subscribe(
      data => {console.log(this.users =data);
            },
      error => {console.log('error to display data')},
      () => {console.log('succes to load data');
        });
  }
}
