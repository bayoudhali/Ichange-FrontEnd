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
onePub:Pub[];
comments:Comments[];
oneComment:Comments[]
user:User;
PubForm: FormGroup;
CommentForm:FormGroup;
showDataPub:boolean;
showDataComment:boolean;
base64textString = [];
file:any;
updateInput:boolean;
hideBlocComment:boolean=true;
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
updateCommentForm:FormGroup;
selecetedUser:User;
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

this.updateFormPub();
this.createFormComment();
this.updateFormComment();
this.PubForm=this.fb.group({
  description :['', Validators.required],
  position :['', Validators.required]
});

  this.updateUserForm=this.fb.group({
    firstname : '',
    lastname : '',
    email:['', Validators.required],
    password:'',
    description:'',
    position:''
});



    }

  ngOnInit() {

    this.loadPub();
    this.loadComments();
    this.loadUser();

        }
      updateFormPub(){
      this.updatePubForm=this.fb.group({
        description:'',
        position:''
            });
    }
    createFormComment(){
      this.CommentForm=this.fb.group({
        description :['', Validators.required]
    });
    }
    updateFormComment(){
        this.updateCommentForm=this.fb.group({
        description:''
      });
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

  loadPub(){

  this.ServiceProfile.getPubs().subscribe(
    data => {console.log(this.pubs =data);
          },
    error => {console.log('error to display data')},
    () => {console.log('succes to load data');
      }
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

    this.loadPub();

    }
  )

  }
  loadOnePub(pubid:number){
    this.showDataPub=true
    this.ServiceProfile.getOnePub(pubid).subscribe(
      data => {console.log(this.onePub =data);
            },
      error => {console.log('error to display data')},
      () => {console.log('succes to load data');
        }
                  );
  }
  editPost(pubid:number){
    const updatePub=this.updatePubForm.value;
  const  dataUpdated  =new Pub(updatePub.description,updatePub.position,this.base64textString[0],this.user.id);
  this.ServiceProfile.updatePub(pubid,dataUpdated).subscribe(
    res => {
    console.log('Pub update with success !')
    this.updateFormPub();
    this.loadPub();

    }
  )
  }

  deletePub(pubid:number){
    this.ServiceProfile.removePub(pubid).subscribe(
      res => {
      console.log('pub deleted with succes')
      this.loadPub();
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
  AddComment(pubid:number){

    const comment =this.CommentForm.value;
    const commentData= new Comments(comment.description,pubid,this.user.id);
      this.ServiceProfile.addComment(commentData).subscribe(
        res => {
        console.log('Comment Add with succes')
        this.createFormComment();
        this.loadComments();

        }
      );
  }
  loadOneComment(id:number){
    this.showDataComment=true
    this.ServiceProfile.getOneComment(id).subscribe(
      data => {console.log(this.oneComment =data);
            },
      error => {console.log('error to display data')},
      () => {console.log('succes to load data');
        }
                  );
  }
editComment(id:number,pubid:number){

const updateComment = this.updateCommentForm.value;
const dataUpdated= new Comments(updateComment.description,pubid,this.user.id)
this.ServiceProfile.updateComment(id,dataUpdated).subscribe(
  res => {
  console.log('Comment updated with succes')
  this.updateFormComment();

  this.loadComments();

  }
);
}

deleteComment(idComment:number){
  this.operation='comment';
  this.ServiceProfile.removeComment(idComment).subscribe(
    res => {
    console.log('Comment deleted with succes')
    this.loadComments();
    }
  );

}
test(id:number):number{
  return id;
}
logout(){
   this.appService.logout(()=>{
     this.router.navigateByUrl('/');
   });
 }

}
