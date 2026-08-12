//import { NgFor } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { todorecords } from './data/todorecords';
import { TodoList } from './todo-list/todo-list';
import { Todo } from './models/todo';
import { FilterTodos } from "./filter-todos/filter-todos";
import { TodoService } from './services/todo.service';
import { Observable, Subscription } from 'rxjs';

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
export class App implements OnInit, OnDestroy {
  private todoSvc = inject(TodoService)
  private fetchSub?: Subscription;
  filterValue = signal('')
  todos = signal<Todo[]>([])
  errorInfo = signal('')
  isRequestOver = signal(false)

  ngOnInit(): void {
    const obs: Observable<Todo[]> = this.todoSvc.getTodos()
    this.fetchSub = obs.subscribe({
      next: (data) => {
        this.todos.set(data.slice(0, 10))
        this.errorInfo.set('')
        this.isRequestOver.set(true)
      },
      error: (err) => {
        this.todos.set([])
        this.errorInfo.set(err.message)
        this.isRequestOver.set(true)
      },
      // complete: () => {
      // }
    })
  }

  ngOnDestroy(): void {
    this.fetchSub?.unsubscribe()
  }
  
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
