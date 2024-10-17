import { todoReducer } from '@/10-useReducer/Reducer';
import { initialStateMock, toDoNothingActionMock } from './mocks';
// import { estadoInicialExpected } from './Expected Results';

export const estadoInicial = (): void => {
  test('Al ingresar el estado inicial y una accion que no haga nada, debe devolver el estado inicial.', () => {
    const result = todoReducer(initialStateMock, toDoNothingActionMock);

    expect(result).toEqual(initialStateMock);
  });
};
