import { Provider } from "@angular/core";
import { SERVICE, TOKEN } from "./constants";

const provider: Provider = {
    provide: TOKEN,
    useClass: SERVICE
}

export const provideCalculationService = (): Provider => {
    return provider
}