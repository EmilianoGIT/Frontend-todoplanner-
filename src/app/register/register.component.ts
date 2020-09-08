import { Component, OnInit } from '@angular/core';
import { BasicRegistrationService } from '../service/basic-registration.service';
import { Router } from '@angular/router';
import { RECAPTCHA_SITE_KEY } from 'src/app/app.constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  username = ''
  password = ''
  confirmPassword = ''
  errorMessage = 'Invalid Inputs'
  validationError = ''
  invalidSignUp = false

  siteKey = RECAPTCHA_SITE_KEY;
  cResp = '';

  constructor(private router : Router, private basicRegistrationService : BasicRegistrationService) { }

  ngOnInit(): void {
  }


  onSubmit(form) {
    this.handleRegistration();
  }

  passwordAreTheSame(){
    console.log(this.confirmPassword)
    if(this.password == this.confirmPassword){
      this.validationError = ''
      return true
    }
      else{
        this.validationError = 'Please, enter the same passwords.'
        return false
      }


  }

  handleRegistration() {
    this.basicRegistrationService.executeRegistrationService(this.username, this.password, this.cResp)
    .subscribe(
      data => {
        this.router.navigate(['login'])
        this.invalidSignUp = false
      },
      error => {
        this.errorMessage = error.error.message;
        this.invalidSignUp = true
      }

    )
    }

    public resolved(captchaResponse: string) {
      console.log(`Resolved captcha with response: ${captchaResponse}`);
      this.cResp = captchaResponse;
    }
}











