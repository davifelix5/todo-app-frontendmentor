import React, { useContext } from 'react';

import {Title, RemoveButton, CheckButton} from './styles';
import TaskBlock from '../TaskBlock'

import TaskContext from '../../contexts/TaskContext';

import removeImage from '../../assets/img/icon-cross.svg'

export default function TaskContent({
  task
}) {

  const {toggleTaskCompleted, deleteTask} = useContext(TaskContext);

  function handleCompleteTask() {
    toggleTaskCompleted(task)
  }

  function handleRemoveTask() {
    deleteTask(task)
  }

  return (
    <TaskBlock completed={task.completed}>
      <CheckButton onClick={handleCompleteTask} completed={task.completed} />
      <Title completed={task.completed}>
        <button onClick={handleCompleteTask}>{task.title}</button>
        <RemoveButton onClick={handleRemoveTask}>
          <img src={removeImage} alt="Remove todo"/>
        </RemoveButton>
      </Title>
    </TaskBlock>
  )
}