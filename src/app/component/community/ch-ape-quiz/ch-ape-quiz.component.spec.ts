import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChApeQuizComponent } from './ch-ape-quiz.component';

describe('ChApeQuizComponent', () => {
  let component: ChApeQuizComponent;
  let fixture: ComponentFixture<ChApeQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChApeQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChApeQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
