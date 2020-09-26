import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { TodoViewComponent } from './todo-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBModalRef, ModalOptions } from 'angular-bootstrap-md';
import { mockProvider } from '@ngneat/spectator/jest';
import { TodoDto } from '@nx-mean-starter/api-interfaces';
import * as moment from 'moment';

describe('TodoFormComponent', () => {
	let spectator: Spectator<TodoViewComponent>;
	const createComponent = createComponentFactory({
		imports: [ReactiveFormsModule],
		component: TodoViewComponent,
		componentProviders: [
			mockProvider(ModalOptions, {
				data: {
					todo: new TodoDto({
						_id: 'fakeId',
						description: 'DESC',
						title: 'TODO',
						due: moment().toDate(),
					}),
				},
			}),
		],
		mocks: [MDBModalRef],
	});

	it('should create', () => {
		spectator = createComponent();

		expect(spectator.component).toBeTruthy();
	});
});
