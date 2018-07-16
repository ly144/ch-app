import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChCommentComponent } from './ch-comment.component';

describe('ChCommentComponent', () => {
  let component: ChCommentComponent;
  let fixture: ComponentFixture<ChCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
