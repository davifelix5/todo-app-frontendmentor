import React from 'react';
import { Container } from './styles';

export default function TaskForm({children, completed}) {
  return (
    <Container>
      {children}
    </Container>
  )
}