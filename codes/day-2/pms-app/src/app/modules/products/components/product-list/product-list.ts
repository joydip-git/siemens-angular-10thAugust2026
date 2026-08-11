import { Component, input, signal } from '@angular/core';
import { productrecords } from '../../../../data/productrecords';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';

@Component({
  selector: 'app-product-list',
  imports: [UpperCasePipe, CurrencyPipe, ProductFilterPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  filterText = input<string>('')
  products = signal(productrecords)
}
