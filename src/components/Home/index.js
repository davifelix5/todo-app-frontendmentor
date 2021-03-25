import {useContext} from 'react';

import { Wrapper, Instruction } from './styles';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../themes/global'

import usePersistedState from '../../utils/hooks/usePersistedState';

import TaskList from '../TaskList';
import Header from '../Header';

import TaskContext from '../../contexts/TaskContext';

import darkTheme from '../../themes/dark';
import ligthTheme from '../../themes/light';

export default function Home() {
  const { tasks } = useContext(TaskContext);
  const [theme, setTheme] = usePersistedState('theme', darkTheme);
  
  function toggleTheme () {
    setTheme(theme.title === 'light' ? darkTheme : ligthTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
          <GlobalStyle />
          <Header theme={theme} toggleTheme={toggleTheme} />
          <TaskList tasks={tasks} />
          <Instruction>Drag ang drop to organize tasks!</Instruction>
      </Wrapper>
    </ThemeProvider>
  );
}