// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
export interface InterceptAndSearchProps {
  subreddit: string;
  fixture?: string;
  delay?: number;
}

Cypress.Commands.add(
  'interceptAndSearch',
  ({ subreddit, fixture = 'pushshiftapi-response.json', delay = 1000 }: InterceptAndSearchProps) => {
    cy.intercept(`/api/posts?subreddit=${subreddit}`, { fixture, delay }).as('getPosts');

    cy.visit('/search');

    cy.findByRole('textbox', { name: /subreddit/i })
      .clear()
      .type(subreddit);

    cy.findByRole('button', { name: /^Search$/ }).click();
  }
);

interface LinkOpensInNewTabProps {
  name: string | RegExp;
  href: string;
}

Cypress.Commands.add('linkOpensInNewTab', ({ name, href }: LinkOpensInNewTabProps) => {
  cy.findByRole('link', { name });

  cy.should('have.attr', 'target', '_blank');

  cy.should('have.attr', 'rel', 'noreferrer');

  cy.should('have.attr', 'href', href);
});

export {};
