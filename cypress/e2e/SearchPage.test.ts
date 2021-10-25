describe('SearchPage tests', () => {
  it('has a search input that can be typed into', () => {
    cy.visit('/search');

    cy.findByRole('textbox', { name: /subreddit/i })
      .clear()
      .type('javascript');
  });

  it('displays heatmap of subreddit posts when api call is successful', () => {
    cy.intercept('http://localhost:3000/api/posts?subreddit=javascript').as('getPosts');

    cy.visit('/search');

    cy.findByRole('textbox', { name: /subreddit/i })
      .clear()
      .type('javascript');

    cy.findByText(/^Search$/).click();

    cy.findByTestId(/heatmap/i);

    cy.should('exist');
  });

  it('displays error message when api call fails', () => {
    cy.intercept('http://localhost:3000/api/posts?subreddit=asdasdasd').as('getPosts');

    cy.visit('/search');

    cy.findByRole('textbox', { name: /subreddit/i })
      .clear()
      .type('asdasdasd');

    cy.findByText(/^Search$/).click();

    cy.findByText(/Cant find data for this subreddit/i);

    cy.should('exist');
  });

  it('search button cannot be clicked while request is in flight', () => {
    cy.intercept('http://localhost:3000/api/posts?subreddit=javascript').as('getPosts');

    cy.visit('/');

    cy.findByRole('textbox', { name: /subreddit/i })
      .clear()
      .type('javascript');

    cy.findByText(/^Search$/).click();

    cy.findByText(/^Search$/).should('have.attr', 'disabled');
  });
});

// eslint-disable-next-line jest/no-export
export {};
