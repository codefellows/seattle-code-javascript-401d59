import React, { useEffect, useState, useContext } from 'react';

import { Pagination, Flex, Container } from '@mantine/core';
import { SettingsContext } from '../../Context/Settings';
import { ItemsContext } from '../../Context/Items';
import List from '../List'
import Form from '../NewTodoForm'
import Header from '../Header';

const Todo = () => {
  const settingsState = useContext(SettingsContext)
  const itemsState = useContext(ItemsContext)

  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <Header />
      <Flex
        mih={50}
        gap="xl"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        <Form />
        <Container>
          <List activePage={activePage} />
          <Pagination
            page={activePage}
            onChange={setActivePage}
            total={Math.ceil(itemsState.totalItems.length / settingsState.pageItems)}
            color="blue"
            size="md"
            radius="md"
          />
        </Container>
      </Flex>
    </>
  );
};

export default Todo;
