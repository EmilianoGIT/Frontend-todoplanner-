import { Component, OnInit } from '@angular/core';
import { BasicRegistrationService } from '../service/basic-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = ''
  password = ''
  confirmPassword = ''
  errorMessage = 'Invalid Inputs'
  invalidSignUp = false

  constructor(private router : Router, private basicRegistrationService : BasicRegistrationService) { }

  ngOnInit(): void {
  }


  onSubmit(form) {
    console.log(form.value)
    this.handleRegistration();
  }

  handleRegistration() {
    this.basicRegistrationService.executeRegistrationService(this.username, this.password)
    .subscribe(
      data => {      
        //this.router.navigate(['login', this.username])
        this.router.navigate(['login'])
        this.invalidSignUp = false   
      },
      error => {
        this.errorMessage = error.error.message;
        this.invalidSignUp = true        
      }

    )
    }

}











