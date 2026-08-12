import { TestBed } from "@angular/core/testing";
import { ServiceContract } from "./calculation.service";
import { provideCalculationService } from "../configs/app-providers";
import { TOKEN } from "../configs/constants";

describe(
    "CalculationService Tests",
    () => {

        let svc: ServiceContract<number, number>;
        beforeEach(
            () => {

                TestBed.configureTestingModule({
                    providers: [
                        provideCalculationService()
                    ]
                })

                svc = TestBed.inject<ServiceContract<number, number>>(TOKEN)
            }
        )

        it(
            "testing whether Calculation Service instance is created successfully or not",
            () => {
                expect(svc).toBeTruthy()
            }
        )

        it(
            "testing whether Calculation Service add method returns 4 when 2 and 2 are passed as parameters",
            () => {
                const actual = svc.add(2, 2)                
                expect(actual).toEqual(4)
            }
        )

    }
)