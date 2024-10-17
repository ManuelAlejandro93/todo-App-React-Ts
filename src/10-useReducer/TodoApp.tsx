import { TodoList, TodoAdd } from './Components';
import { UseToDo } from './Hooks';

const TodoApp = (): JSX.Element => {
  const {
    todos,
    onAddTodo,
    onDeleteTodo,
    onToogleToDo,
    pendingToDos,
    totalToDos
  } = UseToDo();

  return (
    <>
      <h1>
        TODO App: {totalToDos} <small>Pendientes: {pendingToDos}</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            deletefn={onDeleteTodo}
            onToogleToDo={onToogleToDo}
          />
        </div>

        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onTODOAdd={onAddTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
