export const getTitle = () => cy.get('#home-brand');
export const getByline = () => cy.get('#home-brand').next('p');
