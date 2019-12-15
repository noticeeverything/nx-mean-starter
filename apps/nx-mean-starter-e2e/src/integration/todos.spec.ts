import * as moment from 'moment';

describe('Todos Page', () =>
{
	before(() => cy.task('db:teardown'));

	it('gets all todos on init', () =>
	{
		cy.getTodos();
		cy.visit('/todos');
		cy.wait('@getTodosCheck').then(xhr =>
		{
			assert.equal(xhr.response.body['success'], true);
			assert.deepEqual(xhr.response.body['data'], []);
		});
	});

	it('adds a todo', () =>
	{
		cy.addTodo();
		cy.get('.alert.alert-warning button').click();
		cy.get('#title').type('My Todo');
		cy.get('#due').type(moment().format('MM/DD/YYYY'));
		cy.get('#due').click();
		cy.get('#description').type('My awesome description.');
		cy.get('.modal-footer button:first-child').click();
		cy.wait('@addTodoCheck').then(xhr =>
		{
			assert.equal(xhr.response.body['success'], true);
			assert.equal(xhr.response.body['data'].title, 'My Todo');
		});
	});

	it('edits the todo', () =>
	{
		cy.editTodo();
		cy.get('mdb-card span.fa-pencil-alt').click();
		cy.get('#title').type('{selectAll}My New Todo');
		cy.get('#due')
			.type(`{selectall}${ moment().add(3, 'days').format('MM/DD/YYYY') }`);
		cy.get('#due').click();
		cy.get('.modal-footer button:first-child').click();
		cy.wait('@editTodoCheck').then(xhr =>
		{
			assert.equal(xhr.response.body['success'], true);
			assert.equal(xhr.response.body['data'].title, 'My New Todo');
		});
	});

	it('colors the todo danger given due date is past', () =>
	{
		cy.get('mdb-card').then(el => el.hasClass('alert-info'));
		cy.editTodo();
		cy.get('mdb-card span.fa-pencil-alt').click();
		cy.get('#due')
			.type(`{selectall}${ moment().subtract(1, 'day').format('MM/DD/YYYY') }`);
		cy.get('#due').click();
		cy.get('.modal-footer button:first-child').click();
		cy.wait('@editTodoCheck').then(xhr =>
		{
			assert.equal(xhr.response.body['success'], true);
		});
		cy.get('mdb-card').then(el => el.hasClass('alert-danger'));
	});

	it('colors the todo warning given due date is imminent', () =>
	{
		cy.get('mdb-card').then(el => el.hasClass('alert-info'));
		cy.editTodo();
		cy.get('mdb-card span.fa-pencil-alt').click();
		cy.get('#due')
			.type(`{selectall}${ moment().format('MM/DD/YYYY') }`);
		cy.get('#due').click();
		cy.get('.modal-footer button:first-child').click();
		cy.wait('@editTodoCheck').then(xhr =>
		{
			assert.equal(xhr.response.body['success'], true);
		});
		cy.get('mdb-card').then(el => el.hasClass('alert-warning'));
	});

	it('completes the todo', () =>
	{
		cy.editTodo();
		cy.get('.form-check-input').click();
		cy.wait('@editTodoCheck').then(xhr =>
		{
			assert.equal(xhr.response.body['success'], true);
		});
		cy.get('mdb-card').then(el => el.hasClass('alert-success'));
	});

	it('deletes the todo', () =>
	{
		cy.deleteTodo();
		cy.get('mdb-card span.fa-trash').click();
		cy.wait('@deleteTodoCheck').then(xhr => assert.equal(xhr.response.body['success'], true));
	})
});
