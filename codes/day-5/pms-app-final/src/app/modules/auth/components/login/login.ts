import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../../../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private builder = inject(FormBuilder)
  private authSvc = inject(AuthService)
  private loginSubscription?: Subscription;

  loginForm = this.builder.group({
    username: ['enter user name', [Validators.required, Validators.email]],
    password: ['enter password', Validators.required]
  })

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }

  submit() {
    const user = this.loginForm.value
    this.loginSubscription = this.authSvc.login(user as User).subscribe({
      next: (apiResponse) => {
        console.log(apiResponse);
      },
      error: (err) => {
        window.alert(err.message)
      },
      complete: () => { }
    })
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe()
  }
}
