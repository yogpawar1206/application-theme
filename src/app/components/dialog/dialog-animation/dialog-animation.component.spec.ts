import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnimationComponent } from './dialog-animation.component';

describe('DialogAnimationComponent', () => {
  let component: DialogAnimationComponent;
  let fixture: ComponentFixture<DialogAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
