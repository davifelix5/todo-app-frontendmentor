import React from 'react';
import { FormContainer } from './styles';


export default function TaskForm() {
  return (
    <FormContainer>
      <label htmlFor="taskInput"></label>
      <input 
        id="taskInput" 
        type="text"
        placeholder="Create a new todo..."
      />
    </FormContainer>
  )
}