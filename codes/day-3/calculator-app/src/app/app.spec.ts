import { ComponentFixture, TestBed } from "@angular/core/testing"
import { App } from "./app";
import { provideCalculationService } from "./configs/app-providers";
describe(
    "App Component Tests",
    () => {

        let fixture: ComponentFixture<App>;
        beforeEach(
            () => {
                TestBed.configureTestingModule({
                    providers: [
                        provideCalculationService()
                    ]
                })
                fixture = TestBed.createComponent(App)
            }
        )

        it("App component fixture is created",
            () => {
                expect(fixture).toBeTruthy()
            }
        )
    }
)