describe('HomePage tests', () => {
  it('links to search page', () => {
    cy.visit('/');

    cy.findByText(/javascript/i).click();

    cy.url().should('equal', `${Cypress.config().baseUrl}/search`);
  });

  it('links to github page', () => {
    cy.visit('/');

    cy.linkOpensInNewTab({ name: /button-link/i, href: 'https://github.com/chimson/reddit-timer-app' });
  });

  it('about section article has a link to "profy.dev"', () => {
    cy.visit('/');

    cy.linkOpensInNewTab({ name: /article-link/i, href: 'https://profy.dev/project/reddit-timer' });
  });
});

// eslint-disable-next-line jest/no-export
export {};
