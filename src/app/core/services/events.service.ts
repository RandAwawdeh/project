import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  dbPath = '/events';
  dbRef: AngularFireList<event>;
  requestPath='/request'
  approved='/approved'
dbreferance:AngularFireList<event>

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.dbRef = angularFireDatabase.list(this.dbPath);
    this.dbreferance=angularFireDatabase.list(this.requestPath)
  }

  create(data: event){
    return this.dbRef.push(data);
  }
  update(key:string,data: event){
    return this.dbRef.update(key,data)
  }
  delete(key:string | undefined){
    return this.dbRef.remove(key);
  }
  deleteAll(){
    return this.dbRef.remove()
  }

  getById(key:string){
    return this.angularFireDatabase
    .object(`${this.dbPath}/${key}`)
    .valueChanges();
  }
  getAll(): Observable<any>{
   return  this.dbRef.snapshotChanges().pipe(
      map((data)=>
        data.map((obj)=>({key:obj.payload.key, ...obj.payload.val()}))
      )
    )
  }
  requestCreate(data: event){
    return this.angularFireDatabase.list(this.requestPath).push(data);
  }
  getAllEvents():Observable<any>{
    return this.dbreferance.snapshotChanges().pipe(
      map((changes)=>changes.map((obj)=>({
        key:obj.payload.key, ...obj.payload.val()
      })))
    )
  }

  approvedRequest(data:event){
    return this.angularFireDatabase.list(this.approved).push(data)
  }
  deleteRequest(key:string | undefined){
    return this.angularFireDatabase.list(this.requestPath).remove(key)
  }
}
