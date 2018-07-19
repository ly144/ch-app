import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChPersonNotesComponent } from './ch-person-notes.component';

describe('ChPersonNotesComponent', () => {
  let component: ChPersonNotesComponent;
  let fixture: ComponentFixture<ChPersonNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChPersonNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChPersonNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
