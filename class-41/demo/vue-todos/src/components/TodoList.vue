<script setup>
  defineProps({
    todos: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <div>
    <h2>Todo List</h2>
    <ul>
      <li v-for="todo in todos">
        <strong>{{ todo.text }}</strong> - Assigned to {{ todo.assignee }}
      </li>
    </ul>
  </div>
</template>