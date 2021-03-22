import React from 'react';
import { Input } from './styles';

export default function TaskInput() {
  return (
    <Input 
      id="taskInput" 
      type="text"
      placeholder="Create a new todo..."
    />
  )
}