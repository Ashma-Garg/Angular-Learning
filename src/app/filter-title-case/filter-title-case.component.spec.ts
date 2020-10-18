import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTitleCaseComponent } from './filter-title-case.component';

describe('FilterTitleCaseComponent', () => {
  let component: FilterTitleCaseComponent;
  let fixture: ComponentFixture<FilterTitleCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTitleCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTitleCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
