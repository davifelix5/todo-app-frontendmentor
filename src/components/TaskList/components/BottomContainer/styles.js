import styled from 'styled-components';

export const Container = styled.div`
  height: 3rem;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({theme}) => theme.bgLight};
  border-top: 1px solid ${({theme}) => theme.fontColorLigth}; 
  border-radius: 0 0 4px 4px;

  button:hover {
    color: ${({theme}) => theme.hover};
  }

  @media (max-width: 560px) {
   div {
     display: none;
   }
  } 

  span {
    color: ${({theme}) => theme.fontColorLigth};
    font-size: 1rem;
  }

  button {
    font-size: 1rem;
    border: none;
    background: none;
    color: ${({theme}) => theme.fontColorLigth};
    color: ${({theme}) => theme.fontColorLigth};
    &.selected {
      color: ${({theme}) => theme.selected};
    }
    &:hover {
      color: ${({theme}) => theme.hover};
    }
  }

`;