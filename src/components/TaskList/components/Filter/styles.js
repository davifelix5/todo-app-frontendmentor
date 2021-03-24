import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 0.6;
  justify-content: space-between;
  padding: 0 1rem;
 
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