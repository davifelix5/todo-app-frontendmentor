import styled from 'styled-components';

import checkImage from '../../assets/img/icon-check.svg';

export const Title = styled.div`
  padding: 1rem 1rem 1rem 0;
  cursor: pointer;
  width: 100%;
  & > button {
    background: none;
    border: none;
    color: ${({completed, theme}) => completed ? theme.fontColorLigth: theme.fontColor};
    text-decoration: ${({completed}) => completed ? 'line-through': 'none'};
  }
  & > button:hover {
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

export const CheckButton = styled.button`
    cursor: pointer;
    background: none;
    border: 1px solid ${({theme}) => theme.fontColorLigth};
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    margin: 0 1rem;
    background: ${({theme, completed}) => completed ? `${theme.selected} url(${checkImage}) no-repeat center` : null};
    &:hover {
      border-color: ${({theme}) => theme.selected}
    }
`;