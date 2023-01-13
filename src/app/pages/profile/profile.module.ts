import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';

const MatImports = [
  MatCardModule,
  MatDialogModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatGridListModule,
  MatTabsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, AuthModule,RouterModule, ...MatImports],
  exports: [ProfileComponent],
})
export class ProfileModule {}
