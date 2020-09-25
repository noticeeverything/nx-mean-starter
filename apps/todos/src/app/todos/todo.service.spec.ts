import { TodoService } from './todo.service';
import { SpectatorHttp, HttpMethod } from '@ngneat/spectator';
import { createHttpFactory } from '@ngneat/spectator/jest';

describe('Todos/todoService', () => {
	let spectator: SpectatorHttp<TodoService>;
	let todoService: TodoService;
	const createHttp = createHttpFactory(TodoService);

	beforeEach(() => {
		spectator = createHttp();
		todoService = spectator.service;
	});

	it('can test HttpClient.get', () => {
		spectator.service.Get();
		spectator.expectOne('http://localhost:3333/api/todos', HttpMethod.GET);
	});
});
