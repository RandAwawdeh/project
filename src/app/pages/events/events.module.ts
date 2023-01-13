import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { EventComponent } from './events/event.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { AddEventComponent } from '../add-event/add-event.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

const MatImports = [MatIconModule,MatPaginatorModule,MatTableModule,MatButtonModule,MatMenuModule,MatInputModule,FormsModule,ReactiveFormsModule]


@NgModule({
  declarations: [
    EventComponent,
    AddEventComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    RouterModule.forChild([{
      path:'',
      component:EventComponent
    },
    {
      path: 'add-event',
      component: AddEventComponent,
    }]),
    ...MatImports
  ]
})
export class EventsModule{ }
