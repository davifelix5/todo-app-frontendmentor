import React from 'react';
import { Container, CheckButton } from './styles';

export default function TaskForm({children, completed}) {
  return (
    <Container>
      <CheckButton completed={completed} />
      {children}
    </Container>
  )
}