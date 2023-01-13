import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgoComponent } from './ngo/ngo.component';

const MatImports = [
  MatCardModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatGridListModule,
  MatTabsModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,RouterModule,
  MatIconModule,MatPaginatorModule,MatTableModule,MatMenuModule,MatInputModule,FormsModule,
  ReactiveFormsModule,
];


@NgModule({
  declarations: [NgoComponent],
  imports: [
    CommonModule,
    ...MatImports
  ]
})
export class NgoModule { }
