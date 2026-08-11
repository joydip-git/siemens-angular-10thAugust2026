//import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { todorecords } from './data/todorecords';
import { TodoList } from './todo-list/todo-list';
import { Todo } from './models/todo';
import { FilterTodos } from "./filter-todos/filter-todos";

@Component({
  selector: 'app-root',
  imports: [
    //NgFor
    TodoList,
    FilterTodos
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected names = signal(['anil', 'sunil', 'ramesh'])
  protected todos = signal(todorecords)
  protected filterValue = signal('')

  updateATodo(todo: Todo) {
    const index = this.todos().findIndex(td => td.id === todo.id)
    if (index !== -1) {
      this.todos().splice(index, 1, todo)
    }
  }

  getFilterData(value: string) {
    this.filterValue.set(value)
  }
}
