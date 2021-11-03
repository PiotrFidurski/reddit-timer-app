export interface Time {
  day: number;
  hour: number;
}

export interface RedditPost {
  created_utc: number;
  id: string;
  author: string;
  title: string;
  score: number;
  full_link: string;
  num_comments: number;
}

export interface PageProps {
  subreddit: string;
  after: string;
  before?: string;
}
