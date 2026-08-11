import { Component, inject, input, signal } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';
import { Product } from '../../../../models/product';
import { PRODUCT_SERVICE_TOKEN } from '../../../../configs/constants';

@Component({
  selector: 'app-product-list',
  imports: [UpperCasePipe, CurrencyPipe, ProductFilterPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  
  filterText = input<string>('')
  protected products = signal<Product[]>([])
  
  private productSvcRef = inject(PRODUCT_SERVICE_TOKEN)

  constructor() {
    this.products.set(this.productSvcRef.getProducts())
  }
}
