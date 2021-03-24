import styled from 'styled-components';

import imageDark from '../../assets/img/bg-desktop-dark.jpg'
import imageLigth from '../../assets/img/bg-desktop-light.jpg'

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${( { theme } ) => theme.bgColor} ;
  background: ${( { theme } ) => theme.bgColor} url(${({theme}) => theme.title === 'dark' ? imageDark : imageLigth}) no-repeat;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;