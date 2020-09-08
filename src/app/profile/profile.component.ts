import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../service/data/profile-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';


export class Profile {

  public firstname: string
  public lastname: string
  public bio: string
  public picture: string
  public user: User
  constructor() {
  }
}

export class User {

  public username: string
  public email: string
  constructor() {
  }
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile
  username = this.basicAuthenticationService.getAuthenticatedUser();
  selectedFile: File;
  message: string;

  constructor(
    private profileService: ProfileDataService,
    private route: ActivatedRoute,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }


  ngOnInit(): void {
    this.message = ''
    this.profile = new Profile();

    this.profileService.retrieveProfile(this.username)
      .subscribe(
        data => {
          this.profile = data
          this.profile.picture = atob(this.profile.picture)
        },
        error => {
          if (error.status === 404) {
            this.profileService.createProfile(this.username, this.profile)
              .subscribe(
                data => {
                  this.profile.firstname = ""
                  this.profile.lastname = ""
                  this.profile.bio = ""
                  this.profile.picture = ""
                  this.profile.user = new User
                  this.profile.user.username = this.username

                }
              );
          }
        }

      );
  }

  saveProfile() {
    this.profile.picture = btoa(this.profile.picture)
    //Update
    this.profileService.updateProfile(this.username, this.profile)
      .subscribe(
        data => {
          this.profile = data
          this.message = 'Changes have been saved!'
        }
      )
  }

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();

    //max size 1mb
    if (this.selectedFile.size > 1048576) {
      alert("Maximum size is 1mb");
    }
    else {
      reader.readAsDataURL(this.selectedFile);

      reader.onload = () => {
        this.profile.picture = reader.result.toString()
      };
    }



  }

  public deleteImage() {
    this.profile.picture = ""
  }

}
