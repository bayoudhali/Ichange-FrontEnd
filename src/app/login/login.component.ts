import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AppService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  credentials ={
    email :'',
    password:''
  }

  @Input()
  showNavBar: boolean;

  @Input()
    hideContent:boolean;


  @Output()
  showNavBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  @Output()
  hideContentPage:EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private fb:FormBuilder,private appService:AppService,private router:Router) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
email :['',Validators.required],
password :['',Validators.required]
  });


  }



  login(){
this.appService.authenticate(this.credentials,()=>{
  console.log('valid !');
    this.router.navigateByUrl('/profile');
  this.showNavBar=!this.showNavBar;

  this.hideContent=!this.hideContent;
  this.showNavBarChange.emit(this.showNavBar);

  this.hideContentPage.emit(this.hideContent);
  jQuery("#modalSmall").modal("hide");

})

  }
}
