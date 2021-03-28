import {useEffect, useState} from 'react';

export default function usePersistedState(key, initialState, initalFilter) {
  const [state, setState] = useState(getIniticialValue());

  function getIniticialValue() {
    const previousState = localStorage.getItem(key);

    if (!previousState) {
      localStorage.setItem(key, JSON.stringify(initialState));
      return initialState;
    } else {
      const initialValue = JSON.parse(previousState);
      return initalFilter ?  initalFilter(initialValue) : initialValue
    }
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}