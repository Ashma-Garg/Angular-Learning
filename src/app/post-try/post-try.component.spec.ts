import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTryComponent } from './post-try.component';

describe('PostTryComponent', () => {
  let component: PostTryComponent;
  let fixture: ComponentFixture<PostTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
