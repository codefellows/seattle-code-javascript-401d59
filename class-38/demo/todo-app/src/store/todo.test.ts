import store from './index';
import { addTodo, fetchTodos } from './todos';

describe('Todo State', () => {
  test('Should add a todo to state', () => {

    store.dispatch(addTodo('Take out the trash'));

    const state = store.getState();
    console.log(state.todos.list);
    expect(state.todos.list[0].text).toEqual('Take out the trash');
  });

  test('Should fetch todos from API using async action', async () => {
    store.dispatch(fetchTodos());

    let state = store.getState();
    expect(state.todos.list.length).toBeTruthy();
  });
})