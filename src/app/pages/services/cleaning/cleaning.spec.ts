import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cleaning } from './cleaning';

describe('Cleaning', () => {
  let component: Cleaning;
  let fixture: ComponentFixture<Cleaning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cleaning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cleaning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
