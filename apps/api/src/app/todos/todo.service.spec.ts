import { TodoService } from './todo.service';
import { Test } from '@nestjs/testing';
import { model } from 'mongoose';
import { TodoSchema } from './todo.schema';
import { Todo } from '@nx-mean-starter/api-interfaces';

describe('TodoService', () =>
{
	let service:TodoService;

	beforeEach(async () =>
	{
		const module = await Test.createTestingModule({
			providers: [
				TodoService,
				{
					provide: 'TodoModel',
					useValue: model('Todo', TodoSchema)
				}
			]
		}).compile();

		service = module.get(TodoService);
	});

	it('creates the service', () =>
	{
		expect(service).toBeTruthy();
	});
});
