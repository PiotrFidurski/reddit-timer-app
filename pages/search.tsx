import * as React from 'react';

function SearchPage() {
  const [subreddit, setSubreddit] = React.useState('javascript');
  return (
    <div>
      <label htmlFor="subreddit">
        Subreddit
        <input
          type="text"
          id="subreddit"
          name="subreddit"
          aria-label="subreddit"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
        />
      </label>
    </div>
  );
}

export default SearchPage;
