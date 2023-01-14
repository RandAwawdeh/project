import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ApproveComponent } from './approve.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [ApproveComponent],
  imports: [
    CommonModule,MatMenuModule,
    MatTableModule,
    MatIconModule,
    MatTableModule,MatInputModule,MatPaginatorModule,MatFormFieldModule,

  ]
})
export class ApproveModule { }
