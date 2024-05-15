
import { Container, Grid } from '@mantine/core';
import SettingsForm from '../SettingsForm';
import { SettingsContext } from '../../Context/Settings';
import React, { useEffect, useState, useContext } from 'react';

export default function SettingsPage() {
  const settingsState = useContext(SettingsContext)
  return (
    <Grid id="my-grid">
      <SettingsForm />
      <Container style={{ height: '300px', width: '400px' }}>
        <h2>Updated Settings</h2>
        {settingsState.hideCompleted ? <p>Hide Completed ToDos</p> : <p>Show Completed ToDos</p>}
        <p>Items per page: {settingsState.pageItems}</p>
        <p>Sort Keyword: {settingsState.filter}</p>
      </Container>
    </Grid>




  )
}