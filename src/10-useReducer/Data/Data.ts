import { Todo } from '../Interfaces';

export const initialState: Todo[] = [
  {
    id: new Date().getTime() * 3,
    description: 'Organiza tus tareas.',
    done: false
  }
];
