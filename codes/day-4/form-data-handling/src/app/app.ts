import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validator';
import { Second } from "./second/second";

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, Second],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private builder = inject(FormBuilder)
  // firstCtrl = new FormControl('enter value')
  // secondCtrl = new FormControl('enter value')
  // valueForm = new FormGroup({
  //   firstCtrl: new FormControl('', [Validators.required, Validators.email]),
  //   secondCtrl: new FormControl('', [Validators.required, CustomValidators.length])
  // })

  valueForm: FormGroup = this.builder.group({
    firstCtrl: ['', [Validators.required, Validators.email]],
    secondCtrl: ['', [Validators.required, CustomValidators.length]]
  })
  get firstCtrl() {
    return this.valueForm.get('firstCtrl')
  }
  get secondCtrl() {
    return this.valueForm.get('secondCtrl')
  }
  submit() {
    // console.log(this.firstCtrl.value);
    // console.log(this.secondCtrl.value);
    console.log(this.valueForm);
    // console.log(this.valueForm.get('firstCtrl')?.value);
    // console.log(this.valueForm.get('secondCtrl')?.value);
    console.log(this.valueForm.controls['firstCtrl']?.value);
  }
}
