import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCanal } from './root-canal';

describe('RootCanal', () => {
  let component: RootCanal;
  let fixture: ComponentFixture<RootCanal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootCanal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootCanal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
