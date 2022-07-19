import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerCustomeHeader1Component } from './datepicker-custome-header1.component';

describe('DatepickerCustomeHeader1Component', () => {
  let component: DatepickerCustomeHeader1Component;
  let fixture: ComponentFixture<DatepickerCustomeHeader1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerCustomeHeader1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerCustomeHeader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
