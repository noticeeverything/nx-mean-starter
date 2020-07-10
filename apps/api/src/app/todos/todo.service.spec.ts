import { TodoService } from './todo.service';
import { Test } from '@nestjs/testing';
import { model, Model } from 'mongoose';
import { TodoSchema } from './todo.schema';
import { Todo, TodoDocument } from '@nx-mean-starter/api-interfaces';
import * as moment from 'moment';
import { ObjectId } from 'bson';

describe('TodoService', () =>
{
	let service:TodoService;
	let repo:Model<TodoDocument>;

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
		repo = service['todoRepository'];
	});

	it('creates the service', () =>
	{
		expect(service).toBeTruthy();
	});

	describe('when adding todos', () =>
	{
		it('fails to add a todo given required fields are missing', async () =>
		{
			try
			{
				await service.Add({ title: 'TODO' } as any);
			}
			catch (e)
			{
				expect(e.message).toEqual('Todo validation failed: due: Path `due` is required.');
			}
		});

		it('adds a todo', async () =>
		{
			const due = moment().add(1, 'day').toDate();
			const todo = {
				title: 'TODO',
				description: 'TODO',
				due
			};

			spyOn(repo, 'create').and.returnValue(todo);
			const res = await service.Add(todo as any);
			expect(res).toEqual(todo);
			expect(repo.create).toHaveBeenCalledWith(todo);
		});
	});

	describe('when deleting todos', () =>
	{
		const _id = new ObjectId().toHexString() as any;

		it('returns null given no document exists', async () =>
		{
			spyOn(repo, 'findByIdAndRemove').and.returnValue(null);
			const res = await service.Delete(_id);
			expect(res).toBeNull();
			expect(repo.findByIdAndRemove).toHaveBeenCalledWith(_id);
		});

		it('deletes the todo', async () =>
		{
			const todo = { _id };
			spyOn(repo, 'findByIdAndRemove').and.returnValue(todo);
			const res = await service.Delete(_id);
			expect(res).toEqual(todo);
			expect(repo.findByIdAndRemove).toHaveBeenCalledWith(_id);
		});
	});

	describe('when finding todos', () =>
	{
		it('finds all todos', async () =>
		{
			spyOn(repo, 'find').and.returnValue([]);
			const res = await service.Find();
			expect(res).toEqual([]);
			expect(repo.find).toHaveBeenCalled();
		});
	});

	describe('when updating todos', () =>
	{
		const _id = new ObjectId().toHexString() as any;

		it('returns null given no document exists', async () =>
		{
			spyOn(repo, 'findByIdAndUpdate').and.returnValue(null);
			const res = await service.Update(_id, {} as any);
			expect(res).toBeNull();
			expect(repo.findByIdAndUpdate).toHaveBeenCalledWith(_id, {}, { new: true });
		});

		it('updates the todo', async () =>
		{
			const todo = { _id, description: 'TODO' } as any;
			spyOn(repo, 'findByIdAndUpdate').and.returnValue(todo);
			const res = await service.Update(_id, todo);
			expect(res).toEqual(todo);
			expect(repo.findByIdAndUpdate).toHaveBeenCalledWith(_id, todo, { new: true });
		});
	});
});
