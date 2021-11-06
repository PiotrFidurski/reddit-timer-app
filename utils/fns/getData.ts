import { RedditPost } from '@types';

export async function getData(subreddit: string): Promise<{ data: Array<RedditPost> }> {
  const response = await fetch(`${process.env.BASE_URL}/api/posts?subreddit=${subreddit}`);

  const result: { data: Array<RedditPost> } = await response.json();

  if (result.data === null || result.data.length === 0) {
    throw new Error('Cant find data for this subreddit');
  }

  return result;
}
