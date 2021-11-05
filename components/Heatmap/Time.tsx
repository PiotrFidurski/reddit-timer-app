import { hours } from '@utils/heatmap-utils';
import * as React from 'react';
import * as S from './styles';

const Time = () => (
  <S.TimeWrapper>
    {hours.map((hour) => (
      <S.Time key={hour}>{hour}</S.Time>
    ))}
  </S.TimeWrapper>
);

export default Time;
