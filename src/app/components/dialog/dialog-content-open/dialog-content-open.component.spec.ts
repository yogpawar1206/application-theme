import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentOpenComponent } from './dialog-content-open.component';

describe('DialogContentOpenComponent', () => {
  let component: DialogContentOpenComponent;
  let fixture: ComponentFixture<DialogContentOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
