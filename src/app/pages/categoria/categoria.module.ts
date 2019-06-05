import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaRoutingModule } from './categoria.routinhg.module';
import { CategoriaListaPageModule } from './categoria-lista/categoria-lista.page';
import { CategoriaDetalhePageModule } from './categoria-detalhe/categoria-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    CategoriaListaPageModule,
    CategoriaRoutingModule,
    CategoriaDetalhePageModule,
  ],
  declarations: [

  ]
})
export class CategoriaModule { }
