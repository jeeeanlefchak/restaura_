import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(res => {
      this.produtos = res;
    })
  }

  remove(item){
    this.produtoService.removeProduto(item).then();
  }
}
