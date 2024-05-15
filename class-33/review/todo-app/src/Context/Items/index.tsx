
import React, { createContext, useState } from "react";
import { v4 as uuid } from 'uuid';

interface childrenType {
  children: React.ReactElement;
}

export type TodoData = {
  id: string,
  text: string,
  assignee: string,
  difficulty: string,
  completed: boolean
}

export const ItemsContext = createContext({});

export default function ItemsProvider({ children }: childrenType) {
  const [totalItems, setTotalItems] = useState<Array<TodoData>>([])

  function addItem(item) {
    item.id = uuid();
    item.completed = false;
    console.log(item);
    setTotalItems([...totalItems, item]);
  }

  function toggleComplete(id: uuid) {
    const items = totalItems.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTotalItems(items);
  }

  return (
    <ItemsContext.Provider value={{ totalItems, addItem, toggleComplete }}>
      {children}
    </ItemsContext.Provider>
  )
}   