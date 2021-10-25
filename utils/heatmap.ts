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
  '1:00am',
  '2:00am',
  '3:00am',
  '4:00am',
  '5:00am',
  '6:00am',
  '7:00am',
  '8:00am',
  '9:00am',
  '10:00am',
  '11:00am',
  '12:00am',
  '13:00pm',
  '14:00pm',
  '15:00pm',
  '16:00pm',
  '17:00pm',
  '18:00pm',
  '19:00pm',
  '20:00pm',
  '21:00pm',
  '22:00pm',
  '23:00pm',
  '24:00pm',
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