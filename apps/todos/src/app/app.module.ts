import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { NavbarModule, IconsModule, WavesModule } from 'angular-bootstrap-md';

@NgModule({
	declarations: [AppComponent, NavComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NavbarModule,
		IconsModule,
		WavesModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
