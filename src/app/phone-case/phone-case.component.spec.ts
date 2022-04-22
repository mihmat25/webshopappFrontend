import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCaseComponent } from './phone-case.component';

describe('PhoneCaseComponent', () => {
  let component: PhoneCaseComponent;
  let fixture: ComponentFixture<PhoneCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
