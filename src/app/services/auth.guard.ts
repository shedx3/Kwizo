import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalsService } from '../classes/globals.service';
import { TokenService } from '../classes/token.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private token: TokenService,
    private router: Router,
    private globals: GlobalsService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.token.isLoggedIn()) {
      this.router.navigate(['account']);
    } else {
      this.router.navigate(['login']);
    }

    return true;
  }
}
