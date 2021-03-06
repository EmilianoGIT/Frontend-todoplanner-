import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { RegisterComponent } from './register/register.component';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { ProfileComponent } from './profile/profile.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    RegisterComponent,
    ProfileComponent,
    AccountMenuComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    BrowserAnimationsModule,  //this is the recaptcha main module
    //RecaptchaFormsModule //this is the module for form incase form validation
    MatTabsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : HttpIntercepterBasicAuthService, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
