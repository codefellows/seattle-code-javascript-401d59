import axios from 'axios';

const initialState = {
  list: [],
  loading: false,
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return { list: [...state.list], loading: action.payload }
    case 'SET_TODOS':
      return { list: action.payload, loading: false }
    case 'ADD_TODO':
      return { list: [...state.list, action.payload ], loading: state.loading };
    default:
      return state;
  }
}

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

export const setTodos = (todos) => {
  return {
    type: 'SET_TODOS',
    payload: todos,
  }
}

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: { text }
  }
}