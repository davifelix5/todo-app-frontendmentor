import styled from 'styled-components';

export const Title = styled.div`
  padding: 1rem 1rem 1rem 0;
  cursor: pointer;
  color: ${({completed, theme}) => completed ? theme.fontColorLigth: theme.fontColor};
  text-decoration: ${({completed}) => completed ? 'line-through': 'none'};
  width: 100%;
  & > p:hover {
    color: ${({theme, completed}) => completed ? null: theme.hover}; 
  }
`;