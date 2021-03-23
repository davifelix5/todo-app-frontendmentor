import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  padding: 0 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -70px;
`;

export const List = styled.ul`
  width: 50%;
  li + li {
    border-top: 1px solid ${({theme}) => theme.fontColorLigth}; 
  }
  li > div {
    border-radius: unset;
  }
  li:first-child > div {
    border-radius: 4px 4px 0 0;
  }

`;