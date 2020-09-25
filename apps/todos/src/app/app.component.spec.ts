import { AppComponent } from './app.component';
import { SpectatorRouting } from '@ngneat/spectator';
import { createRoutingFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';

describe('AppComponent', () => {
	let spectator: SpectatorRouting<AppComponent>;
	let app: AppComponent;

	const createComponent = createRoutingFactory({
		component: AppComponent,
		declarations: [
			MockComponent(RouterOutlet),
			MockComponent(NavComponent),
		],
	});

	beforeEach(() => {
		spectator = createComponent();
		app = spectator.component;
	});

	it('should create the app', () => {
		expect(app).toBeTruthy();
	});
});
