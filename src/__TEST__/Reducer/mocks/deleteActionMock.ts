import { Action } from '../../../10-useReducer/Interfaces';

export const deleteActionMock: Action = {
  type: 'delete',
  payload: {
    id: 2,
    description: 'Prueba si el reducer elimina un To-Do',
    done: false
  }
};
