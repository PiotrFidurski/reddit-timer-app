import { RedditPost } from '@pages/api/posts';
import { getData } from '@utils/getData';
import { getDayAndHour, initialState } from '@utils/heatmap';
import * as React from 'react';
import { useLazyQuery } from './useLazyQuery';

interface Props {
  subreddit: string;
}

export function useHeatmap({ subreddit }: Props) {
  const [triggerQuery, props] = useLazyQuery(() => getData(subreddit));

  const [multiDimensionalArray, setMultiDimensionalArray] = React.useState<Array<Array<RedditPost[]>>>(initialState);

  const heatmapData = React.useRef(null);

  heatmapData.current = multiDimensionalArray;

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

  return { queryProps: { ...props }, triggerQuery, multiDimensionalArray, setMultiDimensionalArray };
}