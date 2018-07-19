import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChPersonCourseComponent } from './ch-person-course.component';

describe('ChPersonCourseComponent', () => {
  let component: ChPersonCourseComponent;
  let fixture: ComponentFixture<ChPersonCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChPersonCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChPersonCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
