import { Injectable, Service, signal } from '@angular/core';

//@Service()
@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    private _store = signal<string | null>(null)

    saveToken(token: string) {
        this._store.set(token)
    }
    removeToken() {
        this._store.set(null)
    }
    getTokenStore() {
        return this._store
    }
}
