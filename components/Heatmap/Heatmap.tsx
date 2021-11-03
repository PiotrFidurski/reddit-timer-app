import { RedditPost } from '@pages/api/posts';
import { Time } from '@types';
import * as React from 'react';
import { colorPallette, days, hours } from 'utils/heatmap';
import * as S from './styles';

interface Props {
  data: RedditPost[][][];
  onClick: React.Dispatch<React.SetStateAction<Time>>;
}

function HeatmapComponent({ data, onClick }: Props) {
  const handleClick = ({ day, hour }: Time) => {
    onClick({ day, hour });
  };
  return (
    <S.Section data-testid="heatmap">
      {data.map((day, dayIndex) => {
        const dayName = days[dayIndex];
        return (
          <S.HeatmapWrapper key={dayName}>
            {dayIndex === 0 ? (
              <S.TimeWrapper>
                {hours.map((hour) => (
                  <S.Time key={hour}>{hour}</S.Time>
                ))}
              </S.TimeWrapper>
            ) : null}
            <S.DayWrapper tabIndex={0}>
              <S.Day>{dayName.slice(0, 2)}</S.Day>
              {day.map((square, squareIndex) => {
                const squareKey = `${squareIndex}_day-${days[dayIndex]}`;
                const bg = colorPallette[square.length] ?? '#001056';
                return (
                  <S.Square
                    onClick={() => handleClick({ day: dayIndex, hour: squareIndex })}
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
