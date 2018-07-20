import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChBackstageAddCourseComponent } from './ch-backstage-add-course.component';

describe('ChBackstageAddCourseComponent', () => {
  let component: ChBackstageAddCourseComponent;
  let fixture: ComponentFixture<ChBackstageAddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChBackstageAddCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChBackstageAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
