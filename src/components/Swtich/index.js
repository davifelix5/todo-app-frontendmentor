import React from 'react';
import { SwitchButton } from './styles';

import toggleDark from '../../assets/img/icon-moon.svg'
import toggleLight from '../../assets/img/icon-sun.svg'

export default function Switch({theme, toggleTheme}) {
  return (
    <SwitchButton 
      onClick={toggleTheme}
    >
      <img src={theme.title === 'dark' ? toggleLight: toggleDark} alt="Mudar tema"/>
    </SwitchButton>
  );
}