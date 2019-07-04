import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

Visbilite: boolean = true;
VisbiliteProfile :boolean =false;
Content:boolean =true;

onShowNavBarChange(Visbilite){
  this.Visbilite=Visbilite;


}
onShowProfileBarChange(VisbiliteProfile){
this.VisbiliteProfile=VisbiliteProfile;
}

onHidesContentPage(Content){
  this.Content=Content;
}
  constructor() { }

  ngOnInit() {
  }

}
