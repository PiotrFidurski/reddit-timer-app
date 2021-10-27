describe('HomePage tests', () => {
  it('links to search page', () => {
    cy.visit('/');

    cy.findByText(/javascript/i).click();

    cy.url().should('equal', `${Cypress.config().baseUrl}/search`);
  });

  it('links to github page', () => {
    cy.visit('/');

    cy.findAllByRole('link', { name: /button-link/i });

    cy.should('have.attr', 'href', 'https://github.com/chimson/reddit-timer-app');

    cy.should('have.attr', 'target', '_blank');

    cy.should('have.attr', 'rel', 'noreferrer');
  });

  it('about section article has a link to "profy.dev"', () => {
    cy.visit('/');

    cy.findAllByRole('link', { name: /article-link/i });

    cy.should('have.attr', 'href', 'https://profy.dev/project/reddit-timer');

    cy.should('have.attr', 'target', '_blank');

    cy.should('have.attr', 'rel', 'noreferrer');
  });
});

// eslint-disable-next-line jest/no-export
export {};
