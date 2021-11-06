import { RedditPost } from '@types';
import { getDayAndHour } from '@utils/fns/date';
import { getData } from '@utils/fns/getData';
import { initialState } from '@utils/heatmap-utils';
import * as React from 'react';
import { useLazyQuery } from './useLazyQuery';

interface Props {
  subreddit: string;
}

export function useHeatmap({ subreddit }: Props) {
  const [triggerQuery, props] = useLazyQuery(() => getData(subreddit));

  const [heatMap, setHeatMap] = React.useState<Array<Array<RedditPost[]>>>(initialState);

  const heatmapData = React.useRef<RedditPost[][][] | null>(null);

  heatmapData.current = heatMap;

  React.useEffect(() => {
    const heatmapCopy = [...heatmapData.current];
    if (props.data) {
      props.data?.data?.forEach((post) => {
        const [day, hour] = getDayAndHour(post);

        heatmapCopy[day][hour] = [...heatmapCopy[day][hour], post];
      });

      setHeatMap(heatmapCopy);
    }
  }, [props.data]);

  return { queryProps: { ...props }, triggerQuery, heatMap, setHeatMap };
}
