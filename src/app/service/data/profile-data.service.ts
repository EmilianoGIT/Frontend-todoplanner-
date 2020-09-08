import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/profile/profile.component';
import { USERPROFILE_JPA_API_URL } from 'src/app/app.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor(private http: HttpClient) { }

  retrieveProfile(username) {
    return this.http.get<Profile>(`${USERPROFILE_JPA_API_URL}/users/${username}/profile`)
      .pipe(
        map(
          data => {
            return data;
          }
        )
      );
  }

  updateProfile(username, profile) {
    return this.http.put<Profile>(
      `${USERPROFILE_JPA_API_URL}/users/${username}/profile`,
      profile).pipe(
        map(
          data => {
            return data;
          }
        )
      );
  }
  createProfile(username, profile) {
    return this.http.post<Profile>(
      `${USERPROFILE_JPA_API_URL}/users/${username}/profile`,
      profile)
      .pipe(
        map(
          data => {
            return data;
          }
        )
      );
  }

}
