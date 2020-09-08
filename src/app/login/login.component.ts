import { Component, OnInit, Input } from '@angular/core';
import { ElementSchemaRegistry } from '@angular/compiler';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = ''
  password = ''
  errorMessage = ''
  invalidLogin = false

  constructor(private router : Router,
    private basicAuthenticationService : BasicAuthenticationService) { }

  ngOnInit(): void {
  }


  onSubmit(form) {
    this.handleJTWAuthLogin();
  }

   handleJTWAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },
      error => {
        this.errorMessage = error.error.message;
        this.invalidLogin = true
      }

    )
    }

}
