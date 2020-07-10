import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { BaseComponent } from '@todos/base';
import { Todo, TodoDto } from '@todos/api-interfaces';
import { takeUntil, filter } from 'rxjs/operators';
import { MDBModalService } from 'angular-bootstrap-md';
import { TodoFormComponent } from './todo-form/todo-form.component';

@Component({
	selector: 'todos-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.scss']
})
export class TodosComponent extends BaseComponent implements OnInit
{
	error:string;

	todos:TodoDto[];

	working = false;

	constructor(private readonly todoService:TodoService, private modalService:MDBModalService)
	{
		super();
	}

	ngOnInit()
	{
		this.working = true;
		this.todoService.Get();
		this.todoService.todos$.pipe(filter(v => !!v), takeUntil(this.destroy$))
			.subscribe(r =>
			{
				this.todos = r;
				this.working = false;
			});
	}

	Add()
	{
		this.modalService.show(TodoFormComponent);
	}

	Delete(todo:Todo)
	{
		this.todoService.Delete(todo._id)
			.subscribe(
				res => null,
				err => this.error = err.message
			);
	}

	Edit(todo:Todo)
	{
		this.modalService.show(TodoFormComponent, { data: { todo } });
	}

	ToggleDone(todo:Todo)
	{
		this.todoService.Update(todo).subscribe(
			res => null,
			err =>
			{
				todo.done = !todo.done;
				this.error = err.message;
			}
		);
	}
}
