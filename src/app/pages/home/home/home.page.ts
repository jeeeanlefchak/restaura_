import { Component, OnInit, NgModule } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, IonicModule } from '@ionic/angular';
import { Produto } from 'src/app/models/produto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-HomePage',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    HomePage
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule { }
