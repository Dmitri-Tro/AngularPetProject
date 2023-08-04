import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoggedIn: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,5}$'),
    ]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLoginSubmit(): void {
    // Здесь - запрос на сервер для аутентификации
    const value = this.loginForm.value;
    this.authService.login(value);
    console.log('onLoginSubmit works!')
  }
}
