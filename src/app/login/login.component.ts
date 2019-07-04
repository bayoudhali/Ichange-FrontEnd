import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input()

  showNavBar: boolean;
  @Input()
  showProfileBar:boolean;
  @Input()
    hideContent:boolean;

  @Output()
  showNavBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
  showProfileBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  hideContentPage:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  affchierProfileBar(){
    this.showNavBar=!this.showNavBar;
    this.showProfileBar=!this.showProfileBar;
    this.hideContent=!this.hideContent;
    this.showNavBarChange.emit(this.showNavBar);
    this.showProfileBarChange.emit(this.showProfileBar);
    this.hideContentPage.emit(this.hideContent);


  }
}
