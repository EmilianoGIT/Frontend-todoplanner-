import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

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
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);          
          return data;
        }
      )
    );    
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}


export class AuthenticationBean{
  constructor(public message : String){

  }
}