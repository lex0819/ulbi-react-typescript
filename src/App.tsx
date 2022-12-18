import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card, { CardVariant } from './components/Card';
import { ITodo, IUser } from './types/types';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    FetchUsers();
    FetchTodos();
  });

  async function FetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function FetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setTodos(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Card
        variant={CardVariant.Ellips}
        width="300px"
        height="200px"
        padding="20px"
        onClick={(num) => console.log('click on Card', num)}
      >
        <div>Hey, gays!</div>
        <button>Click me</button>
      </Card>
      <EventsExample />
      <List
        items={users}
        itemRender={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        itemRender={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};

export default App;
