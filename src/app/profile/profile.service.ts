import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {API_URLS} from '../config/api.url.config';
import {Pub} from '../shared/pub';
import{Comments} from '../shared/comments';
import{Likes} from '../shared/likes';

@Injectable()
export class ProfileService {

constructor(private http:HttpClient){

}

getPubs():Observable<any>{
  return this.http.get(API_URLS.GET_PUBS_URL);
}
getOnePub(id:number):Observable<any>{
  return this.http.get(API_URLS.GET_ONE_PUB + '/'+id);
}
getPubsByOrder():Observable<any>{
  return this.http.get(API_URLS.GET_PUB_BY_ORDER);
}
addPub(pub: Pub):Observable<any>{
  return this.http.post(API_URLS.PUBS_URL,pub);
}
updatePub(id:number,pub:Pub):Observable<any>{
   return this.http.put(API_URLS.PUBS_URL + '/'+id,pub);
}
removePub(id:number):Observable<any>{
return this.http.delete(API_URLS.PUBS_URL + '/'+id);
}
getComments():Observable<any>{
return this.http.get(API_URLS.GET_COMMENTS_URL);
}
getOneComment(id:number):Observable<any>{
  return this.http.get(API_URLS.GET_ONE_COMMENT + '/'+id);
}
addComment(comment: Comments):Observable<any>{
  return this.http.post(API_URLS.ADD_COMMENTS_URL,comment);
}
updateComment(id:number,comment: Comments):Observable<any>{
   return this.http.put(API_URLS.ADD_COMMENTS_URL + '/'+id,comment);
}
removeComment(id:number):Observable<any>{
return this.http.delete(API_URLS.ADD_COMMENTS_URL + '/'+id);
}
getLikes():Observable<any>{
return this.http.get(API_URLS.ALL_LIKES_URL);
}
addLike(like:Likes):Observable<any>{
  return this.http.post(API_URLS.LIKES_URL,like);
}
removeLike(id:number):Observable<any>{
return this.http.delete(API_URLS.LIKES_URL + '/'+id);
}

}
