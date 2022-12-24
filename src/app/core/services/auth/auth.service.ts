import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  constructor(private router: Router, private angularFireAuth: AngularFireAuth){}

  get isLoggedIn(): boolean{
    return this.isLoggedIn$.getValue();
  }

  login(){
    localStorage.setItem('token','')
    this.isLoggedIn$.next(true)
  }

  signup(email:string,password:string): Observable<any>{
    return from(this.angularFireAuth.createUserWithEmailAndPassword(email,password))
  }

  logout(){
    localStorage.removeItem('token');

    this.isLoggedIn$.next(false);
    this.router.navigate(['/auth/login']);
  }
}
