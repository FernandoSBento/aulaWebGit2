import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { CalculadoraComponent } from './paginas/calculadora/calculadora.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { ImcComponent } from './paginas/imc/imc.component';
import { PositivoComponent } from './paginas/positivo/positivo.component';
import { CategoriaComponent} from './paginas/categoria/categoria.component';
import { VetoresComponent} from './paginas/vetores/vetores.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'cadastro', component:CadastroComponent},
{path: 'calculadora', component:CalculadoraComponent},
{path: 'imc', component: ImcComponent},
{path: 'positivo', component: PositivoComponent},
{path: 'categoria', component: CategoriaComponent},
{path: 'vetores', component: VetoresComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
