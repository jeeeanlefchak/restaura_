import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {
  produto: Produto = {
    descricao: 'desc',
    nome: 'name',
    idCategoria: 1,
    valor: 5
  }

  produtoId = 0;

  constructor(private produtSerivce: ProdutoService,
    private router: ActivatedRoute, private nav : NavController) { }

  ngOnInit() {
    this.produtoId = this.router.snapshot.params['id'];
    if (this.produtoId) {
      this.get();
    }
  }

  get() {
    this.produtSerivce.getProduto(this.produtoId).subscribe(res=>{
      this.produto = res;
    })
  }

  save() {
    if(this.produtoId){
      this.produtSerivce.updateProduto(this.produto, this.produtoId).then(()=>{
        this.nav.back();
      });
    }else{
      this.produtSerivce.addProduto(this.produto).then(()=>{
        this.nav.back();
      })
    }
    
  }

  remove(){
    this.produtSerivce.removeProduto(this.produto);
  }


}
