import styled from 'styled-components';

export const Title = styled.div`
  padding: 1rem 1rem 1rem 0;
  cursor: pointer;
  color: ${({completed, theme}) => completed ? theme.fontColorLigth: theme.fontColor};
  text-decoration: ${({completed}) => completed ? 'line-through': 'none'};
  width: 100%;
  & > span:hover {
    color: ${({theme, completed}) => completed ? null: theme.hover}; 
  }
  position: relative;
  &:hover button {
    opacity: 1;
  }
`;

export const RemoveButton = styled.button`
  opacity: 0;
  background: none;
  border: none;
  color: ${({theme}) => theme.fontColor};
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
`;