import { RedditPost } from '@pages/api/posts';
import * as React from 'react';
import { colorPallette, days } from 'utils/heatmap';
import { Day, DayWrapper, Section, Square } from './styles';

interface Props {
  data: RedditPost[][][];
}

function HeatmapComponent({ data }: Props) {
  return (
    <Section data-testid="heatmap">
      {data.map((day, dayIndex) => {
        const dayName = days[dayIndex];
        return (
          <DayWrapper key={dayName}>
            <Day>{dayName}</Day>
            {day.map((square, squareIndex) => {
              const squareKey = `${squareIndex}_day-${days[dayIndex]}`;
              const bg = colorPallette[square.length] ?? '#001056';
              return (
                <Square data-testid={squareKey} bg={bg} key={squareKey}>
                  {square.length}
                </Square>
              );
            })}
          </DayWrapper>
        );
      })}
    </Section>
  );
}

const Heatmap = React.memo(HeatmapComponent);

Heatmap.displayName = 'Heatmap';

export default Heatmap;
