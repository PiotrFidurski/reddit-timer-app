import { Sort as SortType } from '@types';
import * as React from 'react';
import Comment from '../../public/assets/svg/comment.svg';
import DashedArrow from '../../public/assets/svg/dashedarrow.svg';
import Date from '../../public/assets/svg/date.svg';
import Upvote from '../../public/assets/svg/upvote.svg';
import * as S from './styles';

interface Props {
  onSort: React.Dispatch<React.SetStateAction<SortType>>;
  sort: SortType;
}

function SortComponent({ onSort, sort }: Props) {
  return (
    <S.Nav>
      <S.SortOrderButton
        activeType={sort.type}
        type="button"
        name="sort-order"
        order={sort.order}
        aria-label="sort-order"
        onClick={() => onSort((prevSort) => ({ ...prevSort, order: prevSort.order === 'ASC' ? 'DESC' : 'ASC' }))}
      >
        <DashedArrow />
      </S.SortOrderButton>
      <S.SortButton
        activeType={sort.type}
        type="button"
        name="score"
        aria-label="sort-by-score"
        onClick={() => onSort((prevSort) => ({ ...prevSort, type: 'score' }))}
      >
        <Upvote />
      </S.SortButton>
      <S.SortButton
        activeType={sort.type}
        type="button"
        name="created_utc"
        aria-label="sort-by-date"
        onClick={() => onSort((prevSort) => ({ ...prevSort, type: 'created_utc' }))}
      >
        <Date />
      </S.SortButton>
      <S.SortButton
        activeType={sort.type}
        type="button"
        name="num_comments"
        aria-label="sort-by-comments"
        onClick={() => onSort((prevSort) => ({ ...prevSort, type: 'num_comments' }))}
      >
        <Comment />
      </S.SortButton>
    </S.Nav>
  );
}

const Sort = React.memo(SortComponent);

export default Sort;
