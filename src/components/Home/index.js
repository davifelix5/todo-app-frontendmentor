import {useContext} from 'react';

import { Wrapper } from './styles';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../themes/global'

import usePersistedState from '../../utils/hooks/usePersistedState';

import TaskList from '../TaskList';
import Header from '../Header';

import TaskContext from '../../contexts/TaskContext';

import darkTheme from '../../themes/dark';
import ligthTheme from '../../themes/ligth';

export default function Home() {
  const { tasks } = useContext(TaskContext);
  const [theme, setTheme] = usePersistedState('theme', darkTheme);
  
  function toggleTheme () {
    setTheme(theme.title === 'ligth' ? darkTheme : ligthTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
          <GlobalStyle />
          <Header theme={theme} toggleTheme={toggleTheme} />
          <TaskList tasks={tasks} />
      </Wrapper>
    </ThemeProvider>
  );
}