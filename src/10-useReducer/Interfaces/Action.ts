import { Todo } from './index';

export interface Action {
  payload: Todo;
  type: string;
}
