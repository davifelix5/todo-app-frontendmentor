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

export const BottomContainer = styled.div`
  width: 50%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({theme}) => theme.bgLight};
  border-top: 1px solid ${({theme}) => theme.fontColorLigth}; 
  border-radius: 0 0 4px 4px;

  button:hover {
    color: ${({theme}) => theme.hover};
  }

  span {
    color: ${({theme}) => theme.fontColorLigth};
  }
  
  div {
    display: flex;
    flex: 0.6;
    justify-content: space-between;
    padding: 0 1rem;
  }

  button {
    border: none;
    background: none;
    color: ${({theme}) => theme.fontColorLigth};
  }

  button.selected {
    color: ${({theme}) => theme.selected};
  }

`;