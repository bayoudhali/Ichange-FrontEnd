import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

import {User} from '../shared/user';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-sigin-in',
  templateUrl: './sigin-in.component.html',
  styleUrls: ['./sigin-in.component.css']
})
export class SiginInComponent implements OnInit {

  inscriForm: FormGroup;

  credentials ={
    firstname : '',
    lastname : '',
    email :'',
    password:''
  }

  constructor(private ServiceUser:UserService, private fb: FormBuilder) {
    this.inscriForm=this.fb.group({
      firstname : '',
      lastname : '',
      email:['', Validators.required],
      password:''
});
  }

  ngOnInit() {
  }


  addUser(){
    const user =this.inscriForm.value;
  this.ServiceUser.addUser(user).subscribe(
    res => {
    console.log('succes')

    }
  )
  }
}
