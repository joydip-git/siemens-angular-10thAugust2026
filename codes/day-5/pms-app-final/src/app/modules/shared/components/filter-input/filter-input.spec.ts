import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInput } from './filter-input';

describe('FilterInput', () => {
  let component: FilterInput;
  let fixture: ComponentFixture<FilterInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterInput],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
