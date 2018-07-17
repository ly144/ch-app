import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChNotesSonComponent } from './ch-notes-son.component';

describe('ChNotesSonComponent', () => {
  let component: ChNotesSonComponent;
  let fixture: ComponentFixture<ChNotesSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChNotesSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChNotesSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
