it('Header has <header> tag', () => {
  cy.visit('http://localhost:3000').get('header');
});

// eslint-disable-next-line jest/no-export
export {};
