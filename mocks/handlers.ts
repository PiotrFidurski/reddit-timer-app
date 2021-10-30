import { rest } from 'msw';

const url =
  process.env.NODE_ENV === 'production' ? 'https://reddit-timer-app.vercel.app/api' : 'http://localhost:3000/api';

export const handlers = [
  rest.get(`${url}/posts`, (req, res, ctx) => {
    const subreddit = req.url.searchParams.get('subreddit');

    return res(
      ctx.status(200),
      ctx.json({
        subreddit,
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
      })
    );
  }),
];
