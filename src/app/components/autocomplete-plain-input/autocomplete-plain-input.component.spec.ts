import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletePlainInputComponent } from './autocomplete-plain-input.component';

describe('AutocompletePlainInputComponent', () => {
  let component: AutocompletePlainInputComponent;
  let fixture: ComponentFixture<AutocompletePlainInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompletePlainInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletePlainInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
