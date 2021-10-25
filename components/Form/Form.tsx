import { Button } from '@styled/HomePage.styled';
import * as React from 'react';
import { Form as StyledForm, Input, Label } from './styles';

interface Props {
  subreddit: string;
  onChange: (e: React.BaseSyntheticEvent) => void;
  onSubmit: (e: React.BaseSyntheticEvent) => void;
  isSubmitting: boolean;
}

function Form({ onChange, subreddit, onSubmit, isSubmitting }: Props) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <Label hidden htmlFor="subreddit">
        Subreddit
      </Label>
      <Input
        placeholder="Search for any subreddit"
        type="text"
        id="subreddit"
        name="subreddit"
        aria-label="subreddit"
        value={subreddit}
        onChange={onChange}
      />
      <Button type="submit" disabled={isSubmitting || !subreddit.length}>
        Search
      </Button>
    </StyledForm>
  );
}

export default Form;
