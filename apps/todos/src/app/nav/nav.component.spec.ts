import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { NavComponent } from './nav.component';
import { MockComponent } from 'ng-mocks';
import {
	NavbarComponent,
	MdbIconComponent,
	LinksComponent,
	LogoComponent,
} from 'angular-bootstrap-md';

describe('NavComponent', () => {
	let spectator: Spectator<NavComponent>;
	const createComponent = createComponentFactory({
		component: NavComponent,
		declarations: [
			MockComponent(NavbarComponent),
			MockComponent(MdbIconComponent),
			MockComponent(LinksComponent),
			MockComponent(LogoComponent),
		],
	});

	it('should create', () => {
		spectator = createComponent();

		expect(spectator.component).toBeTruthy();
	});
});
