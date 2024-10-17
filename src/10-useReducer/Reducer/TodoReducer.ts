import { Todo, Action } from '../Interfaces';

export const todoReducer = (
  lastState: Todo[] | [],
  action: Action
): Todo[] | [] => {
  switch (action.type) {
    case 'create':
      return [action.payload, ...lastState];
    case 'delete':
      return lastState.filter((todo) => todo.id !== action.payload.id);
    case 'toogle':
      return lastState.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            done: !todo.done
          };
        }
        return todo;
      });
    default:
      return [...lastState];
  }
};
