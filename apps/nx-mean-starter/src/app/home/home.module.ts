import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IconsModule } from 'angular-bootstrap-md';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		IconsModule
	]
})
export class HomeModule {}
