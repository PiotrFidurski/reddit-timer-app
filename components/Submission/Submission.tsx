import { RedditPost } from '@types';
import { format, formatDistanceToNow } from 'date-fns';
import { motion } from 'framer-motion';
import * as React from 'react';
import OpenInNewTab from '../../public/assets/svg/link.svg';
import * as S from './styles';

interface Props {
  submission: RedditPost;
}

function Submission({ submission }: Props) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { title, author, full_link, score, num_comments, created_utc } = submission;
  return (
    <S.Article as={motion.article} layout="position">
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
  );
}

export default Submission;
