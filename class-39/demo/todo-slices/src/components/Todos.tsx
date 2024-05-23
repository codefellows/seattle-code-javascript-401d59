import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { fetchTodos, addTodo } from '../store/todoSlice';

export default function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      {todos.list.map(todo => (
        <p>{todo.text}</p>
      ))}
    </div>
  )
}