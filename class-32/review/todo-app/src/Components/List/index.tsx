
import React, { useContext } from 'react';
import { TodoContext, TodoData } from '../../Context/Settings';


export default function List({activePage}): React.ReactElement {
    const todoState = useContext<{addItem: () => void, totalItems: Array<TodoData>, toggleComplete: () => void, pageItems: number}>(TodoContext)
    const startIndex = (activePage - 1) * todoState.pageItems;
    const endIndex = startIndex + todoState.pageItems;
    const displayedItems = todoState.totalItems.slice(startIndex, endIndex);

    const renderDisplayedItems = () => {
        
    }

    return (
        <>
            {displayedItems.map(item => (
                <div key={item.id}>
                <p>{item.text}</p>
                <p><small>Assigned to: {item.assignee}</small></p>
                <p><small>Difficulty: {item.difficulty}</small></p>
                <div onClick={() => todoState.toggleComplete(item.id)}>Complete: {item.completed.toString()}</div>
                <hr />
                </div>
            ))}
        </>
    )
}