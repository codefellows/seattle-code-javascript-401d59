import axios from 'axios';
import { createSlice, createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  loading: false,
}

export const addTodo = createAction('ADD_TODO');
export const setTodos = createAction('SET_TODOS');

const todoReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(addTodo, (state, action) => {
    state.list.push(action.payload);
  })
  .addCase(setTodos, (state, action) => {
    state.list = action.payload;
  });
})

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo(state, action) {
//       state.list.push(action.payload);
//     },
//     setTodos(state, action) {
//       console.log(action);
//       state.list = action.payload;
//     },
//   }
// });

// async function
export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });
  try {
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
    const todoValues = response.data.results;
    dispatch(setTodos(todoValues));
  } catch (e) {
    console.log(e);
  }
}

export default todoReducer;
// export const { setTodos, addTodo } = todoSlice.actions;
// export default todoSlice.reducer;
