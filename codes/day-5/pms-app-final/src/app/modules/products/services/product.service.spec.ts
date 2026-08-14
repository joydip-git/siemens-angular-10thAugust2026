import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Product } from '../../../models/product';
import { PRODUCT_API_URL } from '../../../configs/constants';
import { of, Subscription } from 'rxjs';
import { ApiResponse } from '../../../models/api-response';

describe('ProductService', () => {
  let service: ProductService;
  let mockHttp: HttpTestingController;
  let mockProducts: Product[] = [{
    productId: 1,
    productName: "Leaf Rake",
    productCode: "GDN-0011",
    releaseDate: "March 19, 2016",
    description: "Leaf rake with 48-inch wooden handle.",
    price: 19.95,
    starRating: 4,
    imageUrl: "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  }]
  let sub: Subscription;

  let mockProduct: Product = {
    productId: 1,
    productName: "Leaf Rake",
    productCode: "GDN-0011",
    releaseDate: "March 19, 2016",
    description: "Leaf rake with 48-inch wooden handle.",
    price: 19.95,
    starRating: 4,
    imageUrl: "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService,
        provideHttpClientTesting()
      ]
    });
    mockHttp = TestBed.inject(HttpTestingController)
    service = TestBed.inject(ProductService);
  });

  afterEach(
    () => {
      mockHttp.verify()
      sub?.unsubscribe()
    }
  )

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('mock http should be created', () => {
    expect(mockHttp).toBeTruthy();
  });

  it("single product must be returned when testing getProductById(1)", () => {
    sub = service
      .getProductById(1)
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            console.log(apiResponse.data);
            expect(apiResponse.data).toBeTruthy()
          }
        },
        error: (err) => console.log(err.message)
      }
      )
    const mockRequest = mockHttp.expectOne(PRODUCT_API_URL + '/' + 1)
    expect(mockRequest.request.method).toEqual('GET')

    mockRequest.flush({ message: 'found product', data: mockProduct })
  }
  )


  it("all products returned when testing getProducts()", () => {
    sub = service
      .getProducts()
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            console.log(apiResponse.data);
            expect(apiResponse.data.length).toEqual(1)
          }
        },
        error: (err) => console.log(err.message)
      }
      )
    const mockRequest = mockHttp.expectOne(PRODUCT_API_URL)
    expect(mockRequest.request.method).toEqual('GET')

    mockRequest.flush({ message: 'found products', data: mockProducts })
  }
  )
});
