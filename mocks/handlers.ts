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
            author: 'dulajkavinda',
            created_utc: 1638658800,
            id: 'lsv023',
            score: 820,
            subreddit: 'reactjs',
            num_comments: 175,
            full_link: 'https://www.reddit.com/r/reactjs/comments/lsv023/built_an_app_to_solve_the_media_bias_in_our/',
            title:
              'Built an app to solve the media bias in our country towards politicians. you can view every side of the story just by sliding a toggle!',
          },
          {
            author: 'mikasarei',
            created_utc: 1614870054,
            full_link: 'https://www.reddit.com/r/reactjs/comments/lxmeow/react_exercises_with_detailed_solutions/',
            id: 'lxmeow',
            num_comments: 56,
            score: 724,
            subreddit: 'reactjs',
            title: 'React Exercises With Detailed Solutions',
          },
        ],
      })
    );
  }),
];
