import Footer from '@components/Footer/Footer';
import Form from '@components/Form/Form';
import Heatmap from '@components/Heatmap/Heatmap';
import * as S from '@styled/SearchPage.styled';
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
    setheatMap,
    heatMap,
  } = useHeatmap({ subreddit });

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    setheatMap(initialState());

    return triggerQuery();
  };

  React.useEffect(() => {
    triggerQuery();
  }, [triggerQuery]);

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setSubreddit(e.target.value);
  };

  return (
    <S.Main>
      <Head>
        <title>Search for any subreddit!</title>
        <meta name="description" content="Search for desired subreddit and see what's the best time to post" />
      </Head>
      <S.Header>
        <S.Nav>
          <S.GoBackButton aria-label="back" type="button" onClick={() => router.back()}>
            <Arrow />
          </S.GoBackButton>
        </S.Nav>
      </S.Header>
      <Form isSubmitting={inFlight} subreddit={subreddit} onChange={handleChange} onSubmit={handleSubmit} />
      {isLoading ? (
        <S.SpinnerWrapper>
          <S.Spinner />
        </S.SpinnerWrapper>
      ) : null}
      {isError ? (
        <S.Heading>
          <S.H2>{errorMessage}</S.H2>
        </S.Heading>
      ) : null}
      {isSuccess ? (
        <S.Heading>
          <S.H2>r/{subreddit}</S.H2>
        </S.Heading>
      ) : (
        <S.Heading>
          <S.H2>r/</S.H2>
        </S.Heading>
      )}
      {isSuccess ? <Heatmap data={heatMap} /> : null}
      <Footer />
    </S.Main>
  );
}

export default SearchPage;
