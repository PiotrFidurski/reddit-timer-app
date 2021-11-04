import { RedditPost, Time } from '@types';
import * as React from 'react';
import { colorPallette, days, hours } from 'utils/heatmap';
import * as S from './styles';

interface Props {
  data: RedditPost[][][];
  onClick: React.Dispatch<React.SetStateAction<Time>>;
  time: Time;
}

function HeatmapComponent({ data, onClick, time }: Props) {
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
            <S.DayWrapper>
              <S.Day>{dayName.slice(0, 2)}</S.Day>
              {day.map((square, squareIndex) => {
                const squareKey = `${squareIndex}_day-${days[dayIndex]}`;
                const bg = colorPallette[square.length] ?? '#001056';
                const isActive = time.day === dayIndex && time.hour === squareIndex;

                return (
                  <S.Square
                    isActive={isActive}
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
