import React from 'react';
import { Input, Form } from './styles';

export default function TaskInput() {
  // inset logic of creating and editign task
  return (
    <Form>
      <Input 
        id="taskInput" 
        type="text"
        placeholder="Create a new todo..."
      />
    </Form>
  )
}