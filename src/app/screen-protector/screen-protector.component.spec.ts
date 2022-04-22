import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenProtectorComponent } from './screen-protector.component';

describe('ScreenProtectorComponent', () => {
  let component: ScreenProtectorComponent;
  let fixture: ComponentFixture<ScreenProtectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenProtectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenProtectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
