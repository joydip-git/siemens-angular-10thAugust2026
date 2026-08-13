import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [FormsModule],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second {
   submit(x: NgForm) {
    console.log(x.form);
    console.log(x.form.get('firstCtrl')?.value);
  }
}
