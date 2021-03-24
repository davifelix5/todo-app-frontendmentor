import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.bgLight};
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  font-size: 1.2rem;
`;