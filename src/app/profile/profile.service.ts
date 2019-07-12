import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {API_URLS} from '../config/api.url.config';
import {Pub} from '../shared/pub';

@Injectable()
export class ProfileService {

constructor(private http:HttpClient){

}

getPub():Observable<any>{
  return this.http.get(API_URLS.Pubs_Url);
}


}
