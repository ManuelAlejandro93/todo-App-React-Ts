import { todoReducer } from '@/10-useReducer/Reducer';

import { initialStateMock, toDoNothingActionMock, toggle } from './mocks';

//El estado inicial arranca en false y con una acción toogle debe pasar a true

const initialState = todoReducer(initialStateMock, toDoNothingActionMock);

export const toggleTesting = (): void => {
  test('afterToggleState debe contener el todo1 con la propiedad done en true', () => {
    const afterToggleState = todoReducer(initialState, toggle);
    const [todo1] = afterToggleState;
    expect(todo1.done).toBe(true);
  });
  test('si lo vuelve a hacer debe ser false', () => {
    const afterToggleState = todoReducer(initialState, toggle);
    const [todo1] = afterToggleState;
    expect(todo1.done).toBe(true);
    const afterAfterToggleState = todoReducer(afterToggleState, toggle);
    const [todo1AfterAfter] = afterAfterToggleState;
    expect(todo1AfterAfter.done).toBe(false);
  });
};
