import { Todo } from '../Interfaces';

const storageKey = '[state-todos]';

export const updateLocalStorage = (todos: Todo[]): void => {
  localStorage.setItem(storageKey, JSON.stringify(todos));
};
