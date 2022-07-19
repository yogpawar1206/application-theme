import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSimpleComponent } from './autocomplete-simple.component';

describe('AutocompleteSimpleComponent', () => {
  let component: AutocompleteSimpleComponent;
  let fixture: ComponentFixture<AutocompleteSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
