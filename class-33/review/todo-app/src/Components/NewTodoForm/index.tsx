import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import { ItemsContext } from '../../Context/Items';
import { Stack } from '@mantine/core';


export default function NewTodoForm() {
  const itemsState = useContext(ItemsContext)
  const [defaultValues] = useState({
    difficulty: 3,
  });
  const { handleChange, handleSubmit } = useForm(itemsState.addItem, defaultValues);

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        h={300}
        bg="var(--mantine-color-body)"
        align="stretch"
        justify="center"
        gap="md"
      >
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item  </span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To  </span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty </span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </Stack>

    </form>
  )
}