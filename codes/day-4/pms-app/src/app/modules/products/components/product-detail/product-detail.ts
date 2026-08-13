import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  private router = inject(Router)
  private currentRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    //this.currentRoute.params
    const currentState: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const params: Params = currentState.params
    const id = Number(params["id"])
    console.log(id);
    //send an HTTP request to backend to fetch the product corresponding to this id
    //display the same in the UI
  }
  goToEdit() {
    //save the fetched product at a common storage so that edit product can pick it up
    this.router.navigate(
      ['/products', 'edit'],
      {
        queryParams: {
          id: 3
        }
      }
    )
  }
}
