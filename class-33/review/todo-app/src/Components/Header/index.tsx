import React, { useEffect, useState, useContext } from 'react';
import { ItemsContext } from '../../Context/Items';

export default function Header() {
  const itemsState = useContext(ItemsContext);
  const [incomplete, setIncomplete] = useState(0);

  useEffect(() => {
    const incompleteCount = itemsState.totalItems.filter(item => !item.completed).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [itemsState.totalItems]);

  return (
    <header data-testid="todo-header">
      <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
    </header>
  );
}