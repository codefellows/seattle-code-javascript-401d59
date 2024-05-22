import { useEffect } from 'react';
import { fetchTodos } from '../store/todos';
import { useSelector, useDispatch } from 'react-redux';

export default function Todo() {
  const todos = useSelector(state => state.todos.list);
  const loading = useSelector(state => state.todos.loading);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  console.log('TODOs', todos, loading);
  return (
    <div>
      <h2>Todo List</h2>
      {loading ? <p>...loading</p>: null}
      {todos.map(todo => (
        <p>{todo.text}</p>
      ))}
    </div>
  )
}