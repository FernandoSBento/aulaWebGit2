import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { HomeComponent } from './paginas/home/home.component';
import { CalculadoraComponent} from './paginas/calculadora/calculadora.component';
import { CadastroComponent} from './paginas/cadastro/cadastro.component';
import { ImcComponent } from './paginas/imc/imc.component';
import { PositivoComponent} from './paginas/positivo/positivo.component';

import { CategoriaComponent } from './paginas/categoria/categoria.component';
import { VetoresComponent } from './paginas/vetores/vetores.component';




@NgModule({
  declarations: [
    AppComponent, HomeComponent, CalculadoraComponent,
    ImcComponent, CadastroComponent, PositivoComponent, CategoriaComponent, VetoresComponent,

  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
