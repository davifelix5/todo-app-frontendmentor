import React, { useContext } from 'react'

import {Container} from './styles';

import TaskContext, { filterMap } from '../../../../contexts/TaskContext';

export default function Filter() {
  const { 
    filter,
    changeFilter
  } = useContext(TaskContext);
  
  return (
    <Container>
      <button 
        className={filter === filterMap.ALL ? `selected` : null}
        onClick={() => changeFilter(filterMap.ALL)}
      >
        All
      </button>
      <button
        className={filter === filterMap.ACTIVE ? `selected` : null}
        onClick={() => changeFilter(filterMap.ACTIVE)}
      >
        Active
      </button>
      <button
        className={filter === filterMap.COMPLETED ? `selected` : null}
        onClick={() => changeFilter(filterMap.COMPLETED)}
      >
        Completed
      </button>
    </Container>
  )
}