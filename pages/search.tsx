import Form from '@components/Form/Form';
import Heatmap from '@components/Heatmap/Heatmap';
import { H2, Heading, Section } from '@styled/SearchPage.styled';
import Head from 'next/head';
import * as React from 'react';
import { useLazyQuery } from 'utils/customHooks/useLazyQuery';
import { getData } from 'utils/getData';
import { getDayAndHour, initialState } from 'utils/heatmap';
import { RedditPost } from './api/posts';

function SearchPage() {
  const [subreddit, setSubreddit] = React.useState('javascript');

  const [triggerQuery, { data: posts, isLoading, isSuccess, isError, inFlight }] = useLazyQuery(() =>
    getData(subreddit)
  );

  const [multiDimensionalHeatmap, setMultiDimensionalHeatmap] =
    React.useState<Array<Array<RedditPost[]>>>(initialState);

  const heatmapData = React.useRef(null);

  heatmapData.current = multiDimensionalHeatmap;

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    setMultiDimensionalHeatmap(initialState());

    return triggerQuery();
  };

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setSubreddit(e.target.value);
  };

  React.useEffect(() => {
    const heatmapCopy = [...heatmapData.current];
    if (posts) {
      posts?.data?.forEach((post) => {
        const [day, hour] = getDayAndHour(post);

        heatmapCopy[day][hour] = [...heatmapCopy[day][hour], post];
      });

      setMultiDimensionalHeatmap(heatmapCopy);
    }
  }, [posts]);

  return (
    <Section>
      <Head>
        <title>Search for any subreddit!</title>
        <meta name="description" content="Search for desired subreddit and see what's the best time to post" />
      </Head>
      <Form isSubmitting={inFlight} subreddit={subreddit} onChange={handleChange} onSubmit={handleSubmit} />
      {isLoading ? <span>loading...</span> : null}
      {isError ? (
        <Heading>
          <H2>Cant find data for this subreddit</H2>
        </Heading>
      ) : null}
      {isSuccess ? (
        <Heading>
          <H2>r/{subreddit}</H2>
        </Heading>
      ) : null}
      {isSuccess ? <Heatmap data={multiDimensionalHeatmap} /> : null}
    </Section>
  );
}

export default SearchPage;
