import { RedditPost, Time } from '@types';
import { format } from 'date-fns';
import * as React from 'react';
import OpenInNewTab from '../../public/assets/svg/link.svg';
import * as S from './styles';

interface Props {
  data: RedditPost[][][];
  time: Time;
}

function Submissions({ data, time }: Props) {
  return (
    <S.Section>
      {data[time.day][time.hour]
        .sort((a, b) => b.score - a.score)
        .map(({ id, title, author, score, created_utc, full_link, num_comments }) => (
          <S.Article key={id}>
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
              {format(new Date(created_utc * 1000), 'M/dd/yyyy')}
              <S.Separator>·</S.Separator>
              {format(new Date(created_utc * 1000), 'p')}
            </S.Date>
          </S.Article>
        ))}
    </S.Section>
  );
}

export default Submissions;
