import { Component, OnInit, NgModule } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonicModule } from '@ionic/angular';
import { Produto } from 'src/app/models/produto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.page.html',
  styleUrls: ['./produto-detalhe.page.scss'],
})

export class ProdutoDetalhePage implements OnInit {
  produto: Produto = new Produto();
  categorias: Categoria[] = [];
  produtoId = 0;

  constructor(private produtSerivce: ProdutoService,
    private router: ActivatedRoute, private nav: NavController, private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.produtoId = this.router.snapshot.params['id'];
    if (this.produtoId) {
      this.get();
    }
    this.getCategories();
  }

  private getCategories() {
    this.categoriaService.getCategorias().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias.sort((a: Categoria, b: Categoria) => {
        return a.nome > b.nome ? -1 : 1;
      });
    })
  }

  get() {
    this.produtSerivce.getProduto(this.produtoId).subscribe(res => {
      this.produto = res;
    })
  }

  save() {
    if (this.produtoId) {
      this.produtSerivce.updateProduto(this.produto, this.produtoId).then(() => {
        this.nav.back();
      });
    } else {
      this.produtSerivce.addProduto(this.produto).then(() => {
        this.nav.back();
      })
    }

  }

  remove() {
    this.produtSerivce.removeProduto(this.produto);
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    ProdutoDetalhePage
  ],
  exports: [
    ProdutoDetalhePage
  ]
})
export class ProdutoDetalhePageModule { }