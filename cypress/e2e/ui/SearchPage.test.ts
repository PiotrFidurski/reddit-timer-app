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

    cy.findByTestId(/^0_day-Tuesday$/).click();

    cy.findByText(/Trying to access text of a div/i);
  });

  it('each reddit submission has a reddit full_link', () => {
    cy.interceptAndSearch({ subreddit: 'javascript', delay: 2000 });

    cy.wait('@getPosts');

    cy.findByTestId(/^0_day-Tuesday$/).click();

    cy.findByRole('link', { name: /submission-link/i });

    cy.linkOpensInNewTab({
      name: /submission-link/i,
      href: 'https://www.reddit.com/r/reactjs/comments/o01jqv/trying_to_access_text_of_a_div/',
    });
  });

  it('sorts posts by ascending and descending order', () => {
    cy.interceptAndSearch({ subreddit: 'javascript', delay: 2000 });

    cy.wait('@getPosts');

    cy.findByTestId(/^13_day-Wednesday$/).click();

    cy.findByRole('button', { name: /sort-order/i }).as('orderBtn');

    cy.get('@orderBtn').click();

    cy.findAllByRole('article')
      .eq(0)
      .should('contain.text', 'React Pivot Table component that connects to Azure Analysis Services');

    cy.get('@orderBtn').click();

    cy.findAllByRole('article').eq(0).should('contain.text', 'Storybook now supports Vite and Webpack5');
  });

  it('sorts posts by specified type', () => {
    cy.interceptAndSearch({ subreddit: 'javascript', delay: 2000 });

    cy.wait('@getPosts');

    cy.findByTestId(/^13_day-Wednesday$/).click();

    cy.findByRole('button', { name: /sort-by-date/i }).click();

    cy.findAllByRole('article').eq(0).should('contain.text', 'Stand aside Unity. Move over unreal engine.');

    cy.findByRole('button', { name: /sort-by-comments/i }).click();

    cy.findAllByRole('article')
      .eq(0)
      .should('contain.text', 'Been learning React the past few months and built a Netflix Clone');

    cy.findByRole('button', { name: /sort-by-score/i }).click();

    cy.findAllByRole('article').eq(0).should('contain.text', 'Storybook now supports Vite and Webpack5');
  });
});

// eslint-disable-next-line jest/no-export
export {};
