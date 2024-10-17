import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '@/10-useReducer/Components';

const todoMock = {
  id: 666,
  description: 'Todo para probar todoItem',
  done: false
};

describe('Pruebas en <TodoItem>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Crear un snapshot', () => {
    const delefnMock = jest.fn(() => {});
    const onToogleToDoMock = jest.fn(() => {});

    const { container } = render(
      <TodoItem
        deletefn={delefnMock}
        onToogleToDo={onToogleToDoMock}
        key={'1'}
        todo={todoMock}
      />
    );

    expect(container).toMatchSnapshot();
  });
  test('Al dar click en el boton eliminar, 4 veces. Se debe llamar 4 veces a la función deletefn', () => {
    const delefnMock = jest.fn(() => {});
    const onToogleToDoMock = jest.fn(() => {});

    render(
      <TodoItem
        deletefn={delefnMock}
        onToogleToDo={onToogleToDoMock}
        key={'1'}
        todo={todoMock}
      />
    );

    const deleteButton = screen.getByText('Eliminar');

    fireEvent.click(deleteButton);
    fireEvent.click(deleteButton);
    fireEvent.click(deleteButton);
    fireEvent.click(deleteButton);

    expect(delefnMock).toHaveBeenCalledTimes(4);
  });

  test('Al dar click en el boton eliminar, se debe llamar la funcion delefnMock con el valor del todo id.', () => {
    const delefnMock = jest.fn();
    const onToogleToDoMock = jest.fn();

    render(
      <TodoItem
        deletefn={delefnMock}
        onToogleToDo={onToogleToDoMock}
        key={'1'}
        todo={todoMock}
      />
    );

    const deleteButton = screen.getByText('Eliminar');

    fireEvent.click(deleteButton);

    expect(delefnMock).toHaveBeenCalledWith(666);
  });

  test('Al dar click en el boton toogleTodo, 4 veces. Se debe llamar 4 veces a la función ontoggleTodo con el valor 666', () => {
    const delefnMock = jest.fn();
    const onToogleToDoMock = jest.fn();

    const { container } = render(
      <TodoItem
        deletefn={delefnMock}
        onToogleToDo={onToogleToDoMock}
        key={'1'}
        todo={todoMock}
      />
    );

    const spanToggleElement = container.querySelector('span');

    fireEvent.click(spanToggleElement as HTMLElement);
    fireEvent.click(spanToggleElement as HTMLElement);
    fireEvent.click(spanToggleElement as HTMLElement);
    fireEvent.click(spanToggleElement as HTMLElement);

    expect(onToogleToDoMock).toHaveBeenNthCalledWith(4, 666);
  });

  test('Al dar click en el boton toogleTodo, 4 veces. Se debe llamar 4 veces a la función ontoggleTodo', () => {
    const delefnMock = jest.fn(() => {});
    const onToogleToDoMock = jest.fn(() => {});

    const { container } = render(
      <TodoItem
        deletefn={delefnMock}
        onToogleToDo={onToogleToDoMock}
        key={'1'}
        todo={todoMock}
      />
    );

    const spanToggleElement = container.querySelector('span');

    fireEvent.click(spanToggleElement as HTMLElement);
    fireEvent.click(spanToggleElement as HTMLElement);
    fireEvent.click(spanToggleElement as HTMLElement);
    fireEvent.click(spanToggleElement as HTMLElement);

    expect(onToogleToDoMock).toHaveBeenCalledTimes(4);
  });

  test('Al renderizar debe existir en pantalla el elemento "Todo para probar todoItem"', () => {
    const delefnMock = jest.fn();
    const onToogleToDoMock = jest.fn();

    render(
      <TodoItem
        deletefn={delefnMock}
        onToogleToDo={onToogleToDoMock}
        key={'1'}
        todo={todoMock}
      />
    );

    const todoButton = screen.getByText(/Todo para probar todoItem/i);
    expect(todoButton).toBeTruthy();
  });

  test('Al dar click en el span con texto: "Todo para probar todoItem", NO debe cambiar la clase de css para incluir el texto: "line-through". Porque todo es un Mock.', () => {
    const delefnMock = jest.fn();
    const onToogleToDoMock = jest.fn();

    render(
      <TodoItem
        deletefn={delefnMock}
        onToogleToDo={onToogleToDoMock}
        key={'1'}
        todo={todoMock}
      />
    );

    const todoButton = screen.getByText(/Todo para probar todoItem/i);
    expect(todoButton).toBeTruthy();

    fireEvent.click(todoButton);

    expect(todoButton.classList.contains('line-through')).toBeFalsy();
  });

  test('Al enviar un to-do completado debe renderizar y tener la clase "line-through" que tacha la tarea.', () => {
    const delefnMock = jest.fn();
    const onToogleToDoMock = jest.fn();

    todoMock.done = true;

    render(
      <TodoItem
        deletefn={delefnMock}
        onToogleToDo={onToogleToDoMock}
        key={'1'}
        todo={todoMock}
      />
    );

    const todoButton = screen.getByText(/Todo para probar todoItem/i);
    expect(todoButton).toBeTruthy();

    fireEvent.click(todoButton);

    expect(todoButton.classList.contains('line-through')).toBeTruthy();
  });
});
