import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalImplant } from './dental-implant';

describe('DentalImplant', () => {
  let component: DentalImplant;
  let fixture: ComponentFixture<DentalImplant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentalImplant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentalImplant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
