import React, { useContext } from 'react';
import {Container} from './styles';

import TaskContext from '../../../../contexts/TaskContext';

import Filter from '../Filter';

export default function BottomContainer() {
  const { 
    getUncompletedTasks,
    clearCompletedTasks,
  } = useContext(TaskContext);

  return (
    <Container>
      <span>{getUncompletedTasks()} items left</span>
      <Filter />
      <button onClick={clearCompletedTasks}>Clean completed</button>
    </Container>
  )
}