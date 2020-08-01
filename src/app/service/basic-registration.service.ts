import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicRegistrationService {

  constructor(private http: HttpClient) { }



  executeRegistrationService(username, password, recaptchaResponse) {



    let httpHeaders = new HttpHeaders({
      'Recaptcha-Response' : recaptchaResponse
         });    
         let options = {
      headers: httpHeaders
         }; 


    /*
    * to do something if the service succed is using 'pipe' (adding more declaration).
    So, if there is a proper response coming back, then map it, set the cookies, and then return the data back
    */
    return this.http.post<any>(`${API_URL}/register`, {
      username,
      password,
    },
    options
    ).pipe(
      map(
        data => {          
          return data;
        }
      )
    );    
  }
}
