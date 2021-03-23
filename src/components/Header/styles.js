import styled from 'styled-components';

import imageDark from '../../assets/img/bg-desktop-dark.jpg'
import imageLigth from '../../assets/img/bg-desktop-light.jpg'

export const HeaderBackground = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  padding: 0 11rem;
  max-height: 20rem;
  height: 20rem;
  background: url(${({theme}) => theme.title === 'dark' ? imageDark : imageLigth}) no-repeat;
`;

export const HeaderArea = styled.header`
  width: 50%;
  height: 80%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

HeaderArea.TitleArea  = styled.div`
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