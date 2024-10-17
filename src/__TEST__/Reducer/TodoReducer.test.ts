import {
  createTodoTest,
  estadoInicial,
  deleteTesting,
  toggleTesting
} from './index';

describe('Pruebas en useReducer()', () => {
  estadoInicial();
  createTodoTest();
  deleteTesting();
  toggleTesting();
});
