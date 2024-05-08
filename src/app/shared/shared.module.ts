import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/custom-label.interceptor';

@NgModule({
  declarations: [
    CustomLabelDirective,
  ],
  imports: [
    CommonModule
  ],
  //para usar la directivas en otros modulos hay que exportar
  exports:[
   CustomLabelDirective,
  ]
})
export class SharedModule {}
