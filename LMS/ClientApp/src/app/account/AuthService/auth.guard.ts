import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router , RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthserviceService, private route: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const account = this.auth.accountValue;
    if (account) {
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }
  
}
