import { Observable } from "rxjs";
import { PRODUCT_API_URL } from "../../../configs/constants";
import { ApiResponse } from "../../../models/api-response";
import { Product } from "../../../models/product";
import { ServiceContract } from "./service-contract";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export class ProductService implements ServiceContract {

    private _http = inject(HttpClient)
    
    getProductById(id: number): Observable<ApiResponse<Product>> {
        return this._http.get<ApiResponse<Product>>(`${PRODUCT_API_URL}/${id}`)
    }

    getProducts(): Observable<ApiResponse<Product[]>> {
        return this._http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
    }
}
