import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { CookieService } from 'ngx-cookie-service';  

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  executeJWTAuthenticationService(username, password) {



    /*
    * To do something if the service succed I use 'pipe' (adding more declaration).
    So, if there is a proper response coming back, then map it, set the cookies, and then return the data back
    */
    return this.http.post<any>(`${API_URL}/authenticate`, {
      username,
      password
    }).pipe(
      map(
        data => {
          this.cookieService.set(AUTHENTICATED_USER, username);
          this.cookieService.set(TOKEN, 'Bearer ' + data.token);
                  
          return data;
        }
      )
    );    
  }

  getAuthenticatedUser() {
    return this.cookieService.get(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
    return this.cookieService.get(TOKEN);
  }

  isUserLoggedIn() {
    let cookieExists = this.cookieService.check(AUTHENTICATED_USER);
    return cookieExists;
  }

  logout() {
    this.cookieService.delete(AUTHENTICATED_USER);
    this.cookieService.delete(TOKEN);
  }
}


export class AuthenticationBean{
  constructor(public message : String){

  }
}