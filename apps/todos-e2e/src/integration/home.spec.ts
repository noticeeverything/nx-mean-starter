import { getTitle, getByline } from '../support/app.po';

describe('Home Page', () =>
{
	beforeEach(() =>
	{
		cy.visit('/');
	});

	it('has a title', () =>
	{
		getTitle().contains('noticeeverything');
	});

	it('has a byline', () =>
	{
		getByline().contains('mean nx starter');
	});
});
