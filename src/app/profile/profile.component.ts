import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

import   {Pub} from '../shared/pub';
import   {Comments} from '../shared/comments';
import   {User} from '../shared/user';
import {ProfileService} from '../profile/profile.service';
import {UserService} from '../shared/user.service';
import {AppService} from '../app.service';
import { PrincipalState } from '../shared/principal.state';
import { Principal } from '../shared/principal.model';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

private principal: Principal;
pubs:Pub[];
comments:Comments[]
user:User;
idPub:number;
idComment:number;
PubForm: FormGroup;
CommentForm:FormGroup;
selectedComment:boolean=false;
hideComment:boolean=true;
base64textString = [];
file:any;
operation:string="pub";
pubAttribute ={
  description : '',
  position : '',
}
commentAttribute={
  description : ''
}
updateUserForm: FormGroup;
updatePubForm:FormGroup;
selecetedUser:User;
pubUp={
  description:'',
  position:''
}
credentials ={
  firstname : '',
  lastname : '',
  email :'',
  password:'',
  description:'',
  position:''
}

  constructor(private ServiceProfile:ProfileService,
    private appService:AppService,private router:Router,private store: Store<PrincipalState>,private ServiceUser:UserService,private fb: FormBuilder) {
      this.PubForm=this.fb.group({
        description :['', Validators.required],
        position :['', Validators.required]
  });
  this.CommentForm=this.fb.group({
    description :['', Validators.required]
});
  this.updateUserForm=this.fb.group({
    firstname : '',
    lastname : '',
    email:['', Validators.required],
    password:'',
    description:'',
    position:''
});

this.updatePubForm=this.fb.group({
  description:'',
  position:''
});
    }

  ngOnInit() {

    this.loadPub();
    this.loadComments();
    this.loadUser();
    //this.initProduit();
    this.AddComment(this.idPub);
    this.editComment(this.idComment);
    this.deletePub(this.idPub);
    this.deleteComment(this.idComment);
        }

  loadPub(){

  this.ServiceProfile.getPubs().subscribe(
    data => {console.log(this.pubs =data);
          },
    error => {console.log('error to display data')},
    () => {console.log('succes to load data');
      }
                );

}

loadUser(){
  let email:string;
    this.store.select('principal').subscribe(principal => {
      this.principal = principal;
        email=principal.name;

  })
 console.log(this.principal);
 this.ServiceUser.getUserByEmail(email).subscribe(
   data => {this.user=data},
   error => {console.log('error to display data')},
   () => {console.log('succes to load data')}
  );
  }

  UploadChange(evt: any) {
   this.file= evt.target.files[0];

  if (this.file) {
    const reader = new FileReader();

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.file);
console.log(this.base64textString);
  }
}

handleReaderLoaded(e) {
  this.base64textString.push(btoa(e.target.result));
}


    UploadPub(){
const publ =this.PubForm.value;
const pubData= new Pub(publ.description,publ.position,this.base64textString[0],this.user.id);
  this.ServiceProfile.addPub(pubData).subscribe(
    res => {
    console.log('succes')

    }
  )

  }
  deletePub(pubid:number){
    this.ServiceProfile.removePub(pubid).subscribe(
      res => {
      console.log('pub deleted with succes')
      }
    );
    this.operation='pub';

  }

  userUpdate(){

    const user =this.updateUserForm.value;
    const userData= new User(user.email,user.firstname,user.lastname,user.password,user.description,user.position,this.base64textString[0]);
      this.ServiceUser.updateUser(userData).subscribe(
        res => {
        console.log('succes')

        }
      )
  }

loadComments(){

      this.ServiceProfile.getComments().subscribe(
        data => {console.log(this.comments =data);},
        error => {console.log('error to display comments')},
        () => {console.log('succes to load comments');
      }
                    );
}

  initProduit() {
  //  this.selecetedUser = new User();

  }
  AddComment(pubid:number){

    const comment =this.CommentForm.value;
    const commentData= new Comments(comment.description,pubid,this.user.id);
      this.ServiceProfile.addComment(commentData).subscribe(
        res => {
        console.log('Comment Add with succes')

        }
      );
  }
editComment(id:number){
  //this.selectedComment=true;
  //this.hideComment=false;
  console.log(id);
}

deleteComment(idComment:number){
  this.operation='comment';
  this.ServiceProfile.removeComment(idComment).subscribe(
    res => {
    console.log('Comment deleted with succes')
    }
  );

}
logout(){
   this.appService.logout(()=>{
     this.router.navigateByUrl('/');
   });
 }

}
