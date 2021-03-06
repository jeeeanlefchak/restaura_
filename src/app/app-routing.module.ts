import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'produtos', loadChildren: './pages/produto/produto.module#ProdutoModule' },
  { path: 'categoria', loadChildren: './pages/categoria/categoria.module#CategoriaModule' },
  { path: 'atualizar', loadChildren: './pages/atualizar/atualizar.module#AtualizaModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
