import Home from './components/Home';

import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend'

import {TaskContextProvider} from './contexts/TaskContext';

function App() {
  return (
    <TaskContextProvider>
      <DndProvider backend={TouchBackend} options={{enableMouseEvents: true}}>
        <Home />
      </DndProvider>
    </TaskContextProvider>
  );
}

export default App;
