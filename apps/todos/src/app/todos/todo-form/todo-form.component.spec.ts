import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { TodoFormComponent } from './todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBModalRef, ModalOptions } from 'angular-bootstrap-md';
import { mockProvider } from '@ngneat/spectator/jest';
import { TodoService } from '../todo.service';
import { BehaviorSubject } from 'rxjs';

describe('TodoFormComponent', () =>
{
	let spectator:Spectator<TodoFormComponent>;
	const createComponent = createComponentFactory({
		imports: [ReactiveFormsModule],
		component: TodoFormComponent,
		componentProviders: [
			mockProvider(TodoService, { todos$: new BehaviorSubject([]) }),
			mockProvider(ModalOptions, { data: {} })
		],
		mocks: [
			MDBModalRef
		]
	});

	it('should create', () =>
	{
		spectator = createComponent();

		expect(spectator.component).toBeTruthy();
	});
});
