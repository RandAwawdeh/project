import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TSignupComponent } from './TSignup/t-signup/t-signup.component';


const MatImports = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatGridListModule
]

@NgModule({
  declarations: [LoginComponent, SignupComponent, TSignupComponent],
  imports: [CommonModule, AuthRoutingModule,FormsModule,ReactiveFormsModule, ...MatImports]
})
export class AuthModule { }
