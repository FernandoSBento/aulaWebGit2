import { Estado } from '../entidades/estado';


export class ServicoEstado{

  listaEstado = new Array<Estado>();
  estado: Estado;




  adicionar(estado: Estado) : void {
    this.listaEstado.push(estado);

  }

  excluir(i:number) : void {
    this.listaEstado.splice(i,1);
  }

  alterar(i:number) : void{
    this.estado = this.listaEstado[i];
    this.listaEstado.splice(i,1);
  }

}
