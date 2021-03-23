import React from 'react';

import {Title} from './styles';
import TaskBlock from '../TaskBlock'

export default function TaskContent({
  task
}) {
  return (
    <TaskBlock completed={task.completed}>
      <Title completed={task.completed}>
        <p>{task.title}</p>
      </Title>
    </TaskBlock>
  )
}