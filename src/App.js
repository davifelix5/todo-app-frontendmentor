import Home from './components/Home';

import {TaskContextProvider} from './contexts/TaskContext';

function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export default App;
