import { Injectable } from '@nestjs/common';
import { TodoModel } from './todo.decorators';
import { Model } from 'mongoose';
import { TodoDocument, Todo } from '@nx-mean-starter/api-interfaces';

@Injectable()
export class TodoService
{
	constructor(@TodoModel private readonly todoRepository:Model<TodoDocument>) {}

	async Add(t:Todo):Promise<Todo>
	{
		const todo = new this.todoRepository(t);
		return await todo.save();
	}

	async Delete(id:string):Promise<Todo>
	{
		return this.todoRepository.findByIdAndRemove(id);
	}

	async Find():Promise<Todo[]>
	{
		return this.todoRepository.find();
	}

	async Update(id:string, todo:Todo):Promise<Todo>
	{
		return this.todoRepository.findByIdAndUpdate(id, todo, { new: true });
	}
}
