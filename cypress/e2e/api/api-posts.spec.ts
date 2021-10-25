import response from '../../fixtures/pushshiftapi-response.json';

describe('/api/posts tests', () => {
  it('returns 200 status code on when requested subreddit exists', () => {
    cy.intercept('http://localhost:3000/api/posts?subreddit=webdev', { fixture: 'pushshiftapi-response.json' }).as(
      'getPosts'
    );

    cy.visit('/search');

    cy.findByRole('textbox', { name: /subreddit/i })
      .clear()
      .type('webdev');

    cy.findByRole('button', { name: /^Search$/ }).click();

    cy.wait('@getPosts').its('response.statusCode').should('equal', 200);
  });

  it('returns 400 status code on when requested subreddit doesnt exist', () => {
    cy.intercept('http://localhost:3000/api/posts?subreddit=asdasdasd').as('getPosts');

    cy.visit('/search');

    cy.findByRole('textbox', { name: /subreddit/i })
      .clear()
      .type('asdasdasd');

    cy.findByText(/^Search$/).click();

    cy.wait('@getPosts').its('response.statusCode').should('equal', 400);
  });

  it('returns data that deep-equals pushshift-response.json fixture', () => {
    cy.intercept('http://localhost:3000/api/posts?subreddit=reactjs', { fixture: 'pushshiftapi-response.json' }).as(
      'getPosts'
    );

    cy.visit('/search');

    cy.findByRole('textbox', { name: /subreddit/i })
      .clear()
      .type('reactjs');

    cy.findByText(/^Search$/).click();

    cy.wait('@getPosts').its('response.body').should('deep.equal', response);
  });

  it('single post deep-equals redditpost-response.json', () => {
    const post = {
      data: [
        {
          author: 'dulajkavinda',
          created_utc: 1614335585,
          id: 'lsv023',
          score: 820,
          subreddit: 'reactjs',
          title:
            'Built an app to solve the media bias in our country towards politicians. you can view every side of the story just by sliding a toggle!',
        },
      ],
    };

    cy.intercept('http://localhost:3000/api/posts?subreddit=reactjs', { fixture: 'redditpost-response.json' }).as(
      'getPosts'
    );

    cy.visit('/search');

    cy.findByRole('textbox', { name: /subreddit/i })
      .clear()
      .type('reactjs');

    cy.findByText(/^Search$/).click();

    cy.wait('@getPosts').its('response.body').should('deep.equal', post);
  });
});

// eslint-disable-next-line jest/no-export
export {};
