import React from 'react';

import {Title, RemoveButton} from './styles';
import TaskBlock from '../TaskBlock'

import removeImage from '../../assets/img/icon-cross.svg'

export default function TaskContent({
  task
}) {
  return (
    <TaskBlock completed={task.completed}>
      <Title completed={task.completed}>
        <span>{task.title}</span>
        <RemoveButton>
          <img src={removeImage} alt="Remove todo"/>
        </RemoveButton>
      </Title>
    </TaskBlock>
  )
}