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

@Component({
  selector: 'app-t-signup',
  templateUrl: './t-signup.component.html',
  styleUrls: ['./t-signup.component.css'],
})
export class TSignupComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private router: Router,
    private _authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      age: [null, Validators.required],
      city: [null, Validators.required],
      skills: [null, Validators.required],
      jobDesc: [null, Validators.required],
      availableTime: null,
      courses: null,
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$'
          ),
        ],
      ],
    });
  }

  ngOnInit() {}

  onSignupClicked() {
    if (this.formGroup.invalid) {
      this.validateFormGroup();
    } else {
      this._authService
        .signup(this.email.value, this.password.value)
        .pipe(
          switchMap((user: any) => {
            const obj: IUser = {
              UID: user.user.uid,
              email: this.email.value,
              name: this.name.value,
              phone: this.phone.value,
              age: this.age.value,
              city: this.city.value,
              skills: this.skills.value,
              availableTime: this.availableTime.value,
              courses: this.courses.value,
              jobDesc: this.jobDesc.value,
              isUser: true,
            };
            return this._authService.createUser(obj);
          })
        )
        .subscribe((result) => {
        });
    }
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

  get name() {
    return this.formGroup.controls['name'] as FormControl;
  }
  get email() {
    return this.formGroup.controls['email'] as FormControl;
  }
  get phone() {
    return this.formGroup.controls['phone'] as FormControl;
  }
  get age() {
    return this.formGroup.controls['age'] as FormControl;
  }
  get city() {
    return this.formGroup.controls['city'] as FormControl;
  }
  get skills() {
    return this.formGroup.controls['skills'] as FormControl;
  }
  get password() {
    return this.formGroup.controls['password'] as FormControl;
  }
  get jobDesc() {
    return this.formGroup.controls['jobDesc'] as FormControl;
  }
  get courses() {
    return this.formGroup.controls['courses'] as FormControl;
  }
  get availableTime() {
    return this.formGroup.controls['availableTime'] as FormControl;
  }
}
