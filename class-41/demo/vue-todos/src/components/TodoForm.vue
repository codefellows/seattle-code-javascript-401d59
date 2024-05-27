<script setup>
import {ref, defineEmits} from 'vue';

const emit = defineEmits(['addTodo']);
let newTodo = ref({
  text: '',
  assignee: ''
});

const handleSubmit = (todo) => {
  emit('addTodo', todo);
  newTodo.value = { text: '', assignee: ''}
}
</script>

<template>
  <form @submit.prevent="handleSubmit(newTodo)">
    <input type="text" id="todoText" v-model="newTodo.text" />
    <input type="text" id="todoAssignee" v-model="newTodo.assignee" />
    <button type="submit">Add Todo</button>
  </form>
</template>