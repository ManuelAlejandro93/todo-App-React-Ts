import { Action } from '../../../10-useReducer/Interfaces';

export const CreateActionMock: Action = {
  type: 'create',
  payload: {
    id: 2,
    description: 'Probar si el reducer crea toDos',
    done: false
  }
};
