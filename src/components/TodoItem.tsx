import React, { FC, useState } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [checkTodo, setCheckTodo] = useState<boolean>(todo.completed);

  return (
    <div
      style={{
        padding: '15px',
        background: 'AntiqueWhite',
        border: '1px solid SkyBlue',
        margin: '10px',
      }}
    >
      <input
        type="checkbox"
        checked={checkTodo}
        onChange={() => setCheckTodo(!checkTodo)}
      />
      <span style={{ marginLeft: '15px' }}>{todo.id}</span>
      <span style={{ marginLeft: '15px' }}>{todo.title}</span>
    </div>
  );
};

export default TodoItem;
