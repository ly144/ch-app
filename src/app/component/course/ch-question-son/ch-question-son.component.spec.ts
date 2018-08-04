import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChQuestionSonComponent } from './ch-question-son.component';

describe('ChQuestionSonComponent', () => {
  let component: ChQuestionSonComponent;
  let fixture: ComponentFixture<ChQuestionSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChQuestionSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChQuestionSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
