import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  template:`
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="newTodo.text" name="text" type="text">
      <input [(ngModel)]="newTodo.assignee" name="assignee" type="text">
      <button type="submit">Add Todo</button>
    </form>
  `
})
export class TodoFormComponent {
  newTodo: { text: string, assignee: string} = { text: '', assignee: ''}

  @Output() addTodoEvent = new EventEmitter<{ text: string, assignee: string}>()

  onSubmit() {
    this.addTodoEvent.emit(this.newTodo);
    this.newTodo = {text: '', assignee: ''};
  }
}
