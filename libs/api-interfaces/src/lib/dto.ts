import * as moment from 'moment';
import { Todo } from './interfaces';

export class TodoDto implements Todo
{
	_id:any;

	createdAt:Date;

	description?:string;

	done:boolean;

	due:Date;

	title:string;

	updatedAt:Date;

	constructor(todo:Todo)
	{
		this._id = todo._id;
		this.createdAt = todo.createdAt;
		this.description = todo.description;
		this.done = todo.done;
		this.due = todo.due;
		this.title = todo.title;
		this.updatedAt = todo.updatedAt;
	}

	isDueShortly()
	{
		return moment(this.due).diff(moment(), 'day', false) === 0;
	}

	isOverdue()
	{
		return moment(this.due).isBefore(moment());
	}
}
