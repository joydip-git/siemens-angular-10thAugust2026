import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';

@Pipe({
  name: 'todoFilter',
})
export class TodoFilterPipe implements PipeTransform {
  transform(value: Todo[], ...args: string[]): Todo[] {
    return args[0] !== '' ? value.filter(t => t.title.toLocaleLowerCase().includes(args[0].toLocaleLowerCase())) : value
  }
}
