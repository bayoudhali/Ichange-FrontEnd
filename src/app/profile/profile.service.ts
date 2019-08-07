import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {API_URLS} from '../config/api.url.config';
import {Pub} from '../shared/pub';
import{Comments} from '../shared/comments';

@Injectable()
export class ProfileService {

constructor(private http:HttpClient){

}

getPubs():Observable<any>{
  return this.http.get(API_URLS.GET_PUBS_URL);
}
addPub(pub: Pub):Observable<any>{
  return this.http.post(API_URLS.PUBS_URL,pub);
}
removePub(id:number):Observable<any>{
return this.http.delete(API_URLS.PUBS_URL + '/'+id);
}
getComments():Observable<any>{
return this.http.get(API_URLS.GET_COMMENTS_URL);
}
addComment(comment: Comments):Observable<any>{
  return this.http.post(API_URLS.ADD_COMMENTS_URL,comment);
}
removeComment(id:number):Observable<any>{
return this.http.delete(API_URLS.ADD_COMMENTS_URL + '/'+id);
}

}
