import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [ProductComponent, CategoryComponent],
  imports: [
    CommonModule
  ]
})
export class CatalogModule { }
