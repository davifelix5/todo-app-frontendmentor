import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 3rem;
  width: 555px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 2rem;
  @media (max-width: 560px) {
    width: 95%;
  } 
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

export const ResponsiveBottomContainer = styled.div`
  display: none;
  @media (max-width: 560px) {
    display: flex;
  } 
  padding: 1rem;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.bgLight};
  border-radius: 4px;
  div {
    flex: 1;
  }
`;