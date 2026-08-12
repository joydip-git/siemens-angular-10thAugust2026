import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-filter-todos',
  imports: [],
  templateUrl: './filter-todos.html',
  styleUrl: './filter-todos.css',
})
export class FilterTodos {
  filterData = signal('')
  filterDataChanged = output<string>()

  updateFilterData(filtervalue: string) {
    this.filterData.set(filtervalue)
    this.filterDataChanged.emit(this.filterData())
  }
}
