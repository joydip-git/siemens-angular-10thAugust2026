import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ProductStorageService } from '../../services/product-storage.service';
import { Product } from '../../../../models/product';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../configs/constants';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct implements OnInit, OnDestroy {
  private productStoreSvc = inject(ProductStorageService)
  private productSvc = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)
  private formBuilder = inject(FormBuilder)
  private router = inject(Router)
  private editSubscription?: Subscription;

  product = signal<Product | undefined>(undefined)
  editForm?: FormGroup;

  ngOnInit(): void {
    this.product.set(this.productStoreSvc.store())
    this.editForm = this.formBuilder.group({
      productId: [this.product()?.productId],
      productName: [this.product()?.productName],
      productCode: [this.product()?.productCode],
      price: [this.product()?.price],
      description: [this.product()?.description],
      starRating: [this.product()?.starRating],
      releaseDate: [this.product()?.releaseDate],
      imageUrl: [this.product()?.imageUrl],
    })
  }
  edit() {
    if (window.confirm('update the product?')) {
      const p = this.editForm?.value as Product
      this.editSubscription = this.productSvc
        .updateProduct(p.productId, p)
        .subscribe({
          next: (apiResponse) => {
            if (apiResponse.data !== null) {
              window.alert(apiResponse.message)
            } else {
              window.alert(apiResponse.message)
            }
          },
          error: (err) => {
            window.alert(err.message)
          },
          complete: () => {
            this.router.navigate(['/products'])
          }
        })
    }
  }

  ngOnDestroy(): void {
    this.editSubscription?.unsubscribe()
  }
}
