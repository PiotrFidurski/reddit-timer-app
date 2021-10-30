import { RedditPost } from '@pages/api/posts';

export async function getData(subreddit: string): Promise<{ data: Array<RedditPost> }> {
  const response = await fetch(`http://localhost:3000/api/posts?subreddit=${subreddit}`);

  const result: { data: Array<RedditPost> } = await response.json();

  if (result.data.length === 0) {
    throw new Error('Cant find data for this subreddit');
  }

  return result;
}
