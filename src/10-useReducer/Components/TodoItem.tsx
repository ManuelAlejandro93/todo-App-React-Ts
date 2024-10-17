import { Todo } from '../Interfaces';

interface Props {
  todo: Todo;
  deletefn: Function;
  onToogleToDo: Function;
}

export const TodoItem = ({
  todo,
  deletefn,
  onToogleToDo
}: Props): JSX.Element => {
  return (
    <li className='list-group-item d-flex justify-content-between custom-background mt-2'>
      <span
        className={`btn btn-primary ${todo.done ? 'line-through' : ''}`}
        onClick={() => onToogleToDo(todo.id)}
      >
        {todo.description}
      </span>

      <button
        className='btn btn-danger'
        onClick={() => deletefn(todo.id)}
      >
        Eliminar
      </button>
    </li>
  );
};
