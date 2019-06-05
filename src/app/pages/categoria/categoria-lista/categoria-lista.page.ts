import { Component, OnInit, NgModule } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, IonicModule } from '@ionic/angular';
import { Categoria } from 'src/app/models/categoria';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.page.html',
  styleUrls: ['./categoria-lista.page.scss'],
})

export class CategoriaListaPage implements OnInit {
  categorias: Categoria[] = [];

  constructor(private produtSerivce: CategoriaService, private router: Router) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.produtSerivce.getCategorias().subscribe(res => {
      this.categorias = res;
    });
  }
  remove(categoriaId: number) {
    this.produtSerivce.removeCategoria(categoriaId);
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
    CategoriaListaPage
  ],
  exports: [
    CategoriaListaPage
  ]
})
export class CategoriaListaPageModule { }
