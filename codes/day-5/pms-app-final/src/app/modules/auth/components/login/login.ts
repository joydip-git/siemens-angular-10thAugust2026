import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../../../../models/user';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../../shared/services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnDestroy {

  private builder = inject(FormBuilder)
  private authSvc = inject(AuthService)
  private tokenSvc = inject(TokenStorageService)
  private router = inject(Router)
  private currentRoute = inject(ActivatedRoute)

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
    this.loginSubscription = this.authSvc
      .login(user as User)
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.tokenSvc.saveToken(apiResponse.data)
          } else {
            window.alert(apiResponse.message)
          }
        },
        error: (err) => {
          window.alert(err.message)
        },
        complete: () => {
          const snapshot = this.currentRoute.snapshot
          const returnUrl = snapshot.queryParams["returnUrl"]
          if (returnUrl) {
            this.router.navigate([returnUrl])
          } else
            this.router.navigate(['/products'])
        }
      })
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe()
  }
}
