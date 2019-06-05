import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaListaPage } from './categoria-lista/categoria-lista.page';
import { CategoriaDetalhePage } from './categoria-detalhe/categoria-detalhe.page';


const routes: Routes = [
  { path: '', component: CategoriaListaPage },
  { path: ':id', component: CategoriaDetalhePage },
  { path: 'new', component: CategoriaDetalhePage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaRoutingModule { }
