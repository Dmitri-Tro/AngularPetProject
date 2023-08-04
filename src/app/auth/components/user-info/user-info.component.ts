import {Component, Inject} from '@angular/core';
import {userLoginData} from "../../../Data/userLoginData";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  protected readonly userLoginData = userLoginData;

  constructor(
    @Inject(AuthService) private auth: AuthService
  ) {}
  isLoggedIn = this.auth.isLoggedIn;
  get currentUser() {
    return this.auth.currentUser;
  }
}
