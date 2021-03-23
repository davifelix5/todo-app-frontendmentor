import React, { createContext, useState } from 'react';

import usePersistedState from '../utils/hooks/usePersistedState';

import placeholderTasks from '../tasks.json';

const TaskContext = createContext({});

export const filterMap = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
}

export function TaskContextProvider({children}) {

  const [tasks, setTasks] = usePersistedState('tasks', placeholderTasks);
  const [filter, setFilter] = useState(filterMap.ALL);

  const filterFunctions = {
    [filterMap.ALL]: item => ({...item, visible: true}),
    [filterMap.ACTIVE]: item => ({...item, visible: !item.completed}),
    [filterMap.COMPLETED]: item => ({...item, visible: item.completed}),
  }

  function changeFilter(filter) {
    setFilter(filter);
    setTasks(tasks.map(filterFunctions[filter]));
  }

  function addTask(task) {
    setTasks([...tasks, task])
  }

  function deleteTask(task) {
    setTasks(tasks.filter(item => item.title !== task.title))
  }

  function toggleTaskCompleted(task) {
    updateTask({...task, completed: !task.completed})
  }

  function clearCompletedTasks() {
    setTasks(tasks.filter(task => !task.completed))
  }

  function updateTask(task) {
    const newTasks = tasks.map(item => item.title === task.title ? task : item)
    setTasks(newTasks)
  }

  function getUncompletedTasks() {
    return tasks.filter(item => !item.completed).length
  }
  
  return (
    <TaskContext.Provider value={{
      filter,
      changeFilter,
      tasks,
      addTask,
      deleteTask,
      toggleTaskCompleted,
      clearCompletedTasks,
      updateTask,
      getUncompletedTasks
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;