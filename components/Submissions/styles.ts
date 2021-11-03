import { Button } from '@styled/HomePage.styled';
import { fade } from '@styled/style-utils';
import styled from 'styled-components';

export const Section = styled.section`
  grid-area: submissions;
  animation: ${fade} 0.7s ease;
`;

export const Article = styled.article`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme: { color } }) => color.accent};
  border-radius: 1rem;
`;

export const TitleLinkWrapper = styled.section`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Separator = styled.span`
  color: ${({ theme: { color } }) => color.secondary};
  margin: 0 0.2rem;
`;

export const Title = styled.h2``;

export const Author = styled.p`
  color: ${({ theme: { color } }) => color.secondary};
`;

export const Score = styled.p`
  color: ${({ theme: { color } }) => color.highlight};
`;

export const Date = styled.time`
  color: ${({ theme: { color } }) => color.secondary};
`;

export const HyperLinkButton = styled(Button)`
  min-width: 50px;
  max-height: 50px;
  min-height: 50px;
  padding: 0;
`;
