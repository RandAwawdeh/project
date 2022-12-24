import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const MatImports = [MatToolbarModule,MatCardModule,MatButtonModule]


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,

    ...MatImports
  ]
})
export class HomeModule {

}
