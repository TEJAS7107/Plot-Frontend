import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationsService } from './authentications.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
constructor(private auth:AuthenticationsService,private routerr:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if (false) {
      //   return false;
      // }
      // if (this.auth.logoutt===true) {

      //   this.routerr.navigateByUrl("loginn").then(()=>window.location.reload)
      // }
    return true;
  }

}
