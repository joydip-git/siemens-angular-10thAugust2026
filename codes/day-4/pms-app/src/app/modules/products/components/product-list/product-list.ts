import { Component, inject, input, InputSignal, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';
import { Product } from '../../../../models/product';
import { PRODUCT_SERVICE_TOKEN } from '../../../../configs/constants';
import { RouterLink } from "@angular/router";
import { Observable, Subscription } from 'rxjs';
import { ApiResponse } from '../../../../models/api-response';

@Component({
  selector: 'app-product-list',
  imports: [UpperCasePipe, CurrencyPipe, ProductFilterPipe, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit, OnDestroy {

  filterText: InputSignal<string> = input<string>('')
  products: WritableSignal<Product[]> = signal([]);
  errorInfo = signal('')
  isRequestOver = signal(false)

  private productSvcRef = inject(PRODUCT_SERVICE_TOKEN)
  private fetchSubscription?: Subscription;

  ngOnInit(): void {
    this.fetchProducts()
  }
  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }
  private fetchProducts() {
    const obs: Observable<ApiResponse<Product[]>> = this.productSvcRef
      .getProducts();
    this.fetchSubscription =
      obs.subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.products.set(apiResponse.data)
            this.errorInfo.set('')
            this.isRequestOver.set(true)
          } else {
            this.products.set([])
            this.errorInfo.set(apiResponse.message)
            this.isRequestOver.set(true)
          }
        },
        error: (err) => {
          this.products.set([])
          this.errorInfo.set(err.message)
          this.isRequestOver.set(true)
        }
      })
  }
}
