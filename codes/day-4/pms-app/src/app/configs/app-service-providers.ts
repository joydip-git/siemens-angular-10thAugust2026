import { Provider } from "@angular/core";
import { PRODUCT_SERVICE_CLASS, PRODUCT_SERVICE_TOKEN } from "./constants";

export const provideProductService = (): Provider => {
    return {
        provide: PRODUCT_SERVICE_TOKEN,
        useClass: PRODUCT_SERVICE_CLASS
    }
}