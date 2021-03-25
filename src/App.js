import Home from './components/Home';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

import {TaskContextProvider} from './contexts/TaskContext';

function App() {
  return (
    <TaskContextProvider>
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    </TaskContextProvider>
  );
}

export default App;
