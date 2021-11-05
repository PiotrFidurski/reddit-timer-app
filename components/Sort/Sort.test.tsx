import Submissions from '@components/Submissions/Submissions';
import { fireEvent, screen } from '@testing-library/react';
import { initialState } from '@utils/heatmap-utils';
import { render } from '@utils/test-utils';

const data = initialState();

data[0][0].push(
  {
    author: 'midgitsuu',
    created_utc: 1620604930,
    full_link: 'https://www.reddit.com/r/javascript/comments/n8r1fy/mothers_day_css_card/',
    id: 'n8r1fy',
    num_comments: 61,
    score: 1,
    subreddit: 'javascript',
    title: 'Mothers Day CSS Card',
  },
  {
    author: 'frankneuro',
    created_utc: 1614380730,
    full_link: 'https://www.reddit.com/r/javascript/comments/ltacm0/the_amazing_mechanical_plumbus_react_howlerjs/',
    id: 'ltacm0',
    num_comments: 19,
    score: 59,
    subreddit: 'javascript',
    title: 'The Amazing Mechanical Plumbus (React, Howler.js)',
  }
);

test('it sorts posts in descending and ascending order', async () => {
  render(<Submissions time={{ day: 0, hour: 0 }} data={data} />);

  const orderBtn = screen.getByRole('button', { name: /sort-order/i });

  fireEvent.click(orderBtn);

  expect(screen.getAllByRole('article')[0]).toHaveTextContent('Mothers Day CSS Card');

  fireEvent.click(orderBtn);

  expect(screen.getAllByRole('article')[0]).toHaveTextContent('The Amazing Mechanical Plumbus');
});

test('it sorts posts by proper type', async () => {
  render(<Submissions time={{ day: 0, hour: 0 }} data={data} />);

  const sortScoreBtn = screen.getByRole('button', { name: /sort-by-score/i });
  const sortCommentsBtn = screen.getByRole('button', { name: /sort-by-comments/i });
  const sortDateBtn = screen.getByRole('button', { name: /sort-by-date/i });

  fireEvent.click(sortCommentsBtn);

  expect(screen.getAllByRole('article')[0]).toHaveTextContent('Mothers Day CSS Card');

  fireEvent.click(sortScoreBtn);

  expect(screen.getAllByRole('article')[0]).toHaveTextContent('The Amazing Mechanical Plumbus');
  expect(screen.getAllByRole('article')[0]).toHaveTextContent('8 months ago');

  fireEvent.click(sortDateBtn);

  expect(screen.getAllByRole('article')[0]).toHaveTextContent('6 months ago');
});
