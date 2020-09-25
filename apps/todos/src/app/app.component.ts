import { Component } from '@angular/core';

@Component({
	selector: 'todos-root',
	template: `
		<todos-nav></todos-nav>
		<router-outlet></router-outlet>
	`,
})
export class AppComponent {}
