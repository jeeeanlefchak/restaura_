import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoListaPage } from './produto-lista/produto-lista.page';
import { ProdutoDetalhePage } from './produto-detalhe/produto-detalhe.page';


const routes: Routes = [
  { path: '', component: ProdutoListaPage },
  { path: 'edit/:id', component: ProdutoDetalhePage },
  { path: 'new', component: ProdutoDetalhePage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule { }
