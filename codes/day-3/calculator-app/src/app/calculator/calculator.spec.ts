import { ComponentFixture, TestBed } from "@angular/core/testing"
import { Calculator } from "./calculator";
//import { TOKEN } from "../configs/constants";
import { provideCalculationService } from "../configs/app-providers";
//import { ServiceContract } from "../services/calculation.service";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

describe("Testing Calculator Component",
    () => {

        let fixture: ComponentFixture<Calculator>;
        const message = 'welcome to calculator app'
        let calculator: Calculator;

        beforeEach(
            async () => {
                TestBed.configureTestingModule({
                    providers: [
                        provideCalculationService()
                    ]
                })
                fixture = TestBed.createComponent(Calculator)
                calculator = fixture.componentInstance
                await fixture.whenStable()
            }
        )

        it("fixture has been created",
            () => {
                expect(fixture).toBeTruthy()
            }
        )

        it(`the component title property has the value ${message}`,
            () => {
                // const calculator = fixture.componentInstance
                expect(calculator.title()).toMatch(/welcome to calculator app/)
            }
        )

        // it(`the component template's h2 element displays ${message}`,
        //     async () => {
        //         await fixture.whenStable()
        //         const template: HTMLElement = fixture.debugElement.nativeElement
        //         const h2Element = template.querySelector('h2')
        //         expect(h2Element?.textContent).toEqual(message)
        //     }
        // )

        it(`the component template's h2 element displays ${message}`,
            () => {
                //fixture.detectChanges()
                const template: HTMLElement = fixture.debugElement.nativeElement
                const h2Element = template.querySelector('h2')
                expect(h2Element?.textContent).toEqual(message)
            }
        )

        it(`the component choice property receives value 1 when add radio button is checked`,
            () => {
                //fixture.detectChanges()
                //const calculator = fixture.componentInstance;
                const template: DebugElement = fixture.debugElement
                const radio: HTMLElement = template.query(By.css('#radioAdd')).nativeElement
                radio.click()
                expect(calculator.choice()).toEqual(1)
            }
        )
    }
)