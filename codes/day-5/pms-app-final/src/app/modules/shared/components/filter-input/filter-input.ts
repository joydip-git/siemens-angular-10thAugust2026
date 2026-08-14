import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  imports: [],
  templateUrl: './filter-input.html',
  styleUrl: './filter-input.css',
})
export class FilterInput {
  filterValue = signal('')
  filterValueChanged = output<string>()

  triggerFilterValueChanged(value: string) {
    this.filterValue.set(value)
    this.filterValueChanged.emit(this.filterValue())
  }
}
