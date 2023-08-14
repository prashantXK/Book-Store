import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthlifestyleComponent } from './healthlifestyle.component';

describe('HealthlifestyleComponent', () => {
  let component: HealthlifestyleComponent;
  let fixture: ComponentFixture<HealthlifestyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthlifestyleComponent]
    });
    fixture = TestBed.createComponent(HealthlifestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
