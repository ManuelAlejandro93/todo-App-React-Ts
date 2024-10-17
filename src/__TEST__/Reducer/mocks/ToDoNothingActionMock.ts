import { Action } from '../../../10-useReducer/Interfaces';

export const toDoNothingActionMock: Action = {
  type: 'nothing',
  payload: {
    id: 0,
    description: 'esta accion no hace nada.',
    done: true
  }
};
