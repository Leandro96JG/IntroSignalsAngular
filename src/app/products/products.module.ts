import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [

    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  // Para usar FormGroup
    ReactiveFormsModule,
  //para usar la directiva
    SharedModule,
  ]
})
export class ProductsModule { }
