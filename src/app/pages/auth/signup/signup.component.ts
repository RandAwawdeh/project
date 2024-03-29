import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { UploadService } from 'src/app/core/services/upload.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup;
  imgSrc: any;

  constructor(
    private router: Router,
    private _authService: AuthService,
    private formBuilder: FormBuilder,
    private _uploadService: UploadService
  ) {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      logo: null,
      website: null,
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$'
          ),
        ],
      ],
      type: [null, Validators.required],
    });
  }
  ngOnInit(): void {}

  onSignupClicked() {
    if (this.formGroup.invalid) {
      this.validateFormGroup();
    } else {
      if(this.formGroup.controls['logo'].value){
        this.upload();
      }else{
        this.createUser();
      }
    }
    this.router.navigate(['/events']);
  }

  upload() {
    this._uploadService
      .upload(this.formGroup.controls['logo'].value)
      .subscribe((file) => {
        if (file?.metadata) {
          this.getDownloadURL();
        }
      });
  }

  getDownloadURL() {
    this._uploadService.getDownloadURL().subscribe((url) => {
      console.log();
      this.formGroup.controls['logo'].setValue(url);
       this.createUser()
    });
  }

  createUser() {
    this._authService
    .signup(this.email.value, this.password.value)
    .pipe(
      switchMap((user: any) => {
        const obj: IUser = {
          UID: user.user.uid,
          email: this.email.value,
          name: this.name.value,
          phone: this.phone.value,
          type: this.type.value,
          website: this.website.value,
          logo: this.logo.value,
          isUser:false
        };
        return this._authService.createUser(obj);
      })
    )
    .subscribe((result) => {
      this.router.navigate(['/events']);
    });
  }

  validateFormGroup() {
    Object.keys(this.formGroup.controls).forEach((filed) => {
      const control = this.formGroup.get(filed);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return 'not a valid password';
  }
  onFileInputChange($event:any){
    console.log($event)
    this.formGroup.controls['logo'].setValue($event.target.file[0]);

    const reader = new FileReader();
    reader.onload =(e)=>(this.imgSrc=reader.result);
    reader.readAsDataURL(this.formGroup.controls['logo'].value)
  }

  get name() {
    return this.formGroup.controls['name'] as FormControl;
  }
  get email() {
    return this.formGroup.controls['email'] as FormControl;
  }
  get phone() {
    return this.formGroup.controls['phone'] as FormControl;
  }
  get logo() {
    return this.formGroup.controls['logo'] as FormControl;
  }
  get website() {
    return this.formGroup.controls['website'] as FormControl;
  }
  get type() {
    return this.formGroup.controls['type'] as FormControl;
  }
  get password() {
    return this.formGroup.controls['password'] as FormControl;
  }
}
