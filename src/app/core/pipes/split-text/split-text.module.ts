import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitTextPipe } from './split-text.pipe';



@NgModule({
  declarations: [
    SplitTextPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SplitTextModule { }
