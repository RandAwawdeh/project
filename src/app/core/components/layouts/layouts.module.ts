import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from './layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
const MatImports = [MatSidenavModule,MatToolbarModule,MatListModule, MatIconModule,MatButtonModule]


@NgModule({
  declarations: [
    NavComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...MatImports
  ],exports:[LayoutComponent]
})
export class LayoutsModule { }
