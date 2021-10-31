describe('Footer tests', () => {
  it('links to github repo when clicking github link', () => {
    cy.visit('/');

    cy.linkOpensInNewTab({ name: /Github/i, href: 'https://github.com/chimson/reddit-timer-app' });
  });

  it('links to "lukaszadam.com/illustrations" when clicking  "Illustrations by lukaszadam.com link"', () => {
    cy.visit('/');

    cy.linkOpensInNewTab({ name: /Illustrations by lukaszadam.com/i, href: 'https://lukaszadam.com/illustrations' });
  });

  it('links to "profy.dev" when clicking  "inspired by link"', () => {
    cy.visit('/');

    cy.linkOpensInNewTab({ name: /Inspired by/, href: 'https://profy.dev' });
  });

  it('links to "https://pushshift.io" when clicking "pushshift api" link', () => {
    cy.visit('/');

    cy.linkOpensInNewTab({ name: /pushshift api/i, href: 'https://pushshift.io' });
  });
});

// eslint-disable-next-line jest/no-export
export {};
