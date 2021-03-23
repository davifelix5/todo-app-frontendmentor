import styled from 'styled-components';

import checkImage from '../../assets/img/icon-check.svg';

export const Container = styled.div`
  background-color: ${({theme}) => theme.bgLight};
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.2rem;
`;

export const CheckButton = styled.div`
    cursor: pointer;
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