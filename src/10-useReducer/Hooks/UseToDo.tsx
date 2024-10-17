import { useEffect, useReducer } from 'react';
import { todoReducer } from '../Reducer';
import { initFn, updateLocalStorage, actionCreator } from '../Functions';
import { initialState } from '../Data';
import { UseToDoType } from '../Interfaces';

export const UseToDo = (): UseToDoType => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, initFn);

  const totalToDos = todos.length;
  const pendingToDos = todos.filter((todo) => !todo.done).length;

  const onAddTodo = (newTask: string): void => {
    dispatch(
      actionCreator({ type: 'create', id: 'nuevo', description: newTask })
    );
  };

  const onDeleteTodo = (id: number): void => {
    dispatch(actionCreator({ type: 'delete', id }));
  };

  const onToogleToDo = (id: number): void => {
    dispatch(actionCreator({ type: 'toogle', id }));
  };

  useEffect(() => {
    updateLocalStorage(todos);
  }, [todos]);

  return {
    todos,
    onAddTodo,
    onDeleteTodo,
    onToogleToDo,
    pendingToDos,
    totalToDos
  };
};
