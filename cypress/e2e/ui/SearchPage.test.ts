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

  it('displays reddit submissions when heatmap square is clicked', () => {
    cy.interceptAndSearch({ subreddit: 'javascript', delay: 2000 });

    cy.wait('@getPosts');

    cy.findByTestId(/^1_day-Sunday$/).click();

    cy.findByText(/How do I connect my React project to a backend?/i);
  });

  it('each reddit submission has a reddit full_link', () => {
    cy.interceptAndSearch({ subreddit: 'javascript', delay: 2000 });

    cy.wait('@getPosts');

    cy.findByTestId(/^5_day-Sunday$/).click();

    cy.findByRole('link', { name: /submission-link/i });

    cy.linkOpensInNewTab({
      name: /submission-link/i,
      href: 'https://www.reddit.com/r/reactjs/comments/o3wfax/i_curated_1024_remote_job_openings_from_hacker/',
    });
  });
});

// eslint-disable-next-line jest/no-export
export {};
