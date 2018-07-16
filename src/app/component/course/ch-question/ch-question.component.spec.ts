import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChQuestionComponent } from './ch-question.component';

describe('ChQuestionComponent', () => {
  let component: ChQuestionComponent;
  let fixture: ComponentFixture<ChQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
