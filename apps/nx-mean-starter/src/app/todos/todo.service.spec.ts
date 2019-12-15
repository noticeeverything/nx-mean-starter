import { createHttpFactory, HttpMethod } from '@ngneat/spectator';
import { SpectatorHttp } from '@ngneat/spectator/jest';
import { TodoService } from './todo.service';

describe('Todos/todoService', () =>
{
	let spectator:SpectatorHttp<TodoService>;
	let todoService:TodoService;
	const createHttp = createHttpFactory({
		service: TodoService
	});

	beforeEach(() =>
	{
		spectator = createHttp();
		todoService = spectator.service;
	});

	it('can test HttpClient.get', () =>
	{
		spectator.service.Get();
		spectator.expectOne('http://localhost:3333/api/todos', HttpMethod.GET);
	});
});
