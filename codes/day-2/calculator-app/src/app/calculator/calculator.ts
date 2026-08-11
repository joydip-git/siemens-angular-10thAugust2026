import { Component, Inject, inject, signal } from '@angular/core';
//import { provideCalculationService } from '../configs/app-providers';
//import { CalculationService } from '../services/calculation.service';
import { ServiceContract } from '../services/calculation.service';
import { TOKEN } from '../configs/constants';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
  // providers: [
  //   provideCalculationService()
  // ]
})
export class Calculator {
  protected choice = signal(0)
  protected first = signal(0)
  protected second = signal(0)
  protected result = signal(0)

  // private calcSvc: ServiceContract<number, number>;
  //1. when using class name as toke name (don't use interface name)
  // constructor(calcSvc: CalculationService) {
  //   this.calcSvc = calcSvc
  //   console.log('Calculator created');
  // }

  // constructor(private calcSvc: CalculationService) {
  //   console.log('Calculator created');
  // }

  //private calcSvc: CalculationService = inject(CalculationService)

  //2. when token is string (don't use inject() method in that case)
  // private calcSvc: ServiceContract<number, number>;
  // constructor(@Inject(TOKEN) calcSvc: ServiceContract<number, number>) {
  //   this.calcSvc = calcSvc
  // }

  //3. when the token is InjectionToken type object
  // private calcSvc: ServiceContract<number, number>;
  // constructor(@Inject(TOKEN) calcSvc: ServiceContract<number, number>) {
  //   this.calcSvc = calcSvc
  // }

  private calcSvc: ServiceContract<number, number>;
  constructor() {
    this.calcSvc = inject<ServiceContract<number, number>>(TOKEN);
  }
  //private calcSvc: CalculationService = inject(TOKEN);
  //private calcSvc: ServiceContract<number, number> = inject(TOKEN);

  calculate() {
    switch (this.choice()) {
      case 1:
        this.result.set(this.calcSvc.add(this.first(), this.second()))
        break;

      case 2:
        this.result.set(this.calcSvc.subtract(this.first(), this.second()))
        break;

      case 3:
        this.result.set(this.calcSvc.multiply(this.first(), this.second()))
        break;

      case 4:
        this.result.set(this.calcSvc.divide(this.first(), this.second()))
        break;

      default:
        break;
    }
  }
}
