import React, { useContext, useRef } from 'react';

import { useDrag, useDrop } from 'react-dnd';

import {Title, RemoveButton, CheckButton} from './styles';
import TaskBlock from '../TaskBlock'

import TaskContext from '../../contexts/TaskContext';

import removeImage from '../../assets/img/icon-cross.svg'

export default function TaskContent({
  task,
  index
}) {
  const ref = useRef(null)

  const {
    toggleTaskCompleted,
    deleteTask,
    moveTask
  } = useContext(TaskContext);

  const [{ handlerId }, drop] = useDrop({
    accept: 'task',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = task.index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveTask(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
});
  const [{ isDragging }, drag] = useDrag({
      type: 'task',
      item: () => {
          return { id: task.order, index };
      },
      collect: (monitor) => ({
          isDragging: monitor.isDragging(),
      }),
  });

  function handleCompleteTask() {
    toggleTaskCompleted(task)
  }

  function handleRemoveTask() {
    deleteTask(task)
  }

  drag(drop(ref));

  return (
    <TaskBlock
      dragging={isDragging}
      id={task.order}
      index={index}
      ref={ref}
      data-handler-id={handlerId} 
      completed={task.completed} 
      title={task.title}
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