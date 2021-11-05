import Sort from '@components/Sort/Sort';
import Submission from '@components/Submission/Submission';
import { RedditPost, Sort as SortType, Time } from '@types';
import { compare } from '@utils/fns/compare';
import { AnimateSharedLayout } from 'framer-motion';
import * as React from 'react';
import { Section } from './styles';

interface Props {
  data: RedditPost[][][];
  time: Time;
}

function SubmissionsComponent({ data, time }: Props) {
  const [sort, setSort] = React.useState<SortType>({ type: 'score', order: 'DESC' });

  const submissions = data[time.day][time.hour];

  return (
    <Section aria-label="submissions">
      {submissions.length > 1 ? <Sort onSort={setSort} sort={sort} /> : null}
      <AnimateSharedLayout>
        {submissions
          .sort((postA, postB) => compare({ postA, postB, ...sort }))
          .map((submission) => (
            <Submission submission={submission} key={submission.id} />
          ))}
      </AnimateSharedLayout>
    </Section>
  );
}

const Submissions = React.memo(SubmissionsComponent);

Submissions.displayName = 'Submissions';

export default Submissions;
