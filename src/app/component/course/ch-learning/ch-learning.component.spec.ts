import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChLearningComponent } from './ch-learning.component';

describe('ChLearningComponent', () => {
  let component: ChLearningComponent;
  let fixture: ComponentFixture<ChLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
