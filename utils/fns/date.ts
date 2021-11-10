import { RedditPost } from '@types';
import { getUnixTime, subMonths, subYears } from 'date-fns';

function getUnixTimestamps() {
  const dateThreeMonthsAgo = getUnixTime(subMonths(Date.now(), 3));
  const dateSixMonthsAgo = getUnixTime(subMonths(Date.now(), 6));
  const dateYearAgo = getUnixTime(subYears(Date.now(), 1));

  return [dateThreeMonthsAgo, dateSixMonthsAgo, dateYearAgo];
}

function getDayAndHour(post: RedditPost) {
  const date = new Date(post.created_utc * 1000);
  const day = date.getUTCDay();
  const hour = date.getUTCHours();

  return [day, hour];
}

export { getUnixTimestamps, getDayAndHour };
