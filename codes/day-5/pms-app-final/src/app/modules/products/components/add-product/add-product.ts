import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PRODUCT_SERVICE_TOKEN } from '../../../../configs/constants';
import { Product } from '../../../../models/product';
import { ServiceContract } from '../../services/service-contract';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct implements OnDestroy {

  private productSvc = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)
  private formBuilder = inject(FormBuilder)
  private router = inject(Router)
  private addSubscription?: Subscription;



  addForm = this.formBuilder.group({
    productId: [0],
    productName: ['enter name'],
    productCode: ['enter code'],
    price: [0],
    description: ['enter description'],
    starRating: [0],
    releaseDate: ['enter date'],
    imageUrl: ['enter url'],
  })

  add() {
    if (window.confirm('add the product?')) {
      const p = this.addForm.value as Product
      this.addSubscription = this.productSvc
        .addProduct(p)
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
    this.addSubscription?.unsubscribe()
  }
}
