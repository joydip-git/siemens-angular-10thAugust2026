import { Observable } from "rxjs";
import { Product } from "../../../models/product";
import { ApiResponse } from "../../../models/api-response";

export interface ServiceContract {
    getProducts(): Observable<ApiResponse<Product[]>>;
    getProductById(id: number): Observable<ApiResponse<Product>>;
}