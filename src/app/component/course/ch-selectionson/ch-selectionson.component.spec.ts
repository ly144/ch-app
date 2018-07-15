import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChSelectionsonComponent } from './ch-selectionson.component';

describe('ChSelectionsonComponent', () => {
  let component: ChSelectionsonComponent;
  let fixture: ComponentFixture<ChSelectionsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChSelectionsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChSelectionsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
