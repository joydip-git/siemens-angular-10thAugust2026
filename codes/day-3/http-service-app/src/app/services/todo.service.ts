import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Service()
// @Injectable({
//     providedIn: 'root'
// })
export class TodoService {
    private _http = inject(HttpClient)

    getTodos(): Observable<Todo[]> {
        return this._http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    }

}
