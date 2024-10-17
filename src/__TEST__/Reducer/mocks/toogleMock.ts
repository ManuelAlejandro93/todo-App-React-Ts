import { Action } from '../../../10-useReducer/Interfaces';

export const toggle: Action = {
  type: 'toogle',
  payload: {
    id: 1,
    description: 'Prueba si el reducer hace toogle.',
    done: false
  }
};
