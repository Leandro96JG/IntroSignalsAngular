import { Directive, OnInit } from '@angular/core';



//directivas tienen que ser declaradas en el modulo


@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit{

constructor(){
 console.log('Constructor de la directiva')
}
ngOnInit(): void {
    console.log('Directiva - NgOnInit')

  }

}
