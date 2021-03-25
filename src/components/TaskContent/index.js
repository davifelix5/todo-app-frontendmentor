import React, { useContext } from 'react';

import {Title, RemoveButton, CheckButton} from './styles';
import TaskBlock from '../TaskBlock'

import TaskContext from '../../contexts/TaskContext';

import removeImage from '../../assets/img/icon-cross.svg'

export default function TaskContent({
  task
}) {

  const {
    toggleTaskCompleted,
    deleteTask,
    moveTask,
    dragging,
    resetDragging,
    startDragging
  } = useContext(TaskContext);

  function handleDragStart(title) {
    startDragging(title);
  }

  const handleDragEnter = (e, destiny) => {
    e.preventDefault();
    if (destiny && dragging && destiny !== dragging) {
      moveTask(destiny, dragging);
    }
  }

  function handleEndDrag() {
    resetDragging();
  }

  function handleCompleteTask() {
    toggleTaskCompleted(task)
  }

  function handleRemoveTask() {
    deleteTask(task)
  }

  return (
    <TaskBlock dragging={dragging === task.title} completed={task.completed} title={task.title}
      draggable={true}
      onDragStart={() => handleDragStart(task.title)}
      onDragOver={e => handleDragEnter(e, e.target.getAttribute('title'))}
      onDragEnd={handleEndDrag}
    >
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