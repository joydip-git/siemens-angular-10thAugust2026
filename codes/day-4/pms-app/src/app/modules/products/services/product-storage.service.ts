import { Injectable, signal } from '@angular/core';
import { Product } from '../../../models/product';

@Injectable({ providedIn: 'root' })
export class ProductStorageService {
    private _store = signal<Product | undefined>(undefined)

    save(p: Product | undefined) {
        this._store.set(p)
    }

    get store() {
        return this._store
    }
}