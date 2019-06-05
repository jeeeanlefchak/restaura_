import { Component, OnInit, NgModule } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonicModule } from '@ionic/angular';
import { Categoria } from 'src/app/models/categoria';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categoria-detalhe',
  templateUrl: './categoria-detalhe.page.html',
  styleUrls: ['./categoria-detalhe.page.scss'],
})

export class CategoriaDetalhePage implements OnInit {
  categoria: Categoria = new Categoria();
  categoriaId = 0;

  constructor(private produtSerivce: CategoriaService,
    private router: ActivatedRoute, private nav: NavController) { }

  ngOnInit() {
    this.categoriaId = this.router.snapshot.params['id'];
    if (this.categoriaId) {
      this.get();
    }
  }

  get() {
    this.produtSerivce.getCategoria(this.categoriaId).subscribe(res => {
      this.categoria = res;
    })
  }

  save() {
    if (this.categoriaId) {
      this.produtSerivce.updateCategoria(this.categoria, this.categoriaId).then(() => {
        this.nav.back();
      });
    } else {
      this.produtSerivce.addCategoria(this.categoria).then(() => {
        this.nav.back();
      })
    }

  }

  remove() {
    this.produtSerivce.removeCategoria(this.categoria);
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    CategoriaDetalhePage
  ],
  exports: [
    CategoriaDetalhePage
  ]
})
export class CategoriaDetalhePageModule { }