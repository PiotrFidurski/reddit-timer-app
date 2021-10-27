import Footer from '@components/Footer/Footer';
import Form from '@components/Form/Form';
import Heatmap from '@components/Heatmap/Heatmap';
import { GoBackButton, H2, Header, Heading, Main, Nav } from '@styled/SearchPage.styled';
import { useHeatmap } from '@utils/customHooks/useHeatmap';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { initialState } from 'utils/heatmap';
import Arrow from '../public/assets/svg/arrow.svg';

function SearchPage() {
  const router = useRouter();

  const [subreddit, setSubreddit] = React.useState('javascript');

  const {
    queryProps: { isError, inFlight, isSuccess, errorMessage, isLoading },
    triggerQuery,
    setMultiDimensionalArray,
    multiDimensionalArray,
  } = useHeatmap({ subreddit });

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    setMultiDimensionalArray(initialState());

    return triggerQuery();
  };

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setSubreddit(e.target.value);
  };

  return (
    <Main>
      <Head>
        <title>Search for any subreddit!</title>
        <meta name="description" content="Search for desired subreddit and see what's the best time to post" />
      </Head>
      <Header>
        <Nav>
          <GoBackButton aria-label="back" type="button" onClick={() => router.back()}>
            <Arrow />
          </GoBackButton>
        </Nav>
      </Header>
      <Form isSubmitting={inFlight} subreddit={subreddit} onChange={handleChange} onSubmit={handleSubmit} />
      {isLoading ? <span>loading...</span> : null}
      {isError ? (
        <Heading>
          <H2>{errorMessage}</H2>
        </Heading>
      ) : null}
      {isSuccess ? (
        <Heading>
          <H2>r/{subreddit}</H2>
        </Heading>
      ) : null}
      {isSuccess ? <Heatmap data={multiDimensionalArray} /> : null}
      <Footer />
    </Main>
  );
}

export default SearchPage;
