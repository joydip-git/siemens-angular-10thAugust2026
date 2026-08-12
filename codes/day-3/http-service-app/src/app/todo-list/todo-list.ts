import { Component, input, output } from '@angular/core';
import { Todo } from '../models/todo';
import { UpperCasePipe } from '@angular/common';
import { TodoFilterPipe } from '../pipes/todo-filter-pipe';

@Component({
  selector: 'app-todo-list',
  imports: [UpperCasePipe, TodoFilterPipe],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  filterText = input('')
  tododata = input<Todo[]>([], { alias: 'todoinfo' })
  tododataChanged = output<Todo>({ alias: 'todoinfoChanged' })

  updateUserId(userId: number, id: number) {
    const found = this.getTodoById(id)
    if (found) {
      //spread operator (...)
      const copy = { ...found }
      copy.userId = userId
      this.tododataChanged.emit(copy)
    }
  }
  updateStatus(newStatus: boolean, id: number) {
    const found = this.getTodoById(id)
    if (found) {
      //spread operator (...)
      const copy = { ...found }
      copy.completed = newStatus
      this.tododataChanged.emit(copy)
    }
  }

  private getTodoById(id: number) {
    return this.tododata().find((todo) => todo.id === id)
  }
}
