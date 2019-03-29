import {Component } from '@angular/core';


@Component({
  selector: 'calculadora.component',
  templateUrl: 'calculadora.component.html',
  styleUrls: ['calculadora.component.css'],

})

export class CalculadoraComponent{

   n1: number;
   n2: number;
   total : number;

   somar(){
     this.total = (Number (this.n1) + (this.n2))
     return this.total
   }

   subtrair(){
     this.total = (Number (this.n1) + (this.n2))
     return this.total
     alert(this.total)
   }

   dividir(){
     this.total = (Number (this.n1) + (this.n2))
     return this.total
   }

   multiplicar(){
     this.total = (Number (this.n1) + (this.n2))
     return this.total
   }


}
