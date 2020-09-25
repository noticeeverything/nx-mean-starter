import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'todos-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class NavComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
