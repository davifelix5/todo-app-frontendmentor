import React from 'react';

import { Container, List, BottomContainer } from './styles'
import TaskContent from '../TaskContent';

export default function TaskList({
  tasks
}) {
  return (
    <Container>
      <List>
      {tasks.map(task => {
        return (
          <li>
            <TaskContent task={task} />
          </li>
        )
      })} 
      </List>
      <BottomContainer>
        <span>5 items left</span>
        <div>
          <button className="selected">All</button>
          <button>Active</button>
          <button>Compelted</button>
        </div>
        <button>Clean completed</button>
      </BottomContainer>
    </Container>
  )
}