import response from '../../fixtures/pushshiftapi-response.json';

describe('/api/posts tests', () => {
  it('returns 200 status code on when requested subreddit exists', () => {
    cy.interceptAndSearch({ subreddit: 'javascript' });

    cy.wait('@getPosts').its('response.statusCode').should('equal', 200);
  });

  it('returns data that deep-equals pushshift-response.json fixture', () => {
    cy.interceptAndSearch({ subreddit: 'javascript' });

    cy.wait('@getPosts').its('response.body').should('deep.equal', response);
  });

  it('single post deep-equals redditpost-response.json', () => {
    const post = {
      data: [
        {
          author: 'dulajkavinda',
          created_utc: 1614335585,
          full_link: 'https://www.reddit.com/r/reactjs/comments/lsv023/built_an_app_to_solve_the_media_bias_in_our/',
          id: 'lsv023',
          num_comments: 175,
          score: 820,
          subreddit: 'reactjs',
          title:
            'Built an app to solve the media bias in our country towards politicians. you can view every side of the story just by sliding a toggle!',
        },
      ],
    };

    cy.interceptAndSearch({ subreddit: 'javascript', fixture: 'redditpost-response.json' });

    cy.wait('@getPosts').its('response.body').should('deep.equal', post);
  });
});

// eslint-disable-next-line jest/no-export
export {};
