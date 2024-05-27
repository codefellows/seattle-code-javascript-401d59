<script setup>
import { ref } from 'vue';
import TodoList from './components/TodoList.vue';
import TodoForm from './components/TodoForm.vue';

const todos = ref([
  {text: 'Go get groceries', assignee: 'me'},
  {text: 'Finish todos', asssignee: 'me'}
]); // takes a value that will be returned as "state"

const addTodo = (todo) => {
  todos.value.push(todo);
}
</script>

<template>
  <header>
    <h1>The Todo App</h1>
  </header>

  <main>
    <TodoList :todos="todos" />
    <TodoForm @addTodo="addTodo" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
