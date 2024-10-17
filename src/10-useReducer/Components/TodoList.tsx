import { Todo } from '../Interfaces';
import { TodoItem } from '../Components';

interface Props {
  todos: Todo[] | [];
  deletefn: Function;
  onToogleToDo: Function;
}
export const TodoList = ({
  todos,
  deletefn,
  onToogleToDo
}: Props): JSX.Element => {
  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deletefn={deletefn}
          onToogleToDo={onToogleToDo}
        />
      ))}
    </ul>
  );
};
