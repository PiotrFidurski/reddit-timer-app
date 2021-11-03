import { RedditPost } from '@pages/api/posts';
import { Time } from '@types';
import * as React from 'react';

interface Props {
  data: RedditPost[][][];
  time: Time;
}

function Posts({ data, time }: Props) {
  return (
    <div style={{ gridArea: 'posts' }}>
      {data[time.day][time.hour].map((post) => (
        <div style={{ border: '1px solid grey' }} key={post.id}>
          {post.title}
        </div>
      ))}
    </div>
  );
}

export default Posts;
