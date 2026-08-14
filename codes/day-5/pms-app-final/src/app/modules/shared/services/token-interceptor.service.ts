import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenStorageService } from "./token-storage.service";

//HttpHandlerFn -> Represents the next interceptor in an interceptor chain, or the real backend if there are no further interceptors.
export const TokenInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {

    const tokenSvc = inject(TokenStorageService)
    const tokenSignal = tokenSvc.getTokenStore()
    const token = tokenSignal()

    if (token !== null) {
        const clonedReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${token}`)
        })
        return next(clonedReq)
    }
    return next(req)
}


// class TokenIn implements HttpInterceptor{
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(req)
//     }
// }