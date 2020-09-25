import {
	Spectator,
	createComponentFactory,
	mockProvider,
} from '@ngneat/spectator/jest';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {
	MDBModalService,
	MdbCardComponent,
	MdbCardHeaderComponent,
	MdbCardBodyComponent,
	CheckboxComponent,
} from 'angular-bootstrap-md';
import { BehaviorSubject } from 'rxjs';
import { MockComponent, MockDirective } from 'ng-mocks';
import { NgModel } from '@angular/forms';

describe('TodosComponent', () => {
	let spectator: Spectator<TodosComponent>;
	let component: TodosComponent;

	const createComponent = createComponentFactory({
		component: TodosComponent,
		componentProviders: [
			mockProvider(TodoService, { todos$: new BehaviorSubject([]) }),
		],
		declarations: [
			MockComponent(MdbCardComponent),
			MockComponent(MdbCardHeaderComponent),
			MockComponent(MdbCardBodyComponent),
			MockComponent(CheckboxComponent),
			MockDirective(NgModel),
		],
		mocks: [MDBModalService],
	});

	beforeEach(() => {
		spectator = createComponent();
		component = spectator.component;
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});
});
