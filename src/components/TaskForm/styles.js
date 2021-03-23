import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  font-size: 1.2rem;
`

export const Input = styled.input`
  color: ${({theme}) => theme.fontColorLigth};
  padding: 1rem 1rem 1rem 0;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
`;