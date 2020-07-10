import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MDBModalRef, ModalOptions } from 'angular-bootstrap-md';
import { TodoService } from '../todo.service';
import { Todo } from '@nx-mean-starter/api-interfaces';
import * as moment from 'moment';

@Component({
	selector: 'todos-todo-form',
	templateUrl: './todo-form.component.html',
	styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit
{
	error:string;

	submitting = false;

	todo:Todo;

	todoForm:FormGroup = this.formBuilder.group({
		title: [null, [Validators.required]],
		description: [null],
		due: [null, [Validators.required]],
		done: [false, Validators.required]
	});

	constructor(
		private readonly formBuilder:FormBuilder,
		private readonly modalRef:MDBModalRef,
		private readonly todoService:TodoService,
		private readonly modalOptions:ModalOptions
	)
	{ }

	ngOnInit()
	{
		if (this.modalOptions.data.hasOwnProperty('todo'))
		{
			this.todo = this.modalOptions.data['todo'];
			this.todo.due = moment(this.todo.due).toDate();
			this.todoForm.patchValue(this.todo);
		}
	}

	Close()
	{
		this.modalRef.hide();
	}

	Submit()
	{
		this.submitting = true;
		this.error = undefined;

		const form = this.todoForm.getRawValue();
		if (this.todo) form._id = this.todo._id;

		const obs = this.todo ?
			this.todoService.Update(form) :
			this.todoService.Add(form);

		return obs.subscribe(
			res =>
			{
				this.submitting = false;
				if (res.success) return this.modalRef.hide();
				this.error = res.message;
			},
			err =>
			{
				this.error = err.message;
				this.submitting = false;
			}
		);
	}
}
