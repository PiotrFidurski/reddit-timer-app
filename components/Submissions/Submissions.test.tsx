import { screen } from '@testing-library/react';
import { initialState } from '@utils/heatmap';
import { render } from '@utils/test-utils';
import Submissions from './Submissions';

const heatMap = initialState();

heatMap[0][0].push({
  author: 'dulajkavinda',
  created_utc: 1638658800,
  id: 'lsv023',
  score: 820,
  subreddit: 'reactjs',
  num_comments: 175,
  full_link: 'https://www.reddit.com/r/reactjs/comments/lsv023/built_an_app_to_solve_the_media_bias_in_our/',
  title:
    'Built an app to solve the media bias in our country towards politicians. you can view every side of the story just by sliding a toggle!',
});

heatMap[4][16].push({
  author: 'mikasarei',
  created_utc: 1614870054,
  full_link: 'https://www.reddit.com/r/reactjs/comments/lxmeow/react_exercises_with_detailed_solutions/',
  id: 'lxmeow',
  num_comments: 56,
  score: 724,
  subreddit: 'reactjs',
  title: 'React Exercises With Detailed Solutions',
});

test('it displays correct submissions for each square', () => {
  render(<Submissions data={heatMap} time={{ day: 0, hour: 0 }} />);

  expect(screen.getByText(/Built an app to solve the media bias in our country/i)).toBeInTheDocument();

  render(<Submissions data={heatMap} time={{ day: 4, hour: 16 }} />);

  expect(screen.getByText(/React Exercises With Detailed Solutions/i)).toBeInTheDocument();
});

test('it has a link to each submission', async () => {
  render(<Submissions data={heatMap} time={{ day: 0, hour: 0 }} />);

  const link = screen.getByRole('link', { name: /submission-link/ });

  expect(link).toHaveAttribute('target', '_blank');

  expect(link).toHaveAttribute(
    'href',
    'https://www.reddit.com/r/reactjs/comments/lsv023/built_an_app_to_solve_the_media_bias_in_our/'
  );
});
