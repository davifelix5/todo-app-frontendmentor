import React from 'react';
import { Container, List, } from './styles'

import TaskContent from '../TaskContent';
import BottomContainer from './components/BottomContainer'

export default function TaskList({
  tasks
}) {
  return (
    <Container>
      <List>
      {tasks.map(task => {
        return task.visible ? (
          <li>
            <TaskContent task={task} />
          </li>
        ) : null
      })} 
      </List>
      <BottomContainer />
    </Container>
  )
}