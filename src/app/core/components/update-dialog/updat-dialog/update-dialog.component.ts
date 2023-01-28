import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UploadService } from '../../../services/upload.service';
import { Location } from '@angular/common';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit{
  key:string='';
  formGroup!: FormGroup;
  imgSrc: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private _authService: AuthService,
    private _usersService:UsersService,
    private _uploadService:UploadService,
    private location:Location,
    private formBuilder: FormBuilder,

  ){
    this.formGroup = this.formBuilder.group({
      name: '',
      email:'',
      phone: '',
      age: '',
      city:'',
      skills: '',
      jobDesc: '',
      availableTime: '',
      courses: '',
      type: '',
      website:'',
      logo:null,
    })
  }
  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((result)=>{
      if(result['key']){
        this.key=result['key'];
        this.getById()
      }
    })
  }
  getById(){
    this._usersService.getById(this.key).subscribe((result:any)=>{
    this.formGroup = this.formBuilder.group({
      name: result['name'],
      email: result['email'],
      phone: result['phone'],
      age: result['age'],
      city: result['city'],
      skills: result['skills'],
      jobDesc: result['name'],
      availableTime: result['availableTime'],
      courses: result['courses'],
      type: result['type'],
      website:result['website'],
      logo: result['logo'],
    })
    this.imgSrc=result['logo']
    })
  }
  onUpdateClicked(){
    if (this.formGroup.invalid) {
      this.validateFormGroup();
    } else{
      if(this.formGroup.controls['logo'].value){
        this.upload();
      }else{
        this. updateProfile();
      }
    }
  }
  upload(){
    this._uploadService
    .upload(this.formGroup.controls['logo'].value)
    .subscribe((file)=>{
      if(file?.metadata){
        this.getDownloadURL();
      }
    });
  }
  getDownloadURL(){
    this._uploadService.getDownloadURL().subscribe((url)=>{
      this.formGroup.controls['logo'].setValue(url);
      this.updateProfile()
    })
  }

  updateProfile(){
    this._usersService.update(this.key,{
      name: this.formGroup.controls['name'].value,
      email: this.formGroup.controls['email'].value,
      phone: this.formGroup.controls['phone'].value,
      age: this.formGroup.controls['age'].value,
      city:this.formGroup.controls['city'].value,
      skills: this.formGroup.controls['skills'].value,
      jobDesc: this.formGroup.controls['jobDesc'].value,
      availableTime: this.formGroup.controls['availableTime'].value,
      courses: this.formGroup.controls['courses'].value,
      type: this.formGroup.controls['type'].value,
      website: this.formGroup.controls['website'].value,
      logo: this.formGroup.controls['logo'].value,

    }).then(()=>{
      window.alert('update sucssesfull');
      this.location.back();
    });
  }
  onFileInputChange($event: any) {
    console.log($event);
    this.formGroup.controls['logo'].setValue($event.target.files[0]);

    const reader = new FileReader();
    reader.readAsDataURL(this.formGroup.controls['logo'].value);
  }

  validateFormGroup(){
    Object.keys(this.formGroup.controls).forEach((filed)=>{
      const control = this.formGroup.get(filed);
      control?.markAsTouched({onlySelf: true});
    })
  }
  getErrorMessage(control: any){
    if(control.hasError('required')){
      return 'you must enter a value';
    }
    return '';
  }

}
