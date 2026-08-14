import { Component, signal } from '@angular/core';
import { FilterInput } from "../../../shared/components/filter-input/filter-input";
import { ProductList } from "../product-list/product-list";

@Component({
  selector: 'app-product-container',
  imports: [FilterInput, ProductList],
  templateUrl: './product-container.html',
  styleUrl: './product-container.css',
})
export class ProductContainer {
  filterdata = signal('')
}
