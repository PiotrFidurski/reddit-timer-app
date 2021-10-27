import { RedditPost } from '@pages/api/posts';
import { getData } from '@utils/getData';
import { getDayAndHour, initialState } from '@utils/heatmap';
import * as React from 'react';
import { useLazyQuery } from './useLazyQuery';

export function useHeatmap() {
  const [subreddit, setSubreddit] = React.useState('javascript');

  const [triggerQuery, props] = useLazyQuery(() => getData(subreddit));

  const [multiDimensionalArray, setMultiDimensionalArray] = React.useState<Array<Array<RedditPost[]>>>(initialState);

  const heatmapData = React.useRef(null);

  heatmapData.current = multiDimensionalArray;

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    setMultiDimensionalArray(initialState());

    return triggerQuery();
  };

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setSubreddit(e.target.value);
  };

  React.useEffect(() => {
    const heatmapCopy = [...heatmapData.current];
    if (props.data) {
      props.data?.data?.forEach((post) => {
        const [day, hour] = getDayAndHour(post);

        heatmapCopy[day][hour] = [...heatmapCopy[day][hour], post];
      });

      setMultiDimensionalArray(heatmapCopy);
    }
  }, [props.data]);

  return {};
}
