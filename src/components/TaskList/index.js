import React from 'react';
import { Container, List,ResponsiveBottomContainer } from './styles'

import TaskContent from '../TaskContent';
import TaskBlock from '../TaskBlock';
import BottomContainer from './components/BottomContainer'
import Filter from './components/Filter';

export default function TaskList({
  tasks
}) {
  const visibleTasks = tasks.filter(item => item.visible)
  return (
    <Container>
      <List>
      {visibleTasks.length > 0 ? visibleTasks.map(task => {
        return task.visible ? (
          <li key={task.title}>
            <TaskContent task={task} />
          </li>
        ) : null
      }) : (
        <TaskBlock 
          style={{borderRadius: "4px 4px 0 0"}}
        > 
          <p>No tasks to show :(</p> 
        </TaskBlock>
      )} 
      </List>
      <BottomContainer />
      <ResponsiveBottomContainer>
        <Filter />
      </ResponsiveBottomContainer>
    </Container>
  )
}