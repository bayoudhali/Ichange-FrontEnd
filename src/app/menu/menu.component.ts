import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

Visbilite: boolean = true;

Content:boolean =true;
Profile:boolean=false;
adminPage:boolean=false;

onShowNavBarChange(Visbilite){
  this.Visbilite=Visbilite;


}


onHidesContentPage(Content){
  this.Content=Content;
}
onShowProfilePage(Profile){
  this.Profile=Profile;
}

onShowAdminPage(adminPage){
  this.adminPage=adminPage;
}
  constructor() { }

  ngOnInit() {
  }

}
