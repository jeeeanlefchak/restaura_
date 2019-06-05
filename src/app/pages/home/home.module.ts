import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { HomePageModule } from './home/home.page';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		HomePageModule
	],
	declarations: [

	]
})
export class HomeModule { }
