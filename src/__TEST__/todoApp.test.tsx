import { /* fireEvent */ render, screen } from '@testing-library/react';
import TodoApp from '@/10-useReducer/TodoApp';
import { UseToDo } from '@/10-useReducer/Hooks';

jest.mock('@/10-useReducer/Hooks');

describe('Pruebas en el componente principal <TodoApp>', () => {
  // test('Debe renderizar', () => {
  //   const { container } = render(<TodoApp />);
  //   expect(container).toBeTruthy();
  // });
  // test('Crear un snapshot', () => {
  //   const { container } = render(<TodoApp />);
  //   expect(container).toMatchSnapshot();
  // });

  // test('Debe existir un texto en pantalla que diga "TODO App"', () => {
  //   const { getByText } = render(<TodoApp />);
  //   expect(getByText(/TODO App/)).toBeTruthy();
  // });
  // test('Debe existir un texto en pantalla que diga "Pendientes"', () => {
  //   const { getByText } = render(<TodoApp />);
  //   expect(getByText(/Pendientes/)).toBeTruthy();
  // });
  // test('Debe existir un texto en pantalla que diga "Agregar todo"', () => {
  //   const { getByText } = render(<TodoApp />);
  //   expect(getByText(/Agregar todo/i)).toBeTruthy();
  // });

  // test('Se debe ingresar al input el valor "morder a la vaca"', () => {
  //   const { container, getByText } = render(<TodoApp />);
  //   const input = container.querySelector('input');
  //   const submitButton = getByText('Agregar');

  //   fireEvent.input(input as HTMLElement, {
  //     target: { value: 'morder a la vaca' }
  //   });

  //   fireEvent.click(submitButton as HTMLElement);

  //   const todoMorderVaca = getByText('morder a la vaca');

  //   expect(todoMorderVaca).toBeInTheDocument();
  // });

  // test('Al dar click en el span con texto: "Organiza tus tareas.", NO debe cambiar la clase de css para incluir el texto: "line-through". Porque todo es un Mock.', () => {
  //   render(<TodoApp />);

  //   const todoButton = screen.getByText(/Organiza tus tareas/i);
  //   expect(todoButton).toBeTruthy();

  //   fireEvent.click(todoButton);

  //   expect(todoButton.classList.contains('line-through')).toBe(true);
  // });

  test('Debe tener en la pantalla el valor de primer todo que le paso por el mock de custom hook', () => {
    const uuid = 6666;

    (UseToDo as jest.Mock).mockReturnValue({
      todos: [
        {
          id: uuid,
          description: 'Valor de descripcion de prueba.',
          done: false
        }
      ],
      onAddTodo: jest.fn(),
      onDeleteTodo: jest.fn(),
      onToogleToDo: jest.fn(),
      pendingToDos: 666,
      totalToDos: 666
    });

    const {} = render(<TodoApp />);

    expect(
      screen.getByText(/Valor de descripcion de prueba/i)
    ).toBeInTheDocument();

    // expect(screen.getAllByText(/666/i).length).toBe(2);
  });

  test('Debe tener en la pantalla el valor de pendingToDos 666 y el valor de totalToDos 999', () => {
    const uuid = 6666;

    (UseToDo as jest.Mock).mockReturnValue({
      todos: [
        {
          id: uuid,
          description: 'Valor de descripcion de prueba.',
          done: false
        }
      ],
      onAddTodo: jest.fn(),
      onDeleteTodo: jest.fn(),
      onToogleToDo: jest.fn(),
      pendingToDos: 666,
      totalToDos: 999
    });

    const {} = render(<TodoApp />);

    expect(screen.getByText(/666/i)).toBeVisible();
    expect(screen.getByText(/999/i)).toBeVisible();
  });
});
