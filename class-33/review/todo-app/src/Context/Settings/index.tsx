
import React, { createContext, useState } from "react";

export const SettingsContext = createContext({});

interface childrenType {
  children: React.ReactElement;
}

export default function SettingsProvider({ children }: childrenType) {

  const [pageItems, setPageItems] = useState(3);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [filter, setFilter] = useState('difficulty');

  const updatePageItems = (length: number) => {
    setPageItems(length);
  }

  const updateHideCompleted = (hide: boolean) => {
    setHideCompleted(hide);
  }

  const updateFilter = (word: string) => {
    setFilter(word);
  }

  return (
    <SettingsContext.Provider value={{ pageItems, updatePageItems, hideCompleted, updateHideCompleted, filter, updateFilter }}>
      {children}
    </SettingsContext.Provider>
  )
}