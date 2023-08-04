import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { EMPTY } from 'rxjs'
import { catchError } from 'rxjs/operators'
import {CommonResponseType, LoginRequestData} from "../../models/auth.models";
import {ResultCodeEnum} from "../../../enums/resultCode.enum";
import {NotificationService} from "../notification/notification.service";
import {AuthErrorComponent} from "../../../shared/auth-error/auth-error.component";
import {UserInfoComponent} from "../../components/user-info/user-info.component";
import {MatDialog} from "@angular/material/dialog";
import {userLoginData} from "../../../Data/userLoginData";
import {User} from "../../../Data/user.interface";


@Injectable()
export class AuthService {
  baseUrl = 'https://example.com/';
  isLoggedIn: boolean = false
  currentUser: User | null = null;


  resolveAuthRequest: Function = () => {}

  authRequest = new Promise(resolve => {
    this.resolveAuthRequest = resolve
  })

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog,
  ) {}
  public getRouter(): Router {
    return this.router;
  }
  login(data: LoginRequestData) {
    const user = userLoginData.find(user => user.userEmail === data.email && user.userPassword === data.password);

    if (user) {
      // Если данные верны, появляется окно с данными пользователя.
      this.currentUser = user;
      this.openDialog(UserInfoComponent);
      // и выполнится переход на главную страницу
      setTimeout(() => {
        this.router.navigateByUrl('/posts');
      }, 1000);
      console.log('Yes');
      console.log('login works!');
      // Защита авторизации:
      this.isLoggedIn = true;
    } else {
      // В противном случае - ошибка.
      this.currentUser = null;
      this.openDialog(AuthErrorComponent);
      // Защита авторизации:
      this.isLoggedIn = false;
      console.log('No')
    }
    // А это уже запрос на сервер
    this.http
      .post<CommonResponseType<{ userId: number }>>(`${(this.baseUrl)}`, data)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(res => {
        if (res.resultCode === ResultCodeEnum.success) {
          this.router.navigate(['/posts']);
          this.isLoggedIn = true;
        } else {
          this.notificationService.handleError(res.messages[0])
        }
      });
  }
  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    this.http
      .delete<CommonResponseType>(`${this.baseUrl}`)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(res => {
        if (res.resultCode === ResultCodeEnum.success) {
          this.router.navigate(['/'])
        }
      });
  }

  private errorHandler(err: HttpErrorResponse) {
    this.notificationService.handleError(err.message)
    return EMPTY
  }

  openDialog(component: any): void {
    this.dialog.open(component);
  }
}
