import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto.routinhg.module';
import { ProdutoListaPageModule } from './produto-lista/produto-lista.page';
import { ProdutoDetalhePageModule } from './produto-detalhe/produto-detalhe.page';

@NgModule({
    imports: [
        CommonModule,
        ProdutoListaPageModule,
        ProdutoRoutingModule,
        ProdutoDetalhePageModule,
    ],
    declarations: [

    ]
})
export class ProdutoModule { }
