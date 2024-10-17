import { initialState } from '../Data';
import { Todo } from '../Interfaces';

const stateKeyName = '[state-todos]';

export const initFn = (): Todo[] | [] => {
  const storageState = localStorage.getItem(stateKeyName) ?? 'vacio';

  if (storageState === 'vacio') {
    localStorage.setItem(stateKeyName, JSON.stringify(initialState));
    return JSON.parse(localStorage.getItem(stateKeyName) as string);
  } else if (storageState === '[]') {
    localStorage.setItem(stateKeyName, JSON.stringify(initialState));
    return JSON.parse(localStorage.getItem(stateKeyName) as string);
  }

  return JSON.parse(localStorage.getItem(stateKeyName) as string);
};
