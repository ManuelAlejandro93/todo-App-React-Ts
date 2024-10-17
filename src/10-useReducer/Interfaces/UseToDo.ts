export interface UseToDoType {
  todos: [] | Todo[];
  onAddTodo: Function;
  onDeleteTodo: Function;
  onToogleToDo: Function;
  totalToDos: number;
  pendingToDos: number;
}

export interface Todo {
  id: number;
  description: string;
  done: boolean;
}
