import { useState } from 'react';

interface Props {
  onTODOAdd: Function;
}

export const TodoAdd = ({ onTODOAdd }: Props): JSX.Element => {
  const [input, setInput] = useState<string>('');

  const handleChange = (event: any): void => {
    const {
      target: { value }
    } = event;

    setInput(value);
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    if (input.trim().length < 6) return;
    onTODOAdd(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='¿Qué hay que hacer?'
        className='form-control'
        value={input}
        onChange={handleChange}
      />
      <button
        type='submit'
        className='btn btn-outline-primary mt-2'
      >
        Agregar
      </button>
    </form>
  );
};
