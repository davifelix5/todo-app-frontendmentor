import { Wrapper } from './styles';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../themes/global'

import usePersistedState from '../../utils/hooks/usePersistedState';

import TaskList from '../TaskList';
import Header from '../Header';

import darkTheme from '../../themes/dark';
import ligthTheme from '../../themes/ligth';

export default function Home() {
  const [theme, setTheme] = usePersistedState('theme', darkTheme);
  
  const tasks = [{title: 'Teste1', completed: true}, {title: 'Teste2'}, {title: 'Teste3'}]

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