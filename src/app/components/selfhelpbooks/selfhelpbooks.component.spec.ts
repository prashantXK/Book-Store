import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfhelpbooksComponent } from './selfhelpbooks.component';

describe('SelfhelpbooksComponent', () => {
  let component: SelfhelpbooksComponent;
  let fixture: ComponentFixture<SelfhelpbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelfhelpbooksComponent]
    });
    fixture = TestBed.createComponent(SelfhelpbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
