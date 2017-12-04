import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedCourseComponent } from './owned-course.component';

describe('OwnedCourseComponent', () => {
  let component: OwnedCourseComponent;
  let fixture: ComponentFixture<OwnedCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnedCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
