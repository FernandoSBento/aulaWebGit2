import  { Component} from '@angular/core';

@Component({
    selector: 'nomes.component',
    templateUrl: 'nomes.component.html',
    styleUrls: ['nomes.component.css']
})
export class AppComponent{
  nomes4 = new Array<string>();


  constructor(){
    this.nomes4.push('PEDRO');
    this.nomes4.push('JOANA');

    console.log('TESTE');
  }


}
