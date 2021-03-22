import {ThemeProvider} from 'styled-components';

import Home from './components/Home';

import darkTheme from './themes/dark';

import './global.css'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
