import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ItemModule } from '../item/item.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    ItemModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
