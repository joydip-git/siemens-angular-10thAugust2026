import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {

  const router = inject(Router)
  const tokenSvc = inject(TokenStorageService)
  const tokenSignal = tokenSvc.getTokenStore()
  const token = tokenSignal()

  if (token === null) {
    router.navigate(['/login'], {
      queryParams: {
        returnUrl: state.url
      }
    })
    return false
  }
  return true;
};
