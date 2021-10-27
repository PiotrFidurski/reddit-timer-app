import styled from 'styled-components';

export const Form = styled.form`
  max-width: 450px;
  grid-area: form;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 0.7rem;
  border-radius: 9999px;
  background: transparent;
  color: ${(props) => props.theme.color.default};
  border: 2px solid #41434d;
  &:focus {
    transition: border-color 0.25s ease;
    border-color: ${(props) => props.theme.color.highlight};
  }
`;
