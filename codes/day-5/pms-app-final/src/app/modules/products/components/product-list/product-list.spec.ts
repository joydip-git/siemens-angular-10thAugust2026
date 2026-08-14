import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList } from './product-list';
import { ProductService } from '../../services/product.service';
import { PRODUCT_SERVICE_TOKEN } from '../../../../configs/constants';
import { Product } from '../../../../models/product';
import { of } from 'rxjs';
import { ApiResponse } from '../../../../models/api-response';
import { provideHttpClient } from '@angular/common/http';

describe('ProductList', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;
  let mockSvc: jasmine.SpyObj<ProductService>;

  let mockProducts: Product[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 4,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  ]

  beforeEach(
    async () => {

      mockSvc = jasmine.createSpyObj("ProductService", ["getProducts", "getProductsById", "addProduct", "deleteProduct", "updateProduct"])

      await TestBed.configureTestingModule({
        imports: [
          ProductList,
        ],
        providers: [
          //provideHttpClient(),
          {
            provide: PRODUCT_SERVICE_TOKEN,
            useValue: mockSvc
          }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(ProductList);
      component = fixture.componentInstance;
      await fixture.whenStable();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create service and assign to productSvcRef', () => {
    expect(component.productSvcRef).toBeTruthy();
  });

  it("testing getProducts method call",
    () => {
      const apiResponse: ApiResponse<Product[]> = { message: 'found products', data: mockProducts }
      const obs = of(apiResponse)
      mockSvc.getProducts.and.returnValue(obs)

      component.ngOnInit()
      // component.productSvcRef.getProducts().subscribe({
      //   next: (resp) => {
      //     if (resp.data !== null) {
      //       expect(resp.data.length).toBe(1)
      //     }
      //   }
      // })
      expect(component.products().length).toEqual(1)
    }
  )
});
