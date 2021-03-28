import React, { useContext, useRef, useEffect, useState } from 'react';

import { useDrag, useDrop } from 'react-dnd';

import {Title, RemoveButton, CheckButton} from './styles';
import TaskBlock from '../TaskBlock'

import TaskContext, { filterMap } from '../../contexts/TaskContext';

import removeImage from '../../assets/img/icon-cross.svg';

export default function TaskContent({
  task,
  index
}) {
  const ref = useRef(null)
  const [canDrag, setCanDrag] = useState(true)
  const ITEM_TYPE = 'task'

  const {
    toggleTaskCompleted,
    deleteTask,
    moveTask,
    filter
  } = useContext(TaskContext);

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      
      if (!canDrag) {
        return
      }

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveTask(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  })

  const [{ isDragging }, drag] = useDrag({
      type: ITEM_TYPE,
      item: () => {
          return { index };
      },
      collect: (monitor) => ({
          isDragging: monitor.isDragging(),
      }),
  })

  function handleCompleteTask() {
    toggleTaskCompleted(task)
  }

  function handleRemoveTask() {
    deleteTask(task)
  }

  useEffect(() => {
    if (filter == filterMap.ALL) {
      setCanDrag(true)
    } else {
      setCanDrag(false)
    }
  }, [filter, setCanDrag])

  drag(drop(ref));

  return (
    <div isDraggingDisabled={!canDrag} ref={ref}>
      <TaskBlock
        className="task-block"
        dragging={canDrag && isDragging}
        index={index}
        completed={task.completed}
      >
        <CheckButton onClick={handleCompleteTask} completed={task.completed} />
        <Title completed={task.completed}>
          <button onClick={handleCompleteTask}>{task.title}</button>
          <RemoveButton onClick={handleRemoveTask}>
            <img src={removeImage} alt="Remove todo"/>
          </RemoveButton>
        </Title>
      </TaskBlock>
    </div>
  )
}