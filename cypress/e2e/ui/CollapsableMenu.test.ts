describe('Menu tests', () => {
  beforeEach(() => {
    cy.viewport(600, 900);
  });
  it('opens and closes menu on ToggleMenuButton click', () => {
    cy.visit('/');

    cy.findByRole('button', { name: /^menu-open$/ }).click();

    cy.findByRole('link', { name: /^Search$/ });

    cy.findByRole('navigation', { name: /collapsable-menu/ }).as('menu');

    cy.should('have.attr', 'aria-hidden', 'false');

    cy.findByRole('button', { name: /^menu-close$/ }).click();

    cy.get('@menu').should('have.attr', 'aria-hidden', 'true');
  });

  it('has a working list items that link to correct pages', () => {
    cy.visit('/');

    cy.findByRole('button', { name: /^menu-open$/ }).click();

    cy.findByRole('link', { name: /^Search$/ }).click();

    cy.url().should('equal', `${Cypress.config().baseUrl}/search`);
  });
});

// eslint-disable-next-line jest/no-export
export {};
