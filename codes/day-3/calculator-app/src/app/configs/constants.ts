import { InjectionToken } from "@angular/core";
import { CalculationService, ServiceContract } from "../services/calculation.service";

//export const TOKEN = CalculationService
//export const TOKEN = 'CalculationService'
// export const TOKEN = new InjectionToken<CalculationService>('CalculationService')
export const TOKEN = new InjectionToken<ServiceContract<number, number>>('CalculationService')
export const SERVICE = CalculationService