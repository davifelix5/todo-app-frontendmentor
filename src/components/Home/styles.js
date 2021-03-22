import styled from 'styled-components';

import image from '../../assets/img/bg-desktop-dark.jpg'

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${( { theme } ) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
`;

export const HeaderBackground = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  background: url(${image}) no-repeat;
  padding: 0 11rem;
  max-height: 20rem;
  height: 20rem;
`;

export const Header = styled.header`
  width: 50%;
  height: 80%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

Header.TitleArea  = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h1 {
    font-weight: 700;
    font-size: 2.3rem;
    letter-spacing: 0.8rem;
    text-transform: uppercase;
  }
`;
