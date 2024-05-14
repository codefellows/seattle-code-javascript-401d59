import React, { useEffect, useState, useContext } from 'react';

import { Pagination } from '@mantine/core';
import { TodoContext, TodoData } from '../../Context/Settings';
import List from '../List'
import Form from '../Form'

const Todo = () => {
  const todoState = useContext<{addItem: () => void, totalItems: Array<TodoData>, toggleComplete: () => void, pageItems: number}>(TodoContext)
  const [incomplete, setIncomplete] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const incompleteCount = todoState.totalItems.filter(item => !item.completed).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [todoState.totalItems]);  

  return (
    <>
      <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header>
      <Form />
      <List activePage={activePage}/>
      <Pagination
        page={activePage}
        onChange={setActivePage}
        // todoState items => all items in the list
        //  divide by the number of items that should be on the page.
        //  round the value down so we are always returning the pageItems amount (3)
        total={Math.ceil(todoState.totalItems.length / todoState.pageItems)}
        color="blue"
        size="md"
        radius="md"
      />
    </>
  );
};

export default Todo;
