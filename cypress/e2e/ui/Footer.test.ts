describe('Footer tests', () => {
  it('links to github repo when clicking github link', () => {
    cy.visit('/');

    cy.findByRole('link', { name: /Github/i });

    cy.should('have.attr', 'target', '_blank');

    cy.should('have.attr', 'rel', 'noreferrer');

    cy.should('have.attr', 'href', 'https://github.com/chimson/reddit-timer-app');
  });

  it('links to "lukaszadam.com/illustrations" when clicking  "Illustrations by lukaszadam.com link"', () => {
    cy.visit('/');

    cy.findByRole('link', { name: /Illustrations by lukaszadam.com/i });

    cy.should('have.attr', 'target', '_blank');

    cy.should('have.attr', 'rel', 'noreferrer');

    cy.should('have.attr', 'href', 'https://lukaszadam.com/illustrations');
  });

  it('links to "profy.dev" when clicking  "inspired by link"', () => {
    cy.visit('/');

    cy.findByRole('link', { name: /Inspired by/i });

    cy.should('have.attr', 'target', '_blank');

    cy.should('have.attr', 'rel', 'noreferrer');

    cy.should('have.attr', 'href', 'https://profy.dev');
  });
});

// eslint-disable-next-line jest/no-export
export {};
