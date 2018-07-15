import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChSelectionComponent } from './ch-selection.component';

describe('ChSelectionComponent', () => {
  let component: ChSelectionComponent;
  let fixture: ComponentFixture<ChSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
