
import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import { ItemsContext } from '../../Context/Items';
import { SettingsContext } from '../../Context/Settings';
import { Stack, NumberInput, Switch, Container } from '@mantine/core';

export default function SettingsForm() {

  const itemsState = useContext(ItemsContext)
  const settingsState = useContext(SettingsContext)

  return (
    <Container style={{ height: '300px', width: '400px' }}>
      <Stack
        bg="none"
        align="stretch"
        justify="center"
        gap="md"
      >
        <h2>Update Settings</h2>
        <Switch
          label="Hide Completed ToDos"
          defaultChecked
          onChange={(event) => settingsState.updateHideCompleted(event.currentTarget.checked)}
        />
        <NumberInput
          label="Items per page:"
          min={1}
          max={itemsState.totalItems.length}
          onChange={(items) => settingsState.updatePageItems(items)}
        />
        <label>
          <span>Sort Keyword </span>
          <input placeholder="difficulty" type="text" name="sort" />
        </label>
      </Stack>
    </Container>
  )
}