describe('Header tests', () => {
  it('has <header> tag', () => {
    cy.visit('/').get('header');
  });

  it('has <nav> tag', () => {
    cy.visit('/').get('nav');
  });

  it('has a logo that links to "/"', () => {
    cy.visit('/');
    cy.findByTestId('link-logo').click();

    cy.url().should('equal', `${Cypress.config().baseUrl}/`);
  });

  it('has how it works link and links to "#how-it-works" section', () => {
    cy.visit('/');
    cy.findByText(/^How it works$/).click();

    cy.url().should('equal', `${Cypress.config().baseUrl}/#how-it-works`);
  });

  it('has about link and links to "#about" section', () => {
    cy.visit('/');
    cy.findByText(/^About$/).click();

    cy.url().should('equal', `${Cypress.config().baseUrl}/#about`);
  });

  it('has search link that links to "/search" page', () => {
    cy.visit('/');
    cy.findByText(/^Search$/).click();

    cy.url().should('equal', `${Cypress.config().baseUrl}/search`);
  });
});

// eslint-disable-next-line jest/no-export
export {};
