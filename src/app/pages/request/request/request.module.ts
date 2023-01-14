import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    RequestComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,MatFormFieldModule,  MatInputModule,

  ]
})
export class RequestModule { }
