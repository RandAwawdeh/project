import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { UpdateDialogComponent } from './updat-dialog/update-dialog.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const MatImports = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatGridListModule,
  MatTabsModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  FormsModule,
  MatSelectModule,
  MatRadioModule,
  MatMenuModule,
]

@NgModule({
  declarations: [UpdateDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    ...MatImports
  ]
})
export class UpdateDialogModule { }
