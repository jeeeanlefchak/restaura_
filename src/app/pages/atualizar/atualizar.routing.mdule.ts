import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizarDadosPage } from './atualizar-dados/atualizar-dados.page';


const routes: Routes = [
  { path: '', component:  AtualizarDadosPage},
  { path: 'dados', component:  AtualizarDadosPage},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizarRoutingModule { }
