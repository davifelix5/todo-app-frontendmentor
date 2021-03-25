import React, {useState, useContext} from 'react';
import { Input, Form } from './styles';

import TaskContext from '../../contexts/TaskContext';

export default function TaskInput() {
  const { tasks, addTask } = useContext(TaskContext)
  
  const [title, setTitle] = useState('');

  function handleAddNewTask(e) {
    e.preventDefault();
    const task = tasks.find(item => item.title === title);
    if (title && !task) {
      addTask({title, completed: false, visible: true});
    }
    setTitle('')
  }

  return (
    <Form onSubmit={handleAddNewTask}>
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        id="taskInput" 
        type="text"
        placeholder="Create a new todo..."
      />
    </Form>
  )
}