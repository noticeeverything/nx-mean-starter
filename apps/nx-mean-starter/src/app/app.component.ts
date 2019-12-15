import { Component } from '@angular/core';

@Component({
	selector: 'nx-mean-starter-root',
	template: `
        <nx-mean-starter-nav></nx-mean-starter-nav>
        <router-outlet></router-outlet>
	`
})
export class AppComponent {}
