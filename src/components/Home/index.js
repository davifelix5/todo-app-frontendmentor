import { Wrapper, Header, HeaderBackground } from './styles';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../themes/global'

import usePersistedState from '../../utils/hooks/usePersistedState';

import TaskForm from '../TaskForm';
import TaskBlock from '../TaskBlock';
import Switch from '../Swtich';

import darkTheme from '../../themes/dark';
import ligthTheme from '../../themes/ligth';

export default function Home() {
  const [theme, setTheme] = usePersistedState('theme', darkTheme);
  
  function toggleTheme () {
    setTheme(theme.title === 'ligth' ? darkTheme : ligthTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <HeaderBackground>
          <Header>
            <Header.TitleArea>
              <h1>TODO</h1>
              <Switch theme={theme} toggleTheme={toggleTheme}/>
            </Header.TitleArea>
            <TaskBlock>
              <TaskForm />
            </TaskBlock>
          </Header>
        </HeaderBackground>
      </Wrapper>
    </ThemeProvider>
  );
}