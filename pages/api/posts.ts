import { NextApiRequest, NextApiResponse } from 'next';
import { getDateInEpoch } from 'utils/date';

export interface RedditPost {
  created_utc: number;
  id: string;
  author: string;
  title: string;
}

interface PageProps {
  subreddit: string;
  after: string;
  before?: string;
}

async function fetchPosts({ subreddit, after, before }: PageProps) {
  const response = await fetch(
    `${process.env.PUSHSHIFT_URL}?before=${
      before ?? ''
    }&after=${after}&sort_type=score&sort=desc&subreddit=${subreddit}&filter=author,score,id,created_utc,title,subreddit&limit=100`
  );

  const result: { data: Array<RedditPost> } = await response.json();

  return result;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ data: Array<RedditPost> | null }>) {
  try {
    const [sixMonthsAgo, threeMonthsAgo, yearAgo] = getDateInEpoch();

    const { subreddit } = req.query as { subreddit: string };

    const yearOld = fetchPosts({ subreddit, before: sixMonthsAgo, after: yearAgo });
    const sixMonthsOld = fetchPosts({ subreddit, after: sixMonthsAgo, before: threeMonthsAgo });
    const threeMonthsOld = fetchPosts({ subreddit, after: threeMonthsAgo });

    const promise = await Promise.all([yearOld, sixMonthsOld, threeMonthsOld]);

    const data = promise.map((result) => result.data);

    return res.status(200).json({ data: [].concat(...data) });
  } catch (error) {
    return res.status(400).json({ data: null });
  }
}
