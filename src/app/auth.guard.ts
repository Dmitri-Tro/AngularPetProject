import {Inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth/services/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    @Inject(AuthService) private auth: AuthService,
    @Inject(Router) private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/login']);
      return false
    }
      return true
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(next, state)
  }
}
