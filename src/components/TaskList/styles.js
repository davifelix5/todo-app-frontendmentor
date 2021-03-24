import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 3rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const List = styled.ul`
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