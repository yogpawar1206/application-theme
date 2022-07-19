import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogfromMenuOpenComponent } from './dialogfrom-menu-open.component';

describe('DialogfromMenuOpenComponent', () => {
  let component: DialogfromMenuOpenComponent;
  let fixture: ComponentFixture<DialogfromMenuOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogfromMenuOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogfromMenuOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
