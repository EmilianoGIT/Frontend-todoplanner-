import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import {ViewChild} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs/tab-group';



@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.css']
})
export class AccountMenuComponent implements OnInit {

  @ViewChild(ProfileComponent) profileComponent : ProfileComponent;
  @ViewChild(ChangePasswordComponent) changePasswordComponent : ChangePasswordComponent;
  constructor() { }

  ngOnInit(): void {
  }


  onTabChanged(event: MatTabChangeEvent)
  {
    if(event.index == 0)
    {
        this.profileComponent.ngOnInit();
    }
    else
    {
        this.changePasswordComponent.ngOnInit();
    }
  }
}
