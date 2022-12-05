import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { CreateProductComponent } from './products/pages/create-product/create-product.component';
import { PreviewProductComponent } from './products/pages/preview-product/preview-product.component';
import { SplitTextModule } from '../../core/pipes/split-text/split-text.module';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    PreviewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SplitTextModule
  ]
})
export class ProductsModule { }
