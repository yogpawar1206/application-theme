import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewOpenComponent } from './dialog-overview-open.component';

describe('DialogOverviewOpenComponent', () => {
  let component: DialogOverviewOpenComponent;
  let fixture: ComponentFixture<DialogOverviewOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOverviewOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
