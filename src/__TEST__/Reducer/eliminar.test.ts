import { todoReducer } from '@/10-useReducer/Reducer';

import {
  initialStateMock,
  toDoNothingActionMock,
  CreateActionMock,
  deleteActionMock
} from './mocks';

const initialState = todoReducer(initialStateMock, toDoNothingActionMock);
const beforeDeleteState = todoReducer(initialState, CreateActionMock);
const afterDeleteState = todoReducer(beforeDeleteState, deleteActionMock);

export const deleteTesting = (): void => {
  test('la longitud del último estado después de haber borrado debe ser 1.', () => {
    expect(afterDeleteState.length).toBe(1);
  });

  test('El contenido del último estado después de haber borrado debe contener el primer ToDo. ', () => {
    expect(afterDeleteState).toContainEqual({
      id: 1,
      description: 'Esta es la tarea inicial con la que arranca el reducer.',
      done: false
    });
  });
};
