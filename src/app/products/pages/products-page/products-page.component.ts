import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

//! Otra forma de hacer formularios

private fb = inject(FormBuilder);

public color:string = 'green';

public myForm:FormGroup = this.fb.group({
  name:['', [Validators.required, Validators.minLength(6), Validators.email]]
})

changeColor(){
   this.color = `#${crypto.getRandomValues(new Uint32Array(1))[0].toString(16).padStart(8, '0').slice(-6)}`;
}

  // constructor(private fb:FormBuilder){}

}
