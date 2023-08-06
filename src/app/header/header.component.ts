import {Component, Inject} from '@angular/core';
import {userLoginData} from "../Data/userLoginData";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UserInfoComponent} from "../auth/components/user-info/user-info.component";
import {AuthService} from "../auth/services/auth/auth.service";
import {LogoutComponent} from "../main-page/components/logout/logout.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  protected readonly userLoginData = userLoginData;

  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService,
  ) {};

  goToPosts() {
    this.router.navigate(['/posts']);
  };

  goToCreateNewPost() {
    this.router.navigate(['/new-posts']);
  };

  goToSubscriptions() {
    this.router.navigate(['/subscriptions']);
  };

  isLoggedIn = this.auth.isLoggedIn;

  get currentUser() {
    return this.auth.currentUser;
  };

  openDialog(UserInfoComponent: any): void {
    this.dialog.open(UserInfoComponent);
  };

  logout() {
    this.openDialog(LogoutComponent);
    this.authService.logout();
    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000);
  };

  login() {
    this.authService.logout();
    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000);
  };

  protected readonly UserInfoComponent = UserInfoComponent;
}
