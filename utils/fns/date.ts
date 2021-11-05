import { RedditPost } from '@types';

function getDateInEpoch() {
  const dateThreeMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 3) / 1000).toFixed();
  const dateSixMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 6) / 1000).toFixed();
  const dateYearAgo = (new Date(Date.now()).setFullYear(new Date().getFullYear() - 1) / 1000).toFixed();

  return [dateThreeMonthsAgo, dateSixMonthsAgo, dateYearAgo];
}

function getDayAndHour(post: RedditPost) {
  const date = new Date(post.created_utc * 1000);
  const day = date.getUTCDay();
  const hour = date.getUTCHours();

  return [day, hour];
}

export { getDateInEpoch, getDayAndHour };
