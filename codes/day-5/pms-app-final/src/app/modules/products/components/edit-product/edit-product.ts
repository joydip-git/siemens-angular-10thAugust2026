import { Component, inject, OnInit } from '@angular/core';
import { ProductStorageService } from '../../services/product-storage.service';

@Component({
  selector: 'app-edit-product',
  imports: [],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct implements OnInit {
  private productStoreSvc = inject(ProductStorageService)

  ngOnInit(): void {
    const p = this.productStoreSvc.store()
    console.log(p ? p : 'NA');
  }

}
