import { Component, OnInit, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponentModule } from 'src/app/component/menu/menu.component';

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
    MenuComponentModule
  ],
  declarations: [
    HomePage
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule { }
