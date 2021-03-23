import styled from 'styled-components';

export const Container = styled.div`
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