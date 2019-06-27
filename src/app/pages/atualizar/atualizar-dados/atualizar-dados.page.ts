import { Storage } from '@ionic/storage';
import { Component, OnInit, NgModule, Inject } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonicModule } from '@ionic/angular';
import { Categoria } from 'src/app/models/categoria';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atualizar-dados-detalhe',
  templateUrl: './atualizar-dados.page.html',
  styleUrls: ['./atualizar-dados.page.scss'],
})

export class AtualizarDadosPage implements OnInit {
  loadingCategorias: boolean = false;
  categorias: Categoria[] = [];
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {

  }

  async updateCategories() {
    this.loadingCategorias = true;
    debugger
    await this.categoriaService.removeLocalAll();
    await this.categoriaService.getCategorias().subscribe(async (categorias: Categoria[]) => {
      let c: any = await this.categoriaService.addLocalCategoria(categorias);
      this.categorias = c;
      this.loadingCategorias = false;
    })
  }

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    AtualizarDadosPage
  ],
  exports: [
    AtualizarDadosPage
  ]
})
export class AtualizarDadosPageModule { }