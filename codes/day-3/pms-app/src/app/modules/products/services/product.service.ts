//import { Service } from '@angular/core';
import { productrecords } from "../../../data/productrecords";
import { Product } from "../../../models/product";
import { ServiceContract } from "./service-contract";

// @Service()
export class ProductService implements ServiceContract {
    getProducts(): Product[] {
        return [...productrecords]
    }
}
