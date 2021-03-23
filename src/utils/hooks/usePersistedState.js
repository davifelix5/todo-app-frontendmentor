import {useEffect, useState} from 'react';

export default function usePersistedState(key, initialState) {
  const [state, setState] = useState(getIniticialValue());

  function getIniticialValue() {
    const previousState = localStorage.getItem(key);

    if (!previousState) {
      localStorage.setItem(key, JSON.stringify(initialState));
      return initialState;
    } else {
      return JSON.parse(previousState);
    }
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}