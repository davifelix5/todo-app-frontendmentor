import React from 'react';
import { HeaderArea } from './styles';
import {CheckButton} from '../TaskContent/styles';

import TaskForm from '../TaskForm';
import TaskBlock from '../TaskBlock';
import Switch from '../Switch';

export default function Header({theme, toggleTheme}) {
  return (
      <HeaderArea>
        <HeaderArea.TitleArea>
          <h1>TODO</h1>
          <Switch theme={theme} toggleTheme={toggleTheme}/>
        </HeaderArea.TitleArea>
        <TaskBlock checkActive={false}>
          <CheckButton disabled={true} completed={false} />
          <TaskForm />
        </TaskBlock>
      </HeaderArea>
  )
}