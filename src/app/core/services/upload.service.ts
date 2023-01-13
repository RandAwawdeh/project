import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage'
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  dbpath='/files';
  storageRef: AngularFireStorageReference;
  fileUrl:string='';

  constructor(private storage:AngularFireStorage) {
    this.storageRef = storage.ref('')
  }
  upload(file:File){
    const filePath = `${this.dbpath}/${new Date()}${file.name}`

    this.storageRef = this.storage.ref(filePath)
    return this.storage.upload(filePath,file).snapshotChanges()

    // this.stoarge.upload(this.dbpath,file).snapshotChanges().pipe(
    //   finalize(()=>{
    //     this.storageRef.getDownloadURL().subscribe((url)=>{
    //       this.fileUrl = url;
    //     })
    //   })
    // )
  }
  getDownloadURL(){
    return this.storageRef.getDownloadURL()
  }
}
