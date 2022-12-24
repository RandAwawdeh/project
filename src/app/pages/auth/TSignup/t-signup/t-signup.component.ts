import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-t-signup',
  templateUrl: './t-signup.component.html',
  styleUrls: ['./t-signup.component.css']
})
export class TSignupComponent implements OnInit{
  formGroup: FormGroup;
  constructor(private router: Router, private _authService: AuthService, private formBuilder: FormBuilder){
    this.formGroup = this.formBuilder.group({
      name:[null, Validators.required],
      email:[null, [Validators.required, Validators.email]],
      phone:[null, Validators.required],
      password:[null, [Validators.required, Validators.pattern('(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$')]],
    })
  }

  ngOnInit(){

  }

  onSignupClicked(){
    this._authService.login();
    this.router.navigate(['/dashboard']);
  }
}
