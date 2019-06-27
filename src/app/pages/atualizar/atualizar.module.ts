import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtualizarDadosPageModule } from './atualizar-dados/atualizar-dados.page';
import { AtualizarRoutingModule } from './atualizar.routing.mdule';

@NgModule({
  imports: [
    CommonModule,
    AtualizarDadosPageModule,
    AtualizarRoutingModule
  ],
  declarations: [

  ]
})
export class AtualizaModule { }
