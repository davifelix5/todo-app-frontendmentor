import React from 'react';
import { HeaderArea, HeaderBackground } from './styles';

import TaskForm from '../TaskForm';
import TaskBlock from '../TaskBlock';
import Switch from '../Swtich';

export default function Header({theme, toggleTheme}) {
  return (
    <HeaderBackground>
      <HeaderArea>
        <HeaderArea.TitleArea>
          <h1>TODO</h1>
          <Switch theme={theme} toggleTheme={toggleTheme}/>
        </HeaderArea.TitleArea>
        <TaskBlock>
          <TaskForm />
        </TaskBlock>
      </HeaderArea>
    </HeaderBackground>
  )
}