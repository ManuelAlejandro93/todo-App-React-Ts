import { todoReducer } from '@/10-useReducer/Reducer';
import {
  initialStateMock,
  toDoNothingActionMock,
  CreateActionMock
} from './mocks';
import { createActionResultExpected } from './Expected Results';

export const createTodoTest = () => {
  test('Al inicializar y agregar otro toDo, debe haber 2 ToDos.', () => {
    const lastState = todoReducer(initialStateMock, toDoNothingActionMock);

    const currentState = todoReducer(lastState, CreateActionMock);

    expect(currentState).toEqual(createActionResultExpected);
  });
  test('Al agregar un Todo la longitud debe ser de 2.', () => {
    const lastState = todoReducer(initialStateMock, toDoNothingActionMock);

    const currentState = todoReducer(lastState, CreateActionMock);

    expect(currentState.length).toBe(2);
  });
  test('Al agregar un Todo la longitud, el nuevo estado debe contener el payload de la acción que crea un nuevo ToDo.', () => {
    const lastState = todoReducer(initialStateMock, toDoNothingActionMock);

    const currentState = todoReducer(lastState, CreateActionMock);

    expect(currentState).toContainEqual({
      id: 2,
      description: 'Probar si el reducer crea toDos',
      done: false
    });
  });
};
