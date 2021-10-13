it('Header has <header> tag', () => {
  cy.visit('/').get('header');
});

// eslint-disable-next-line jest/no-export
export {};
