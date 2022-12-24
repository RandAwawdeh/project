import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanLoad {
  constructor(private _authService:AuthService, private router: Router){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {
      const isLoggedIn = this._authService.isLoggedIn;
      if(isLoggedIn){
        this.router.navigateByUrl('/')
        return false
      }
      return true;
  }
}
