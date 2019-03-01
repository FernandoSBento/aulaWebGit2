import  { Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent{
  nome: string = "Fernando";
  valor: string = "";
  n1: string ="";
  n2: string ="";




  soma(){
  total: parseInt(this.n1) + parseInt(this.n2);

  }




  ApresentaNome(valor){
    alert('Boa noite ' + this.valor);
  }


}
