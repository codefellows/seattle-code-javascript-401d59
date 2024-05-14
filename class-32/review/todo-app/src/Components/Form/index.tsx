import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import { TodoContext, TodoData } from '../../Context/Settings';

export default function Form() {
    const todoState = useContext<{addItem: () => void, totalItems: Array<TodoData>, toggleComplete: () => void, pageItems: number}>(TodoContext)
    const [defaultValues] = useState({
        difficulty: 4,
    });
    const { handleChange, handleSubmit } = useForm(todoState.addItem, defaultValues);

    return (
        <form onSubmit={handleSubmit}>
      
            <h2>Add To Do Item</h2>

            <label>
                <span>To Do Item</span>
                <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
            </label>

            <label>
                <span>Assigned To</span>
                <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
            </label>

            <label>
                <span>Difficulty</span>
                <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
            </label>

            <label>
                <button type="submit">Add Item</button>
            </label>
        </form>
    )
}