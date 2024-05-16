import { useState, createContext } from 'react';
import axios from 'axios';

export const ListContext = createContext({});

export default function ListProvider({ children }) {
  const [list, setList] = useState([]);

  const fetchListItems = () => {
    axios.get('https://api-js401.herokuapp.com/api/v1/notes/')
      .then((response) => {
        console.log(response.data);
        setList(response.data.results);
      })
      .catch(e => {
        console.log('SOMETHING WENT WRONG :(', e);
      });
  }

  const addListItem = ({ text, category }) => {
    axios.post('https://api-js401.herokuapp.com/api/v1/notes/', {
      text,
      category
    })
    .then(response => {
      setList([...list, response.data]);
    });
  }
  console.log(list);
  return (
    <ListContext.Provider value={{ list, addListItem, fetchListItems }}>
      {children}
    </ListContext.Provider>
  )
}