import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, from, map, Observable } from 'rxjs';
import { UserCredential } from '@firebase/auth-types';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('userId'));
  dpUserPath = '/users';
  userInfo = new BehaviorSubject<any>({});

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private angularFireDatabase: AngularFireDatabase
  ) {

    this.authStateSubscripe();
  }

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  login(email: string, password: string): Observable<any> {
    return from(
      this.angularFireAuth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
          window.alert(error.message);
        })
    );
  }

  signup(email: string, password: string): Observable<UserCredential> {
    return from(
      this.angularFireAuth.createUserWithEmailAndPassword(email, password)
    );
  }
  authStateSubscripe() {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        if (!this.isLoggedIn) {
          this.router.navigate(['/events']);
        }
        this.getUserById(user.uid);

        localStorage.setItem('userId', user.uid);
        this.isLoggedIn$.next(true);
      } else {
        localStorage.removeItem('userId');
        this.isLoggedIn$.next(false);
      }
    });
  }

  getUserById(userId: string) {
    this.angularFireDatabase
      .object(`${this.dpUserPath}/${userId}`)
      .valueChanges()
      .subscribe((user) => {
        this.userInfo.next(user);
      });
  }

  getById(key: string) {
    return this.angularFireDatabase
      .object(`${this.dpUserPath}/${key}`)
      .valueChanges();
  }

  createUser(user: IUser): Observable<any> {
    const userObjFDB = this.angularFireDatabase.list(this.dpUserPath);

    return from(userObjFDB.update(user.UID?user.UID:'',user));
  }

  logout() {
    this.angularFireAuth.signOut().then(()=>{

      localStorage.removeItem('userId');

      this.isLoggedIn$.next(false);
      this.router.navigate(['/home']);
})

  }


  getAllNgoUsers(): Observable<any> {
    return this.angularFireDatabase.list<IUser>(this.dpUserPath,ref => ref.orderByChild('isUser').equalTo(false))
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((obj) => ({ key: obj.payload.key, ...obj.payload.val() }))
        )
      );
  }
  getAllTechnialsUsers(): Observable<any> {
    return this.angularFireDatabase.list<IUser>(this.dpUserPath,ref => ref.orderByChild('isUser').equalTo(true))
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((obj) => ({ key: obj.payload.key, ...obj.payload.val() }))
        )
      );
  }
}
