import { Component, OnInit } from '@angular/core';
import { MDBModalRef, ModalOptions } from 'angular-bootstrap-md';
import { TodoDto } from '@nx-mean-starter/api-interfaces';
import * as moment from 'moment';

@Component({
	selector: 'todos-todo-form',
	templateUrl: './todo-view.component.html',
})
export class TodoViewComponent implements OnInit {
	todo: TodoDto;

	constructor(
		private readonly modalRef: MDBModalRef,
		private readonly modalOptions: ModalOptions,
	) {}

	ngOnInit() {
		if (this.modalOptions.data.hasOwnProperty('todo')) {
			this.todo = this.modalOptions.data['todo'];
			this.todo.due = moment(this.todo.due).toDate();
		}
	}

	Close() {
		this.modalRef.hide();
	}
}
