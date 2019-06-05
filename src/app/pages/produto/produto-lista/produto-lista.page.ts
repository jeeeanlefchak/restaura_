import { Component, OnInit, NgModule } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, IonicModule } from '@ionic/angular';
import { Produto } from 'src/app/models/produto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.page.html',
  styleUrls: ['./produto-lista.page.scss'],
})

export class ProdutoListaPage implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtSerivce: ProdutoService, private router: Router) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.produtSerivce.getProdutos().subscribe(res => {
      this.produtos = res;
    });
  }
  remove(produtoId: number) {
    this.produtSerivce.removeProduto(produtoId);
  }

  openPage(url) {
    this.router.navigateByUrl(url);
  }

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    ProdutoListaPage
  ],
  exports: [
    ProdutoListaPage
  ]
})
export class ProdutoListaPageModule { }
