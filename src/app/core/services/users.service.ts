import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { map, Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  dbPath = '/users';
  dbRef: AngularFireList<IUser>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.dbRef = angularFireDatabase.list(this.dbPath);
  }

  create(data: IUser) {
    return this.dbRef.push(data);
  }
  createRequest(data: IUser) {
    return this.angularFireDatabase.list('/requsetUser').push(data);
  }
  update(key: string, data: IUser) {
    return this.dbRef.update(key, data);
  }
  delete(key: string | undefined) {
    return this.dbRef.remove(key);
  }
  deleteAll() {
    return this.dbRef.remove();
  }

  getById(key: string) {
    return this.angularFireDatabase
      .object(`${this.dbPath}/${key}`)
      .valueChanges();
  }

  getAll(): Observable<any> {
    return this.dbRef
      .snapshotChanges()
      .pipe(
        map((data) =>
          data.map((obj) => ({ key: obj.payload.key, ...obj.payload.val() }))
        )
      );
  }

}
