import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogElementOpenComponent } from './dialog-element-open.component';

describe('DialogElementOpenComponent', () => {
  let component: DialogElementOpenComponent;
  let fixture: ComponentFixture<DialogElementOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogElementOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogElementOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
