import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import {map} from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

export const TOKEN = 'token';
@Injectable({
  providedIn: 'root'
})

export class ChangePasswordService {

  constructor(
    private http : HttpClient,
    private cookieService: CookieService) { }







  executeChangePasswordService(username, currentPassword, newPassword) {

    return this.http.post<any>(`${API_URL}/users/${username}/change_password`, {
      currentPassword,
      newPassword
    }).pipe(
      map(
        data => {
          this.cookieService.set(TOKEN, 'Bearer ' + data.token);
          return data;
        }
      )
    );
  }

}
