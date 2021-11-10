import { PageProps, RedditPost } from '@types';
import { getUnixTimestamps } from '@utils/fns/date';
import { NextApiRequest, NextApiResponse } from 'next';

async function fetchPosts({ subreddit, after, before }: PageProps) {
  const response = await fetch(
    `${process.env.PUSHSHIFT_URL}?before=${
      before ?? ''
    }&after=${after}&sort_type=score&sort=desc&subreddit=${subreddit}&filter=author,full_link,num_comments,score,id,created_utc,title,subreddit&limit=100`
  );

  const result: { data: Array<RedditPost> } = await response.json();

  return result;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ data: Array<RedditPost> | null }>) {
  try {
    const [dateThreeMonthsAgo, dateSixMonthsAgo, dateYearAgo] = getUnixTimestamps();

    const { subreddit } = req.query as { subreddit: string };

    const yearOld = fetchPosts({ subreddit, before: dateSixMonthsAgo, after: dateYearAgo });
    const sixMonthsOld = fetchPosts({ subreddit, after: dateSixMonthsAgo, before: dateThreeMonthsAgo });
    const threeMonthsOld = fetchPosts({ subreddit, after: dateThreeMonthsAgo });

    const promise = await Promise.all([yearOld, sixMonthsOld, threeMonthsOld]);

    const data = promise.map((result) => result.data);

    return res.status(200).json({ data: [].concat(...data) });
  } catch (error) {
    return res.status(400).json({ data: null });
  }
}
