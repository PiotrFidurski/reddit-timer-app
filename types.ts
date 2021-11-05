export interface Time {
  day: number;
  hour: number;
}

export interface CompareProps {
  postA: RedditPost;
  postB: RedditPost;
  type: SortType;
  order: OrderType;
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

export type SortType = 'score' | 'created_utc' | 'num_comments';

export type OrderType = 'ASC' | 'DESC';

export interface Sort {
  type: SortType;
  order: OrderType;
}

export interface InitialQueryState<T> {
  shouldRun: boolean;
  status: 'idle' | 'error' | 'success' | 'loading';
  data: T;
  errorMessage: string;
  inFlight: boolean;
}

export type LazyQueryProps<T> = [
  () => void,
  {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    isIdle: boolean;
    status: 'idle' | 'error' | 'success' | 'loading';
    data: T;
    inFlight: boolean;
    errorMessage: string;
  }
];
