import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>My Todo App</h1>
    </header>
    <todo-list [todos]="todos"></todo-list>
    <todo-form (addTodoEvent)="addTodo($event)"></todo-form>
  `,
})
export class AppComponent {
  todos: {text: string, assignee: string}[] = [{
     text: 'do the dishes', assignee: 'me'
  }]

  addTodo(todo: { text: string, assignee: string}) {
    this.todos.push(todo);
  }
}
