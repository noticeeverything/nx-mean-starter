import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let spectator: Spectator<HomeComponent>;
	let component: HomeComponent;

	const createComponent = createComponentFactory({
		component: HomeComponent,
	});

	beforeEach(() => {
		spectator = createComponent();
		component = spectator.component;
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});
});
