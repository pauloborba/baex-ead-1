import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRegisteringComponent } from './students-registering.component';

describe('StudentsRegisteringComponent', () => {
  let component: StudentsRegisteringComponent;
  let fixture: ComponentFixture<StudentsRegisteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsRegisteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRegisteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
