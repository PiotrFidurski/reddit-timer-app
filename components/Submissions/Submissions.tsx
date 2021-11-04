import Sort from '@components/Sort/Sort';
import { RedditPost, Sort as SortType, Time } from '@types';
import { compare } from '@utils/heatmap';
import { format, formatDistanceToNow } from 'date-fns';
import { motion } from 'framer-motion';
import * as React from 'react';
import OpenInNewTab from '../../public/assets/svg/link.svg';
import * as S from './styles';

interface Props {
  data: RedditPost[][][];
  time: Time;
}

function SubmissionsComponent({ data, time }: Props) {
  const [sort, setSort] = React.useState<SortType>({ type: 'score', order: 'DESC' });

  const timeOfDay = data[time.day][time.hour];

  return (
    <S.Section aria-label="submissions">
      {timeOfDay.length > 1 ? <Sort onSort={setSort} sort={sort} /> : null}
      {timeOfDay
        .sort((a, b) => compare({ a, b, ...sort }))
        .map(({ id, title, full_link, created_utc, author, score, num_comments }) => (
          <S.Article key={id} as={motion.article} layout>
            <S.TitleLinkWrapper>
              <S.Title>{title}</S.Title>
              <a tabIndex={-1} href={full_link} aria-label="submission-link" target="_blank" rel="noreferrer">
                <S.HyperLinkButton type="button">
                  <OpenInNewTab />
                </S.HyperLinkButton>
              </a>
            </S.TitleLinkWrapper>
            <S.Author>posted by {author}</S.Author>
            <S.Score>
              {score} <S.Separator>upvotes</S.Separator> <S.Separator>·</S.Separator> {num_comments}{' '}
              <S.Separator>comments</S.Separator>
            </S.Score>
            <S.Date>
              {formatDistanceToNow(new Date(created_utc * 1000))} ago
              <S.Separator>·</S.Separator>
              {format(new Date(created_utc * 1000), 'p')}
            </S.Date>
          </S.Article>
        ))}
    </S.Section>
  );
}

const Submissions = React.memo(SubmissionsComponent);

Submissions.displayName = 'Submissions';

export default Submissions;
