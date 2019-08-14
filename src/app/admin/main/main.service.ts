import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {API_URLS} from '../../config/api.url.config';
import {Pub} from '../../shared/pub';

@Injectable()
export class MainService {

constructor(private http:HttpClient){

}
countUsers():Observable<any>{
  return this.http.get(API_URLS.COUNT_USER_URL);
}
getUsers():Observable<any>{
  return this.http.get(API_URLS.ALL_USER_URL);
}
countPubs():Observable<any>{
  return this.http.get(API_URLS.COUNT_PUBS_URL);
}
updateStatusPub(id:number,pub:Pub):Observable<any>{
   return this.http.put(API_URLS.UPDATE_STATUS_PUBS_URL + '/'+id,pub);
}
countComments():Observable<any>{
return this.http.get(API_URLS.COUNT_COMMENTS_URL);
}


}
