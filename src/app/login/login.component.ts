import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';

import {AppService} from '../app.service';
import { PrincipalState } from '../shared/principal.state';
import { Principal } from '../shared/principal.model';

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
    private principal: Principal;

  @Input()
  showNavBar: boolean;

  @Input()
    hideContent:boolean;

  @Input()
    showAdmin:boolean;

  @Output()
  showNavBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  @Output()
  hideContentPage:EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  showAdminPage:EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private fb:FormBuilder,private appService:AppService,private router:Router,private store: Store<PrincipalState>) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
email :['',Validators.required],
password :['',Validators.required]
  });

  this.store.select('principal').subscribe(principal => {
    //console.log(principal);
        this.principal = principal;
      })

  }



  login(){
this.appService.authenticate(this.credentials,()=>{

  this.showNavBar=!this.showNavBar;
  this.hideContent=!this.hideContent;
  this.showNavBarChange.emit(this.showNavBar);
  this.hideContentPage.emit(this.hideContent);
        if (this.principal.authorities[0].authority === 'ROLE_USER') {
        this.router.navigateByUrl('/profile');
        jQuery("#alert").modal('show');
      }
      else if  (this.principal.authorities[0].authority  === 'ROLE_ADMIN' ) {
          this.showAdmin=!this.showAdmin;
          this.showAdminPage.emit(this.showAdmin);
      }



  jQuery("#modalSmall").modal("hide");

})

  }
}
