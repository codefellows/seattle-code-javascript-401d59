import { Component, Input } from '@angular/core'

@Component({
  selector: 'todo-list',
  template: `
    <div>
      <h2>Todo List</h2>
      <ul>
        <li *ngFor="let todo of todos">
          <strong>{{ todo.text }}</strong> - Assigned to {{ todo.assignee }}
        </li>
      </ul>
    </div>
  `
})
export class TodoListComponent {
  @Input() todos!: Array<{ text: string; assignee: string }>;
}
