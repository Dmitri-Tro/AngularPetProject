import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {AuthRoutingModule} from "./auth-routing.module";
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AuthErrorComponent } from '../shared/auth-error/auth-error.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth/auth.service";
import {NotificationService} from "./services/notification/notification.service";
import {AuthGuard} from "./services/auth/auth.guard";



@NgModule({
  declarations: [
    LoginComponent,
    UserInfoComponent,
    AuthErrorComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgOptimizedImage,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    AuthService,
    NotificationService,
    AuthGuard
  ]
})
export class AuthModule { }
