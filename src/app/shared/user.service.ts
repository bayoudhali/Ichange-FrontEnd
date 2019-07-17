import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {API_URLS} from '../config/api.url.config';
import {User} from './user';

@Injectable()
export class UserService {

constructor(private http:HttpClient){

}

getUser():Observable<any>{
  return this.http.get(API_URLS.USER_CRUD_URL);
}

getUserByEmail(email:string):Observable<any>{
  return this.http.get(API_URLS.USER_CRUD_URL +'/' + email);
}

addUser(user: User):Observable<any>{
  return this.http.post(API_URLS.USER_CRUD_URL,user);
}
updateUser(user: User):Observable<any>{
   return this.http.put(API_URLS.USER_CRUD_URL,user);
}
deleteUser(id:number):Observable<any>{

return this.http.delete(API_URLS.USER_CRUD_URL + '/${id}');
}
}
