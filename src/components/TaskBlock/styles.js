import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.bgLight};
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &::before {
    content: '';
    border: 1px solid ${({theme}) => theme.fontColorLigth};
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    margin: 0 1rem;
  }
`;