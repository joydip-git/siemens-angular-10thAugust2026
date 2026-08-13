import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { Product } from '../../../../models/product';
import { ProductStorageService } from '../../services/product-storage.service';
import { Subscription } from 'rxjs';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../configs/constants';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit, OnDestroy {
  private router = inject(Router)
  private currentRoute = inject(ActivatedRoute)
  private productStoreSvc = inject(ProductStorageService)
  private fetchSubscription?: Subscription;
  private productSvc = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)

  product = signal<Product | undefined>(undefined);
  isRequestOver = signal(false)
  errorMessage = signal('')

  ngOnInit(): void {
    const currentState: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const params: Params = currentState.params
    const id = Number(params["id"])
    this.fetchProductById(id)
  }

  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }

  goToEdit() {
    this.productStoreSvc.save(this.product())

    this.router.navigate(
      ['/products', 'edit'],
      {
        queryParams: {
          id: this.product()?.productId
        }
      }
    )
  }

  private fetchProductById(id: number) {
    this.fetchSubscription = this.productSvc
      .getProductById(id)
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.product.set(apiResponse.data)
            this.errorMessage.set('')
            this.isRequestOver.set(true)
          } else {
            this.product.set(undefined)
            this.errorMessage.set(apiResponse.message)
            this.isRequestOver.set(true)
          }
        },
        error: (err) => {
          this.product.set(undefined)
          this.errorMessage.set(err.message)
          this.isRequestOver.set(true)
        }
      })
  }
}
