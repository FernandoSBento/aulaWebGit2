import {Component } from '@angular/core';


@Component({
  selector: 'home.component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],

})

export class HomeComponent{

  nomes = new Array<string>();
  nome : string = '';

  adicionar() : void{
    this.nomes.push(this.nome);
    this.nome = "";
  }

  excluir(i:number) : void{
    this.nomes.splice(i,1);
  }

  alterar(i:number) : void{
    this.nome = this.nomes[i];
    this.nomes.splice(i,1);
  }
}
