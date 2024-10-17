import { Action } from '../Interfaces';

interface ActionCreatorArgs {
  type: 'delete' | 'create' | 'toogle';
  id: number | 'nuevo';
  description?: string;
  done?: boolean;
}

const setId = (id: number | 'nuevo'): number => {
  const output =
    id === 'nuevo' ? new Date().getTime() * (Math.random() * 100) : id;
  return output;
};

export const actionCreator = ({
  type,
  id,
  description,
  done
}: ActionCreatorArgs): Action => {
  return {
    type,
    payload: {
      id: setId(id),
      description: description ?? '',
      done: done ?? false
    }
  };
};
