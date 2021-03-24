import React from 'react';
import { Container } from './styles';

export default function TaskForm({children, ...props}) {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}