import { RedditPost, Time as TimeType } from '@types';
import { colorPallette, days } from '@utils/heatmap-utils';
import * as React from 'react';
import * as S from './styles';
import Time from './Time';

interface Props {
  data: RedditPost[][][];
  onClick: React.Dispatch<React.SetStateAction<TimeType>>;
  time: TimeType;
}

function HeatmapComponent({ data, onClick, time }: Props) {
  return (
    <S.Section data-testid="heatmap">
      {data.map((day, dayIndex) => {
        const dayName = days[dayIndex];
        return (
          <S.HeatmapWrapper key={dayName}>
            {dayIndex === 0 ? <Time /> : null}
            <S.DayWrapper>
              <S.Day>{dayName.slice(0, 2)}</S.Day>
              {day.map((square, squareIndex) => {
                const squareKey = `${squareIndex}_day-${days[dayIndex]}`;
                const bg = colorPallette[square.length] ?? '#001056';
                const isActive = time.day === dayIndex && time.hour === squareIndex;

                return (
                  <S.Square
                    isActive={isActive}
                    onClick={() => onClick({ day: dayIndex, hour: squareIndex })}
                    data-testid={squareKey}
                    bg={bg}
                    key={squareKey}
                  >
                    {square.length}
                  </S.Square>
                );
              })}
            </S.DayWrapper>
          </S.HeatmapWrapper>
        );
      })}
    </S.Section>
  );
}

const Heatmap = React.memo(HeatmapComponent);

Heatmap.displayName = 'Heatmap';

export default Heatmap;
