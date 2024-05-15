
import React, { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { ItemsContext } from '../../Context/Items';

export default function List({ activePage }): React.ReactElement {
  const settingsState = useContext(SettingsContext)
  const itemsState = useContext(ItemsContext)
  const startIndex = (activePage - 1) * settingsState.pageItems;
  const endIndex = startIndex + settingsState.pageItems;
  const displayedItems = itemsState.totalItems.slice(startIndex, endIndex);
  console.log('HERE ARE THE ITEM THAT WILL RENDER', displayedItems);
  console.log('SHOULD WE HIDE COMPLETED ITEMS??', settingsState.hideCompleted);

  // How can we only render not completed, when hideCompleted is true?
  const renderItemsOnHide = (list) => {
    // we can use the array.filter method -> only when hideCompleted is True
    if (settingsState.hideCompleted === true) {
      return list.filter((item) => {
        if (!item.completed) {
          return item;
        }
      });
    }
    // else we return the original list
    return displayedItems;
  }

  const renderSortedItems = (list) => {
    if (settingsState.filter) {
      return list.sort((a, b) => a.difficulty - b.difficulty);
    }
  }

  return (
    <>
      {renderSortedItems(renderItemsOnHide(displayedItems)).map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => itemsState.toggleComplete(item.id)}>Complete: {item.completed.toString()}</div>
          <hr />
        </div>
      ))}
    </>
  )
}