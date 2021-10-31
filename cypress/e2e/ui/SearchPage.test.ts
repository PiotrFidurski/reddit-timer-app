describe('SearchPage tests', () => {
  it('has a back button that goes back to "/"', () => {
    cy.visit('/');

    cy.findByRole('link', { name: /^Search$/ }).click();

    cy.findByRole('button', { name: /back/i }).click();

    cy.url().should('equal', `${Cypress.config().baseUrl}/`);
  });

  it('fetches data for "r/javascript" when visited', () => {
    cy.intercept('/api/posts?subreddit=javascript', { fixture: 'pushshiftapi-response.json' }).as('getPosts');

    cy.visit('/search');

    cy.wait('@getPosts');

    cy.findByTestId(/heatmap/);
  });

  it('has a search input that can be typed into', () => {
    cy.visit('/search');

    cy.findByRole('textbox', { name: /subreddit/i })
      .clear()
      .type('javascript');
  });

  it('displays data in a form of heatmap', () => {
    cy.interceptAndSearch({ subreddit: 'javascript' });

    cy.wait('@getPosts');

    cy.findByTestId(/heatmap/i);
  });

  it('displays error message when theres an error making a request', () => {
    cy.interceptAndSearch({ subreddit: 'asdasdasd', fixture: 'pushshiftapi-error-response.json' });

    cy.findByText(/Cant find data for this subreddit/i);
  });

  it('search button cannot be spam-clicked while request is in flight', () => {
    cy.interceptAndSearch({ subreddit: 'javascript', delay: 2000 });

    cy.should('be.disabled');

    cy.wait('@getPosts');
  });
});

// eslint-disable-next-line jest/no-export
export {};
