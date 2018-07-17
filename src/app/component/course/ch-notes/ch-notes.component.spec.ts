import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChNotesComponent } from './ch-notes.component';

describe('ChNotesComponent', () => {
  let component: ChNotesComponent;
  let fixture: ComponentFixture<ChNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
