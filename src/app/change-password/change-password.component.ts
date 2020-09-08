import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ChangePasswordService } from '../service/change-password.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  currentPassword = ''
  newPassword = ''
  renteredPassword = ''
  errorMessage = ''
  message = ''
  validationError = ''

  constructor(private router : Router,
    private changePasswordService : ChangePasswordService,
    private basicAuthenticationService : BasicAuthenticationService) { }

  ngOnInit(): void {
    this.resetFields()
  }


  onSubmit(form) {
    this.handleChangePassword();
  }

   handleChangePassword() {
    this.changePasswordService.executeChangePasswordService(this.basicAuthenticationService.getAuthenticatedUser(), this.currentPassword, this.newPassword)
    .subscribe(
      data => {
        this.message = 'Password has been changed!'
        this.errorMessage = ''

      },
      error => {

        this.errorMessage = 'Current password is wrong..'
        this.message = ''
      }

    )
    }

    resetFields(){
      this.errorMessage = ''
      this.message = ''
      this.validationError = ''
      this.currentPassword = ''
      this.newPassword = ''
      this.renteredPassword = ''
    }

    passwordAreTheSame(){
      if(this.newPassword == this.renteredPassword){
        this.validationError = ''
        return true
      }
        else{
          this.validationError = 'Please, enter the same passwords.'
          return false
        }


    }
}
