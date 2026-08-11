//import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { todorecords } from './data/todorecords';
import { TodoList } from './todo-list/todo-list';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  imports: [
    //NgFor
    TodoList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected names = signal(['anil', 'sunil', 'ramesh'])
  protected todos = signal(todorecords)

  updateATodo(todo: Todo) {
    const index = this.todos().findIndex(td => td.id === todo.id)
    if (index !== -1) {
      this.todos().splice(index, 1, todo)
    }
  }
}
