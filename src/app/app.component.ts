import { Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
//import 'leaflet';
//declare let L;

import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'iChange-FrontEnd';

constructor(private appService:AppService,private router:Router) { }
ngOnInit() {
  if(!this.appService.authenticated){
    this.router.navigateByUrl('/');
    }else {
    this.router.navigateByUrl('/profile');
  }
}


}
