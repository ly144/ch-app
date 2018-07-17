import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChCourseChapterComponent } from './ch-course-chapter.component';

describe('ChCourseChapterComponent', () => {
  let component: ChCourseChapterComponent;
  let fixture: ComponentFixture<ChCourseChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChCourseChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChCourseChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
