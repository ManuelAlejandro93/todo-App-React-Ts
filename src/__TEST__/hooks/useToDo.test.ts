import { act, renderHook } from '@testing-library/react';
import { UseToDo } from '@/10-useReducer/Hooks';

describe('Pruebas en el custom hook useToDo.', () => {
  test('Debe inicializarse con 1 solo toDo"', () => {
    const { result } = renderHook(() => UseToDo());

    const {
      current: { todos }
    } = result;

    expect(todos.length).toBe(1);
  });

  test('El valor inicial del todo1 debe ser "Organiza tus tareas."', () => {
    const { result } = renderHook(() => UseToDo());

    const {
      current: {
        todos: [todo1]
      }
    } = result;

    expect(todo1.description).toBe('Organiza tus tareas.');
  });

  test('onAddTodo Debe agregar un toDo al estado del custom Hook', () => {
    const { result } = renderHook(() => UseToDo());

    const {
      current: { todos, onAddTodo }
    } = result;

    expect(todos.length).toBe(1);

    act(() => {
      onAddTodo('morder a la vaca.');
    });

    expect(result.current.totalToDos).toBe(2);
  });

  test('la descripcion del ultimo todo debe ser "morder al perro"', () => {
    const { result } = renderHook(() => UseToDo());

    const {
      current: { onAddTodo }
    } = result;

    act(() => {
      onAddTodo('Morder al perro.');
    });

    expect(result.current.todos[0].description).toBe('Morder al perro.');
  });

  test('onDelete en "morder al gato" debe borrar el todo "morder al gato" y tener como descripcion del ultimo toDo "morder al perro."', () => {
    const { result } = renderHook(() => UseToDo());

    const {
      current: { onAddTodo, onDeleteTodo }
    } = result;

    act(() => {
      onAddTodo('Morder al gato.');
    });

    expect(result.current.todos[0].description).toBe('Morder al gato.');

    const morderPerroToDoId = result.current.todos[0].id;

    act(() => {
      onDeleteTodo(morderPerroToDoId);
    });

    expect(result.current.todos[0].description).toBe('Morder al perro.');
  });

  test('onToggleTodo debe cambiar la propiedad done de false a true en el todo[0] con descripcion "morder al perro."', () => {
    const { result } = renderHook(() => UseToDo());
    const {
      current: { onToogleToDo }
    } = result;

    const {
      current: {
        todos: [todo1]
      }
    } = result;

    const idBuscado = todo1.id;

    act(() => {
      onToogleToDo(idBuscado);
    });

    expect(result.current.todos[0].done).toBe(true);

    act(() => {
      onToogleToDo(idBuscado);
    });

    expect(result.current.todos[0].done).toBe(false);

    act(() => {
      onToogleToDo(idBuscado);
    });

    expect(result.current.todos[0].done).toBe(false);
  });
});
