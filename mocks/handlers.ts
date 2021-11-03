import { rest } from 'msw';

export const handlers = [
  rest.get(`http://localhost:3000/api/posts`, (req, res, ctx) => {
    const subreddit = req.url.searchParams.get('subreddit');

    return res(
      ctx.status(200),
      ctx.json({
        subreddit,
        data: [
          {
            author: 'midgitsuu',
            created_utc: 1620604930,
            full_link: 'https://www.reddit.com/r/javascript/comments/n8r1fy/mothers_day_css_card/',
            id: 'n8r1fy',
            num_comments: 1,
            score: 1,
            subreddit: 'javascript',
            title: 'Mothers Day CSS Card',
          },
          {
            author: 'frankneuro',
            created_utc: 1614380730,
            full_link:
              'https://www.reddit.com/r/javascript/comments/ltacm0/the_amazing_mechanical_plumbus_react_howlerjs/',
            id: 'ltacm0',
            num_comments: 19,
            score: 59,
            subreddit: 'javascript',
            title: 'The Amazing Mechanical Plumbus (React, Howler.js)',
          },
        ],
      })
    );
  }),
];
