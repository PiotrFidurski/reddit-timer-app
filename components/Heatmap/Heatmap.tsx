import { RedditPost } from '@pages/api/posts';
import * as React from 'react';
import { colorPallette, days, hours } from 'utils/heatmap';
import { Day, DayWrapper, HeatmapWrapper, Section, Square, Time, TimeWrapper } from './styles';

interface Props {
  data: RedditPost[][][];
}

function HeatmapComponent({ data }: Props) {
  return (
    <Section data-testid="heatmap">
      {data.map((day, dayIndex) => {
        const dayName = days[dayIndex];
        return (
          <HeatmapWrapper key={dayName}>
            {dayIndex === 0 ? (
              <TimeWrapper>
                {hours.map((hour) => (
                  <Time key={hour}>{hour}</Time>
                ))}
              </TimeWrapper>
            ) : null}
            <DayWrapper>
              <Day>{dayName.slice(0, 2)}</Day>
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
          </HeatmapWrapper>
        );
      })}
    </Section>
  );
}

const Heatmap = React.memo(HeatmapComponent);

Heatmap.displayName = 'Heatmap';

export default Heatmap;
