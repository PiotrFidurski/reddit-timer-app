import { RedditPost } from '@pages/api/posts';

const initialState = () => new Array(7).fill([]).map(() => new Array(24).fill([]));

function getDayAndHour(post: RedditPost) {
  const date = new Date(post.created_utc * 1000);
  const day = date.getDay();
  const hour = date.getHours();

  return [day, hour];
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const hours = [
  '12:00pm',
  '2:00am',
  '4:00am',
  '6:00am',
  '8:00am',
  '10:00am',
  '12:00am',
  '14:00pm',
  '16:00pm',
  '18:00pm',
  '20:00pm',
  '22:00pm',
];

const colorPallette = [
  '#d9d3ff',
  '#C2B9FF',
  '#C2B9FF',
  '#928BE7',
  '#928BE7',
  '#7974CD',
  '#7974CD',
  '#001056',
  '#001056',
  '#161A62',
  '#161A62',
  '#001056',
];

export { days, hours, colorPallette, initialState, getDayAndHour };
