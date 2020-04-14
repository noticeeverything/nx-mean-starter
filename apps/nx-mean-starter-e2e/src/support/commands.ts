// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress
{
	interface Chainable<Subject>
	{
		addTodo():void;

		deleteTodo():void;

		editTodo():void;

		getTodos():void;
	}
}

Cypress.Commands.add('addTodo', () =>
{
	cy.server();
	cy.route({
		method: 'POST',
		url: '/api/todos'
	}).as('addTodoCheck');
});

Cypress.Commands.add('deleteTodo', () =>
{
	cy.server();
	cy.route({
		method: 'DELETE',
		url: '/api/todos/*'
	}).as('deleteTodoCheck');
});

Cypress.Commands.add('editTodo', () =>
{
	cy.server();
	cy.route({
		method: 'PUT',
		url: '/api/todos/*'
	}).as('editTodoCheck');
});

Cypress.Commands.add('getTodos', () =>
{
	cy.server();
	cy.route({
		method: 'GET',
		url: '/api/todos'
	}).as('getTodosCheck');
});
